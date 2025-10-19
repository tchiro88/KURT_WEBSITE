# Cloudflare DNS Configuration for kurt-adams.autosapien.ai

## Overview
This guide will help you configure Cloudflare DNS to point your custom domain `kurt-adams.autosapien.ai` to your GitHub Pages site.

## Prerequisites
- Access to your Cloudflare account
- Domain `autosapien.ai` already managed in Cloudflare
- GitHub Pages site deployed at: `tchiro88.github.io/KURT_WEBSITE`

## Step-by-Step Instructions

### 1. Log into Cloudflare Dashboard
1. Go to https://dash.cloudflare.com
2. Log in with your credentials
3. Select the domain: **autosapien.ai**

### 2. Navigate to DNS Settings
1. Click on **DNS** in the left sidebar
2. You'll see the DNS Records management page

### 3. Add CNAME Record for Subdomain
Add the following DNS record:

```
Type: CNAME
Name: kurt-adams
Target: tchiro88.github.io
Proxy status: Proxied (🟠 orange cloud ON)
TTL: Auto
```

**Detailed Steps:**
1. Click **Add record** button
2. Set **Type** to `CNAME`
3. Set **Name** to `kurt-adams`
4. Set **Target** to `tchiro88.github.io` (WITHOUT trailing slash or path)
5. Ensure **Proxy status** is **Proxied** (orange cloud 🟠)
6. Leave **TTL** as `Auto`
7. Click **Save**

### 4. Verify DNS Configuration
After adding the record, verify it appears in your DNS records list:

| Type | Name | Content | Proxy | TTL |
|------|------|---------|-------|-----|
| CNAME | kurt-adams | tchiro88.github.io | Proxied | Auto |

## Important Notes

### About Proxy Status
- **Proxied (🟠)**: Recommended - Enables Cloudflare's CDN, DDoS protection, and SSL
- **DNS only (⚪)**: Disables Cloudflare features, direct DNS resolution

### GitHub Pages + CNAME File
The repository already includes a `CNAME` file in the `public/` directory with:
```
kurt-adams.autosapien.ai
```

This file is automatically deployed to the root of your GitHub Pages site, telling GitHub which custom domain to serve.

### SSL/TLS Configuration
1. In Cloudflare, go to **SSL/TLS** > **Overview**
2. Set encryption mode to: **Full** or **Full (strict)**
3. GitHub Pages provides free SSL certificates for custom domains

### DNS Propagation Time
- **Cloudflare**: Changes usually propagate within 5-15 minutes
- **Global DNS**: Full propagation can take up to 48 hours
- You can check propagation at: https://www.whatsmydns.net

## Verification Steps

### 1. Check DNS Resolution
Wait 5-10 minutes after adding the record, then test:

```bash
# Check DNS resolution
dig kurt-adams.autosapien.ai

# Should show CNAME pointing to tchiro88.github.io
nslookup kurt-adams.autosapien.ai
```

### 2. Test Website Access
Try accessing your site:
```
https://kurt-adams.autosapien.ai
```

### 3. Verify SSL Certificate
1. Visit https://kurt-adams.autosapien.ai
2. Click the padlock icon in browser
3. Check certificate is issued by GitHub or Cloudflare

## Troubleshooting

### Site Not Loading
**Problem**: kurt-adams.autosapien.ai doesn't load

**Solutions**:
1. Wait longer (DNS propagation can take time)
2. Clear your browser cache and DNS cache:
   ```bash
   # Linux/Mac
   sudo systemd-resolve --flush-caches
   
   # Windows
   ipconfig /flushdns
   ```
3. Check DNS record is correct in Cloudflare
4. Verify CNAME file exists in GitHub Pages deployment

### Certificate Errors
**Problem**: SSL/TLS certificate warnings

**Solutions**:
1. Wait for GitHub to provision SSL certificate (can take up to 24 hours after DNS is configured)
2. Check Cloudflare SSL/TLS mode is set to **Full** or **Full (strict)**
3. Ensure proxy status is **Proxied** (orange cloud)

### Wrong Content Showing
**Problem**: Old content or wrong site appears

**Solutions**:
1. Check GitHub Actions deployment succeeded
2. Clear browser cache
3. Try incognito/private browsing mode
4. Verify GitHub Pages is serving from the correct repository

### DNS Record Not Saving
**Problem**: CNAME record doesn't save or disappears

**Solutions**:
1. Ensure you have write permissions in Cloudflare
2. Check for conflicting DNS records (A, AAAA, or other CNAME records with same name)
3. Remove any existing `kurt-adams` records before adding new one

## Alternative: Using A Records (Not Recommended)
If CNAME doesn't work, you can use A records pointing to GitHub Pages IP addresses:

```
Type: A
Name: kurt-adams
IPv4 address: 185.199.108.153

Type: A
Name: kurt-adams
IPv4 address: 185.199.109.153

Type: A
Name: kurt-adams
IPv4 address: 185.199.110.153

Type: A
Name: kurt-adams
IPv4 address: 185.199.111.153
```

**Note**: A records require all 4 IPs for redundancy. CNAME is preferred as GitHub maintains the IPs.

## Verification Checklist
- [ ] Logged into Cloudflare dashboard
- [ ] Selected autosapien.ai domain
- [ ] Added CNAME record: kurt-adams → tchiro88.github.io
- [ ] Proxy status is Proxied (🟠)
- [ ] Waited 10-15 minutes for DNS propagation
- [ ] Tested: https://kurt-adams.autosapien.ai loads correctly
- [ ] SSL certificate is valid (padlock shows)
- [ ] Site shows new cyberpunk theme

## Expected Result
After completing these steps, visiting https://kurt-adams.autosapien.ai should show:
- **Dark cyberpunk theme** with cyan (#00a0aa) accents
- **🤖 KURT_ADAMS.EXE** header
- **Monospace typography**
- **Industrial automation portfolio** content
- **Valid SSL certificate** (padlock icon)

## Support Resources
- Cloudflare DNS Documentation: https://developers.cloudflare.com/dns/
- GitHub Pages Custom Domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- DNS Propagation Checker: https://www.whatsmydns.net

## Contact
For issues with this setup, the site is hosted at:
- **Repository**: https://github.com/tchiro88/KURT_WEBSITE
- **GitHub Pages**: https://tchiro88.github.io/KURT_WEBSITE (will redirect to custom domain)
- **Custom Domain**: https://kurt-adams.autosapien.ai (after DNS configured)

---
**Last Updated**: 2025-10-19
**Theme**: Cyberpunk/Tech (matching autosapien.ai)
**Status**: Deployed and awaiting DNS configuration
