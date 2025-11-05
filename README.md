# Kurt Adams - Technical Solutions Engineer Portfolio

Modern portfolio website showcasing expertise in Mining Automation, IIoT, SCADA, and PLC systems for the Perth, WA market. Built with Astro for blazing-fast performance.

**Live Site**: [https://kurt-adams.autosapien.ai](https://kurt-adams.autosapien.ai)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Opens at http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Managing Content

**→ See [INSTRUCTIONS.md](./INSTRUCTIONS.md) for complete guide on:**
- Adding and editing projects
- Uploading images and videos
- Updating contact information
- Modifying text and styling
- Adding blog posts

## 📂 Project Structure

```
├── src/
│   ├── components/       # UI components (Header, Footer, Cards, etc.)
│   ├── content/          # Your content (MDX files)
│   │   ├── projects/     # Project case studies ← Add projects here
│   │   ├── blog/         # Blog posts
│   │   └── case-studies/ # Detailed case studies
│   ├── layouts/          # Page templates
│   ├── pages/            # Routes (file-based routing)
│   └── styles/           # Global CSS and Tailwind config
│
├── public/               # Static assets
│   ├── images/           # Images ← Add images here
│   │   ├── projects/     # Project images
│   │   └── blog/         # Blog images
│   ├── videos/           # Videos ← Add videos here
│   └── resume.pdf        # Your resume ← Add resume here
│
├── LEGACY/               # Old Next.js site (archived)
│
├── INSTRUCTIONS.md       # Content management guide ← START HERE
├── DEPLOYMENT.md         # Deployment guide
└── README.md             # This file
```

## 🎯 Target Roles

Portfolio optimized for Perth mining automation roles:
- Pre-Sales Solution Architect
- Technical Sales Engineer
- Solutions Engineer (Mining Automation)
- ROC Controller
- Automation Engineer (SCADA/IIoT focus)

## 🛠️ Tech Stack

- **Astro 4.x** - Modern static site generator
- **React 18** - Interactive components
- **Tailwind CSS 3** - Utility-first styling
- **TypeScript** - Type safety
- **MDX** - Markdown with JSX components

## 🌐 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Deploy process:**
1. Make changes locally
2. Commit: `git add . && git commit -m "Your message"`
3. Push: `git push origin main`
4. GitHub Actions builds and deploys automatically (2-3 minutes)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment information.

## ✅ Common Tasks

| Task | Where | How |
|------|-------|-----|
| Add new project | `src/content/projects/` | See [INSTRUCTIONS.md](./INSTRUCTIONS.md#adding--editing-projects) |
| Upload images | `public/images/projects/` | See [INSTRUCTIONS.md](./INSTRUCTIONS.md#uploading-images) |
| Update contact info | `src/components/layout/Footer.astro` | See [INSTRUCTIONS.md](./INSTRUCTIONS.md#updating-contact-information) |
| Add resume | `public/resume.pdf` | See [INSTRUCTIONS.md](./INSTRUCTIONS.md#adding-your-resume) |
| Change colors | `tailwind.config.mjs` | See [INSTRUCTIONS.md](./INSTRUCTIONS.md#changing-colors--styling) |

## 📚 Documentation

| File | Purpose |
|------|---------|
| **[INSTRUCTIONS.md](./INSTRUCTIONS.md)** | How to update content, images, text ← START HERE |
| **[QUICKSTART.md](./QUICKSTART.md)** | 5-minute setup guide |
| **[DEPLOYMENT.md](./DEPLOYMENT.md)** | Deployment and troubleshooting |
| **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** | Design rationale and strategy |
| **[PRE_LAUNCH_CHECKLIST.md](./PRE_LAUNCH_CHECKLIST.md)** | Pre-deployment checklist |

## 🆘 Need Help?

1. **Content management** → Read [INSTRUCTIONS.md](./INSTRUCTIONS.md)
2. **Deployment issues** → Check [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section
3. **Astro docs** → [docs.astro.build](https://docs.astro.build)

## 📄 License

Personal portfolio project. Content © Kurt Adams. All rights reserved.

---

**Built with Astro** | Deployed on GitHub Pages | Optimized for Perth Mining Automation Market
