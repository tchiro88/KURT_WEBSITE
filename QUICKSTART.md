# Quick Start Guide - 5 Minutes to Running Locally

Get your portfolio running locally in 5 minutes!

## Prerequisites

You need Node.js 18+ installed. Check your version:

```bash
node --version  # Should show v18.x or higher
```

If you don't have Node.js, download from: [nodejs.org](https://nodejs.org)

## Step 1: Navigate to Project

```bash
cd /home/user/KURT_WEBSITE/redesign-2025
```

## Step 2: Install Dependencies

```bash
npm install
```

This will take ~2-3 minutes to download all packages.

## Step 3: Start Development Server

```bash
npm run dev
```

You should see:

```
🚀 astro v4.x ready in Xms

┃ Local    http://localhost:4321/
┃ Network  use --host to expose
```

## Step 4: Open in Browser

Open your browser and go to: **http://localhost:4321**

You should see your new portfolio! 🎉

## Step 5: Make a Change

Try editing `src/pages/index.astro`:

1. Open the file in your editor
2. Change some text in the hero section
3. Save the file
4. Browser automatically refreshes!

## What's Next?

### Customize Content

1. **Add projects** - Edit files in `src/content/projects/`
2. **Add images** - Put images in `public/images/projects/`
3. **Update resume** - Add your PDF to `public/resume.pdf`
4. **Change colors** - Edit `tailwind.config.mjs`

### Deploy to Production

When ready to go live:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Then follow **DEPLOYMENT.md** to deploy to Cloudflare Pages.

## Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Changes not showing?**
```bash
rm -rf .astro node_modules/.vite
npm install
npm run dev
```

**Module not found?**
```bash
npx astro sync
npm run dev
```

## File Structure Quick Reference

```
src/
├── components/    # Reusable components (Header, Footer, etc.)
├── content/       # Your content (projects, blog posts)
├── layouts/       # Page templates
├── pages/         # Routes (index.astro = homepage)
└── styles/        # Global CSS

public/            # Static files (images, videos, PDFs)
```

## Need More Help?

- **Full docs**: See README.md
- **Deployment**: See DEPLOYMENT.md
- **Strategy**: See PROJECT_SUMMARY.md

---

**You're all set!** Happy building! 🚀
