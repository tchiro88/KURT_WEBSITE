#!/usr/bin/env bash
# Deploy deadband.io Worker via Cloudflare API
# Usage: ./deploy.sh <CF_API_TOKEN> <CF_EMAIL> <ACCOUNT_ID> <ZONE_ID>
#
# You can also export these as env vars before running:
#   export CF_API_TOKEN=...
#   export CF_EMAIL=...
#   export CF_ACCOUNT_ID=...
#   export CF_ZONE_ID=...

set -euo pipefail

CF_API_TOKEN="${1:-${CF_API_TOKEN:-}}"
CF_EMAIL="${2:-${CF_EMAIL:-}}"
CF_ACCOUNT_ID="${3:-${CF_ACCOUNT_ID:-}}"
CF_ZONE_ID="${4:-${CF_ZONE_ID:-}}"

WORKER_NAME="deadband-io"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKER_FILE="$SCRIPT_DIR/worker.js"

if [[ -z "$CF_API_TOKEN" || -z "$CF_ACCOUNT_ID" || -z "$CF_ZONE_ID" ]]; then
  echo "ERROR: Missing required credentials."
  echo "Usage: ./deploy.sh <CF_API_TOKEN> <CF_EMAIL> <ACCOUNT_ID> <ZONE_ID>"
  echo ""
  echo "Find these at:"
  echo "  Account ID / Zone ID: dash.cloudflare.com → deadband.io overview (right sidebar)"
  echo "  API Token: dash.cloudflare.com → My Profile → API Tokens"
  exit 1
fi

# For Global API Key, use X-Auth-Email + X-Auth-Key
# For API Token, use Authorization: Bearer
if [[ -n "$CF_EMAIL" ]]; then
  AUTH_HEADERS=(-H "X-Auth-Email: $CF_EMAIL" -H "X-Auth-Key: $CF_API_TOKEN")
else
  AUTH_HEADERS=(-H "Authorization: Bearer $CF_API_TOKEN")
fi

echo "==> Uploading Worker script: $WORKER_NAME"
UPLOAD_RESP=$(curl -s -X PUT \
  "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/workers/scripts/$WORKER_NAME" \
  "${AUTH_HEADERS[@]}" \
  -F "script=@$WORKER_FILE;type=application/javascript+module" \
  -F 'metadata={"main_module":"worker.js","bindings":[],"compatibility_date":"2024-11-05"};type=application/json')

echo "$UPLOAD_RESP" | python3 -m json.tool 2>/dev/null || echo "$UPLOAD_RESP"

SUCCESS=$(echo "$UPLOAD_RESP" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('success','false'))" 2>/dev/null)
if [[ "$SUCCESS" != "True" && "$SUCCESS" != "true" ]]; then
  echo "ERROR: Worker upload failed. See response above."
  exit 1
fi
echo "✓ Worker uploaded"

# Create zone routes
for PATTERN in "deadband.io/*" "www.deadband.io/*"; do
  echo "==> Adding route: $PATTERN"
  ROUTE_RESP=$(curl -s -X POST \
    "https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/workers/routes" \
    "${AUTH_HEADERS[@]}" \
    -H "Content-Type: application/json" \
    --data "{\"pattern\":\"$PATTERN\",\"script\":\"$WORKER_NAME\"}")
  echo "$ROUTE_RESP" | python3 -m json.tool 2>/dev/null || echo "$ROUTE_RESP"
done

echo ""
echo "✓ Deployment complete — deadband.io should be live within ~30 seconds"
echo ""
echo "  If routes already exist, update them via the Cloudflare dashboard:"
echo "  dash.cloudflare.com → deadband.io → Workers Routes"
