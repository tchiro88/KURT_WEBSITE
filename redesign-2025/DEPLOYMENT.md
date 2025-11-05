# Cloudflare Pages Deployment Guide

Complete guide to deploying your Kurt Adams Portfolio V2 to Cloudflare Pages.

## Prerequisites

Before you begin, ensure you have:

- ✅ A Cloudflare account ([sign up free](https://dash.cloudflare.com/sign-up))
- ✅ Your portfolio code pushed to GitHub
- ✅ Node.js 18+ installed locally
- ✅ Git configured with your GitHub account

## Method 1: Git Integration (Recommended)

This method automatically deploys your site whenever you push to GitHub.

### Step 1: Push to GitHub

```bash
cd redesign-2025

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio V2"

# Create main branch
git branch -M main

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Visit [https://dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**

2. **Authorize GitHub**
   - Click **Connect GitHub**
   - Authorize Cloudflare Pages to access your repositories
   - Select your portfolio repository

3. **Configure Build Settings**

   Enter these exact settings:

   ```
   Framework preset: Astro
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

   **Environment variables** (if needed):
   ```
   NODE_VERSION: 18
   ```

4. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will:
     - Clone your repository
     - Install dependencies
     - Run the build command
     - Deploy to their global network
   - First deployment takes ~2-3 minutes

5. **View Your Site**
   - Once deployed, you'll get a URL like: `https://kurt-adams-portfolio.pages.dev`
   - Click the URL to view your live site

### Step 3: Configure Custom Domain (Optional)

1. **In Cloudflare Pages dashboard:**
   - Go to your project → **Custom domains**
   - Click **Set up a custom domain**

2. **Add your domain:**
   - Enter: `kurt-adams.autosapien.ai` (or your domain)
   - Cloudflare will provide DNS configuration instructions

3. **Update DNS:**
   - If your domain is already on Cloudflare:
     - DNS records will be added automatically ✅
   - If your domain is elsewhere:
     - Add a CNAME record pointing to your `.pages.dev` domain

4. **Update `astro.config.mjs`:**
   ```javascript
   export default defineConfig({
     site: 'https://kurt-adams.autosapien.ai', // Your custom domain
     // ...
   });
   ```

5. **Commit and push:**
   ```bash
   git add astro.config.mjs
   git commit -m "Update site URL to custom domain"
   git push
   ```

### Step 4: Automatic Deployments

Every time you push to GitHub, Cloudflare will:
- ✅ Automatically detect the change
- ✅ Build your site
- ✅ Deploy to production
- ✅ Invalidate CDN cache

**Deployment notifications:**
- Enable GitHub commit status checks
- Get notified of successful/failed deployments
- View deployment logs in Cloudflare dashboard

---

## Method 2: Direct Upload (Wrangler CLI)

Use this method for quick one-off deployments or local testing.

### Step 1: Install Wrangler

```bash
# Install globally
npm install -g wrangler

# Or use npx (no installation needed)
npx wrangler --version
```

### Step 2: Authenticate

```bash
wrangler login
```

This opens a browser window to authenticate with Cloudflare.

### Step 3: Build Your Site

```bash
cd redesign-2025
npm install
npm run build
```

Your site will be built to the `dist/` folder.

### Step 4: Deploy

```bash
# First deployment - creates the project
npx wrangler pages deploy dist --project-name=kurt-adams-portfolio

# Subsequent deployments
npx wrangler pages deploy dist
```

You'll get a deployment URL like: `https://abcd1234.kurt-adams-portfolio.pages.dev`

### Step 5: Set Production Branch (Optional)

```bash
npx wrangler pages project create kurt-adams-portfolio --production-branch=main
```

---

## Environment Variables

If your site needs environment variables (e.g., API keys), add them in Cloudflare:

1. **In Cloudflare Pages dashboard:**
   - Go to your project → **Settings** → **Environment variables**

2. **Add variables:**
   - Variable name: `ANTHROPIC_API_KEY` (example)
   - Value: `sk-ant-...` (your key)
   - Environment: **Production** and/or **Preview**

3. **Access in code:**
   ```javascript
   // In Astro components or API routes
   const apiKey = import.meta.env.ANTHROPIC_API_KEY;
   ```

**Note:** Astro only exposes env vars prefixed with `PUBLIC_` to the client. Server-side code can access all env vars.

---

## Preview Deployments

Cloudflare automatically creates preview deployments for:
- **Pull Requests** - Each PR gets a unique URL
- **Branches** - Deploy non-main branches for testing

**Preview URL format:**
```
https://<HASH>.<PROJECT>.pages.dev
```

**Access preview deployments:**
1. Go to your project in Cloudflare dashboard
2. Click **View deployments**
3. Each deployment has a unique URL

---

## Performance Optimization

### Cloudflare CDN

Your site is automatically served from 250+ global locations:
- ✅ Sub-50ms response times worldwide
- ✅ Automatic gzip/brotli compression
- ✅ HTTP/2 and HTTP/3 support
- ✅ Automatic SSL certificates

### Caching

Cloudflare automatically caches static assets:
- **HTML**: Cached with `s-maxage=0` (always revalidate)
- **CSS/JS**: Cached forever (content-hash in filename)
- **Images**: Cached for 30 days

**Custom cache rules** (optional):
1. Go to **Caching** → **Cache Rules**
2. Add rules like:
   ```
   If URL contains "/images/"
   Then: Cache Level = Cache Everything
   Edge TTL = 1 year
   ```

### Image Optimization

Enable **Cloudflare Images** for automatic optimization:
1. Enable in Cloudflare dashboard
2. Update image URLs to use Cloudflare CDN
3. Images are automatically:
   - Resized to optimal dimensions
   - Converted to WebP/AVIF
   - Compressed with minimal quality loss

**Example:**
```astro
<!-- Before -->
<img src="/images/project.jpg" alt="Project" />

<!-- After (with Cloudflare Images) -->
<img src="https://imagedelivery.net/YOUR_ACCOUNT_ID/project/public" alt="Project" />
```

---

## Security Best Practices

### Security Headers

Add custom headers in Cloudflare Pages:

1. **Create `_headers` file** in `public/` folder:

```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.github.com;
```

2. **Deploy** - Cloudflare will apply these headers automatically

### HTTPS

All Cloudflare Pages sites get:
- ✅ Free SSL certificate (Let's Encrypt)
- ✅ Automatic HTTPS redirect
- ✅ HSTS preloading support

---

## Rollback a Deployment

If something goes wrong, roll back instantly:

1. **In Cloudflare Pages dashboard:**
   - Go to your project → **Deployments**
   - Find a previous successful deployment
   - Click **⋮** → **Rollback to this deployment**

2. **Instant rollback:**
   - Takes ~10 seconds
   - No rebuild required
   - Traffic instantly routes to previous version

---

## Monitoring & Analytics

### Cloudflare Web Analytics

Enable free, privacy-friendly analytics:

1. **Enable in Cloudflare:**
   - Go to **Analytics** → **Web Analytics**
   - Click **Add a site**
   - Copy the tracking script

2. **Add to `src/layouts/BaseLayout.astro`:**
   ```astro
   <!-- Cloudflare Web Analytics -->
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
   ```

3. **View analytics:**
   - Page views, unique visitors
   - Geographic distribution
   - Device and browser stats
   - Completely GDPR-compliant (no cookies)

### Deployment Logs

View build logs for troubleshooting:

1. **In Cloudflare Pages dashboard:**
   - Go to your project → **Deployments**
   - Click on a deployment
   - View full build logs

---

## Troubleshooting

### Build Fails

**Issue:** Build fails with "Module not found"

**Solution:**
- Check that `package.json` includes all dependencies
- Ensure `npm ci` is used (installs exact versions)
- Verify Node version matches local (set `NODE_VERSION` env var)

**Issue:** Build fails with "Out of memory"

**Solution:**
- Reduce build complexity (split large files)
- Optimize images before committing
- Contact Cloudflare support to increase memory limit

### Deployment Issues

**Issue:** Site shows old content after deployment

**Solution:**
- Clear Cloudflare cache: **Caching** → **Purge Everything**
- Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check deployment completed successfully in dashboard

**Issue:** Custom domain not working

**Solution:**
- Verify DNS records are correct
- Allow 24-48 hours for DNS propagation
- Check Cloudflare SSL certificate is active
- Ensure domain is not behind another CDN (conflicting)

### Performance Issues

**Issue:** Slow page loads

**Solution:**
- Enable **Argo Smart Routing** in Cloudflare (paid)
- Optimize images (use WebP, reduce size)
- Enable **HTTP/3** in Cloudflare settings
- Check Lighthouse score: [web.dev/measure](https://web.dev/measure/)

---

## Advanced Configuration

### Custom Build Command

Override the build command in Cloudflare:

```bash
# Standard build
npm run build

# Custom build with environment check
NODE_ENV=production npm run build

# Build with additional steps
npm run build && npm run postbuild
```

### Preview Branch Deployment

Deploy specific branches automatically:

1. **In Cloudflare Pages dashboard:**
   - Go to **Settings** → **Builds & deployments**
   - Enable **Preview deployments**
   - Add branch pattern: `dev`, `staging`, etc.

2. **Each branch gets its own URL:**
   ```
   main: https://kurt-adams-portfolio.pages.dev
   dev: https://dev.kurt-adams-portfolio.pages.dev
   ```

### Functions (Serverless)

Add serverless functions to your static site:

1. **Create `functions/` folder:**
   ```bash
   mkdir functions
   ```

2. **Add a function:**
   ```javascript
   // functions/api/hello.js
   export async function onRequest(context) {
     return new Response("Hello from Cloudflare Functions!");
   }
   ```

3. **Access at:**
   ```
   https://your-site.com/api/hello
   ```

**Use cases:**
- Form submission handler
- API proxy
- Authentication
- Dynamic content generation

---

## GitHub Actions Integration

The included `.github/workflows/deploy.yml` automates deployment:

### Setup Secrets

1. **Get Cloudflare API Token:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Create Token → Edit Cloudflare Workers
   - Copy the token

2. **Get Cloudflare Account ID:**
   - Dashboard → Workers & Pages → Overview
   - Copy Account ID from right sidebar

3. **Add to GitHub Secrets:**
   - Go to your repo → **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Add:
     - `CLOUDFLARE_API_TOKEN` = (your API token)
     - `CLOUDFLARE_ACCOUNT_ID` = (your account ID)

### Workflow Triggers

The workflow runs on:
- ✅ Push to `main` or `master`
- ✅ Pull requests to `main` or `master`
- ✅ Manual trigger (workflow_dispatch)

**Manual trigger:**
1. Go to **Actions** tab in GitHub
2. Select **Deploy to Cloudflare Pages**
3. Click **Run workflow**

---

## Cost Estimation

Cloudflare Pages **FREE tier** includes:
- ✅ Unlimited sites
- ✅ Unlimited requests
- ✅ Unlimited bandwidth
- ✅ 500 builds per month
- ✅ 1 concurrent build
- ✅ Preview deployments

**Paid tier** ($20/month) adds:
- ✅ 5,000 builds per month
- ✅ 5 concurrent builds
- ✅ Faster builds
- ✅ Priority support

**For this portfolio, FREE tier is sufficient** unless you:
- Deploy multiple times per day (>16 times/day average)
- Need faster build times
- Have a team collaborating (multiple simultaneous builds)

---

## Maintenance

### Regular Updates

Keep dependencies updated:

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update Astro specifically
npm install astro@latest

# Test locally
npm run dev

# Deploy
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

### Backup Strategy

Your site is version-controlled, but also:
1. **GitHub repo** - Primary backup
2. **Cloudflare deployments** - 30-day history (rollback anytime)
3. **Local machine** - Keep a local copy

---

## Support Resources

- **Cloudflare Pages Docs**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Cloudflare Community**: [community.cloudflare.com](https://community.cloudflare.com)
- **Astro Discord**: [astro.build/chat](https://astro.build/chat)
- **GitHub Issues**: Your repository issues tab

---

## Deployment Checklist

Before going live, ensure:

- [ ] All content is finalized (projects, blog posts, images)
- [ ] Resume PDF is uploaded to `public/resume.pdf`
- [ ] Contact information is correct
- [ ] Social media links are working
- [ ] Custom domain is configured (if using)
- [ ] Analytics are set up (optional)
- [ ] Site has been tested on mobile devices
- [ ] All images have alt text for accessibility
- [ ] SEO meta tags are customized
- [ ] Lighthouse score is 90+ (run [web.dev/measure](https://web.dev/measure))

---

**Ready to deploy?** Follow Method 1 (Git Integration) above and you'll be live in minutes! 🚀
