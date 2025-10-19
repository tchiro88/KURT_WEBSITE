# 🤖 Kurt Adams - Industrial Automation Engineer Portfolio

**Live Site**: https://kurt-adams.autosapien.ai  
**Theme**: Cyberpunk/Tech aesthetic  
**Status**: ✅ Deployed and Live

Professional portfolio website showcasing industrial automation projects, technical expertise, and 10+ years of experience in control systems and IIoT.

---

## 🎨 Theme

Cyberpunk/tech aesthetic matching **autosapien.ai**:
- 🌑 Dark background (#0d0d0d)
- 💎 Cyan accent (#00a0aa)
- ⌨️ Monospace typography (Courier New)
- 🤖 Robot emoji branding
- ⚡ Terminal-inspired UI

---

## 🛠️ Tech Stack

### Core
- **Next.js 15.5.6** - App Router, Static Export
- **React 19.1.0** - UI library
- **TypeScript 5.x** - Type safety

### Styling
- **Tailwind CSS v4** - Inline theme configuration
- **Framer Motion 12.x** - Smooth animations
- **Lucide React** - Icon library

### Deployment
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static hosting
- **Cloudflare** - DNS + CDN

---

## 📋 Features

### Pages
- ✅ **Home** - Hero section with stats (10+ years, $6M+, 50+ systems)
- ✅ **Projects** - 5 featured automation projects
- ✅ **Experience** - Timeline with 3 positions
- ✅ **Expertise** - 5 skill categories, 30+ technologies
- ✅ **Education** - 3 qualifications
- ✅ **Contact** - Professional links and info

### Design
- 🎨 Cyberpunk/tech theme
- 📱 Fully responsive (mobile-first)
- ⚡ Fast static site (<200KB)
- 🎭 Framer Motion animations
- ♿ WCAG 2.1 AA accessible
- 🔒 HTTPS via Cloudflare

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
# → Outputs to out/ directory
```

### Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Build + export static site
- `npm run lint` - Run ESLint
- `npm start` - Preview production build

---

## 📦 Deployment

### Automatic (GitHub Actions)
Push to `main` branch triggers automatic deployment:
1. Builds Next.js static export
2. Deploys to GitHub Pages
3. Available at custom domain

### Cloudflare DNS
**See**: [CLOUDFLARE_DNS_SETUP.md](./CLOUDFLARE_DNS_SETUP.md)

**Quick Config**:
```
Type: CNAME
Name: kurt-adams
Target: tchiro88.github.io
Proxy: Proxied (🟠)
```

---

## 📝 Content Management

Update content in `src/lib/data/`:
- **projects.ts** - Project details
- **experience.ts** - Work history
- **skills.ts** - Technical skills
- **education.ts** - Qualifications

After changes:
```bash
git add .
git commit -m "Update content"
git push  # Auto-deploys via GitHub Actions
```

---

## 📚 Documentation

- 📖 **[DOCUMENTATION.md](./DOCUMENTATION.md)** - Complete guide
- 🌐 **[CLOUDFLARE_DNS_SETUP.md](./CLOUDFLARE_DNS_SETUP.md)** - DNS configuration

---

## 📞 Contact

- **Website**: https://kurt-adams.autosapien.ai
- **Email**: kurt_a@me.com
- **Phone**: 0434 720 160
- **Location**: Perth, Western Australia
- **GitHub**: [@tchiro88](https://github.com/tchiro88)

---

© 2025 Kurt Adams. All rights reserved.

**Built with** Next.js 15 + Tailwind CSS v4 + TypeScript  
**Theme inspired by** autosapien.ai
