# Kurt Adams Portfolio V2 - Mining Automation Specialist

A modern, high-performance portfolio website built with Astro, React, and Tailwind CSS. Designed specifically for Technical Solutions Engineer, Pre-Sales Solution Architect, and Mining Automation roles in Perth, Western Australia.

## 🎯 Design Philosophy

This portfolio showcases the unique combination of:
- **Commercial Acumen** - BDM background with proven sales track record
- **Technical Depth** - IIoT, SCADA, PLC programming expertise
- **Mining Domain Knowledge** - Perth mining network (BHP, Rio, Fortescue)
- **Modern Tech Stack** - Production-ready projects demonstrating Industry 4.0 skills

### Key Features

✨ **Command Center Aesthetic** - Inspired by mining Remote Operations Centers (ROC)
🚀 **Lightning Fast** - Astro static site generation with minimal JavaScript
📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
🎨 **Cyberpunk Theme** - High-contrast cyan/orange color scheme
📊 **Rich Project Pages** - Detailed case studies with code examples and metrics
🔍 **SEO Optimized** - Structured data, meta tags, and semantic HTML
♿ **Accessible** - WCAG 2.1 AA compliant
🎬 **Video Ready** - Support for project videos and demo recordings

## 🛠️ Tech Stack

- **Framework**: [Astro 4.x](https://astro.build) - The web framework for content-driven websites
- **UI Library**: [React 18](https://react.dev) - For interactive components
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com) - Utility-first CSS framework
- **Content**: [MDX](https://mdxjs.com) - Markdown with JSX for rich content
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful, consistent icon set
- **Animations**: CSS animations + Framer Motion for complex interactions
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com) - Global edge network
- **Language**: TypeScript - Type safety throughout

## 📁 Project Structure

```
redesign-2025/
├── public/                      # Static assets
│   ├── images/                  # Images and graphics
│   ├── videos/                  # Project demo videos
│   └── assets/                  # Other static files (PDFs, etc.)
│
├── src/
│   ├── components/              # Reusable components
│   │   ├── layout/              # Layout components (Header, Footer)
│   │   ├── ui/                  # UI primitives (Button, Card, Badge)
│   │   ├── sections/            # Page sections (Hero, Projects, etc.)
│   │   └── animations/          # Animation components
│   │
│   ├── content/                 # Content collections (MDX)
│   │   ├── projects/            # Project case studies
│   │   ├── blog/                # Blog posts
│   │   └── case-studies/        # Detailed case studies
│   │
│   ├── layouts/                 # Page layouts
│   │   ├── BaseLayout.astro     # Base HTML structure
│   │   └── MainLayout.astro     # Main site layout with header/footer
│   │
│   ├── pages/                   # Routes (file-based routing)
│   │   ├── index.astro          # Homepage
│   │   ├── projects/            # Projects pages
│   │   ├── blog/                # Blog pages
│   │   ├── experience.astro     # Experience page
│   │   ├── skills.astro         # Skills page
│   │   └── contact.astro        # Contact page
│   │
│   ├── lib/                     # Utilities and helpers
│   │   ├── types/               # TypeScript type definitions
│   │   ├── utils/               # Utility functions
│   │   └── data/                # Static data (if needed)
│   │
│   └── styles/                  # Global styles
│       └── global.css           # Global CSS with Tailwind directives
│
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **pnpm** 8+ (pnpm recommended for faster installs)

### Installation

1. **Navigate to the project directory:**

```bash
cd redesign-2025
```

2. **Install dependencies:**

```bash
npm install
# or
pnpm install
```

3. **Start the development server:**

```bash
npm run dev
# or
pnpm dev
```

The site will be available at `http://localhost:4321`

### Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 📝 Content Management

### Adding a New Project

1. Create a new MDX file in `src/content/projects/`:

```bash
touch src/content/projects/my-new-project.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "My Amazing Project"
description: "A brief description of what this project accomplished"
category: "Mining Automation"  # or "IIoT Platform", "SCADA System", etc.
image: "/images/projects/my-project.jpg"
featured: true
status: "completed"  # or "in-progress", "concept"
date: 2024-11-05

metrics:
  - label: "Project Value"
    value: "$1M"
    icon: "dollar-sign"
  - label: "Efficiency Gain"
    value: "40%"
    icon: "trending-up"

techStack:
  - "Rockwell ControlLogix"
  - "Ignition SCADA"
  - "Node-RED"

relevantFor:
  - "Pre-Sales Solution Architect"
  - "Technical Sales Engineer"

highlights:
  - "Key achievement 1"
  - "Key achievement 2"
---

## Project Overview

Your content here using MDX (Markdown + JSX)...

### Technical Details

More content with code examples, images, etc.
```

3. Add project images to `public/images/projects/`

4. The project will automatically appear on the projects page!

### Adding a Blog Post

1. Create a new MDX file in `src/content/blog/`:

```bash
touch src/content/blog/my-blog-post.mdx
```

2. Add frontmatter:

```mdx
---
title: "My Blog Post Title"
excerpt: "A short summary that appears in listings"
author: "Kurt Adams"
date: 2024-11-05
readTime: "5 min"
image: "/images/blog/my-post.jpg"
tags:
  - "IIoT"
  - "Mining Automation"
category: "Technical Tutorial"
featured: false
---

Your blog content here...
```

### Adding a Case Study

1. Create a new MDX file in `src/content/case-studies/`:

```bash
touch src/content/case-studies/my-case-study.mdx
```

2. Follow the schema defined in `src/content/config.ts`

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.mjs` to customize the color scheme:

```javascript
colors: {
  primary: {
    500: '#00ccd6', // Main cyan - adjust as needed
    // ... other shades
  },
  accent: {
    500: '#f97316', // Main orange - adjust as needed
    // ... other shades
  },
}
```

### Fonts

The site uses:
- **Inter** for body text and headings
- **JetBrains Mono** for code and terminal-style text

To change fonts, edit the Google Fonts import in `src/styles/global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Navigation

Edit navigation items in `src/components/layout/Header.astro`:

```typescript
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  // Add or remove items here
];
```

## 🌐 Deployment to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. **Push your code to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit of portfolio v2"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. **Connect to Cloudflare Pages:**

   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Authorize GitHub and select your repository
   - Configure build settings:
     - **Framework preset**: `Astro`
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Node version**: `18` or higher

3. **Deploy:**

   - Click **Save and Deploy**
   - Cloudflare will build and deploy your site automatically
   - Every push to `main` will trigger a new deployment

### Option 2: Direct Upload (Wrangler CLI)

1. **Install Wrangler:**

```bash
npm install -g wrangler
```

2. **Authenticate with Cloudflare:**

```bash
wrangler login
```

3. **Build the site:**

```bash
npm run build
```

4. **Deploy:**

```bash
wrangler pages deploy dist --project-name=kurt-adams-portfolio
```

### Custom Domain Setup

1. **In Cloudflare Pages dashboard:**
   - Go to your project → **Custom domains**
   - Click **Set up a custom domain**
   - Enter your domain (e.g., `kurt-adams.autosapien.ai`)
   - Follow DNS configuration instructions

2. **Update site URL in `astro.config.mjs`:**

```javascript
export default defineConfig({
  site: 'https://your-custom-domain.com',
  // ...
});
```

## 🎥 Adding Videos

### Project Videos

1. **Upload video** to `public/videos/projects/`:

```bash
# Example: Add a video file
cp ~/Desktop/my-project-demo.mp4 public/videos/projects/
```

2. **Reference in project frontmatter:**

```mdx
---
title: "My Project"
video: "/videos/projects/my-project-demo.mp4"
---
```

3. **Or use YouTube/Vimeo embeds:**

```mdx
---
title: "My Project"
---

<iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

### Video Optimization Tips

- **Convert to WebM** for better web performance: `ffmpeg -i input.mp4 -c:v libvpx-vp9 output.webm`
- **Use Cloudflare Stream** for large video files (automatic transcoding and CDN delivery)
- **Add video posters** (thumbnail images) for better UX

## 📸 Image Optimization

Astro automatically optimizes images when you use the `<Image />` component:

```astro
---
import { Image } from 'astro:assets';
import projectImage from '@/assets/my-project.jpg';
---

<Image
  src={projectImage}
  alt="My Project"
  width={800}
  height={600}
  format="webp"
  quality={80}
/>
```

For images in `public/`, consider using Cloudflare Images for automatic optimization:

1. Enable Cloudflare Images in your Cloudflare account
2. Update image URLs to use Cloudflare CDN
3. Images will be automatically resized, compressed, and served in modern formats

## 🔍 SEO Best Practices

The site is pre-configured with SEO best practices:

- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Structured data (JSON-LD) for rich snippets
- ✅ Sitemap generation (automatic)
- ✅ Fast page loads (Lighthouse score 95+)
- ✅ Mobile-friendly (responsive design)

### Customizing SEO

Edit meta tags in `src/layouts/BaseLayout.astro`:

```astro
---
const {
  title = 'Your Name | Your Title',
  description = 'Your description',
  keywords = ['keyword1', 'keyword2'],
} = Astro.props;
---
```

## 📊 Analytics (Optional)

### Google Analytics

Add to `src/layouts/BaseLayout.astro` before `</head>`:

```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Cloudflare Web Analytics (Privacy-Friendly)

1. Enable in Cloudflare Dashboard → **Web Analytics**
2. Add the tracking script to `BaseLayout.astro`

## 🛡️ Performance & Security

### Performance Optimizations

- ✅ Static site generation (pre-rendered HTML)
- ✅ Minimal JavaScript (only where needed)
- ✅ Code splitting (Vite bundler)
- ✅ Image optimization (Astro Image component)
- ✅ CSS purging (Tailwind JIT)
- ✅ Edge caching (Cloudflare CDN)

### Security Headers (Cloudflare)

Add security headers in Cloudflare Dashboard:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 🐛 Troubleshooting

### Build Errors

**Issue**: `Module not found: Can't resolve '@/components/...'`

**Solution**: Ensure path aliases are configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**Issue**: `Cannot find module 'astro:content'`

**Solution**: Run `npx astro sync` to generate content collection types

### Development Server Issues

**Issue**: Port 4321 already in use

**Solution**: Use a different port:

```bash
npm run dev -- --port 3000
```

**Issue**: Changes not reflecting

**Solution**: Clear Astro cache and restart:

```bash
rm -rf .astro node_modules/.vite
npm run dev
```

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [MDX Documentation](https://mdxjs.com)

## 🤝 Support

For questions or issues:

1. Check the [Astro Discord](https://astro.build/chat)
2. Review [Cloudflare Pages community](https://community.cloudflare.com)
3. Open an issue on GitHub

## 📄 License

This portfolio is a personal project. All project content and descriptions are © Kurt Adams.

The codebase structure and components are available for reference but not for commercial redistribution.

---

## 🎯 Target Job Roles

This portfolio is optimized for applications to:

- **Pre-Sales Solution Architect** (Priority #1)
- **Technical Sales Engineer**
- **Solutions Engineer (Mining Automation)**
- **ROC Controller**
- **Automation Engineer (SCADA/IIoT focus)**

### Key Differentiators Highlighted:

✅ Perth mining network (BHP, Rio Tinto, Fortescue)
✅ Hybrid BDM + Technical skills (rare combination)
✅ Ignition SCADA expertise (high demand)
✅ Production IIoT projects (Node-RED, Docker, MQTT)
✅ Quantified business impact ($6M+ projects, 35%+ efficiency gains)

---

Built with ❤️ by Kurt Adams | Technical Solutions Engineer | Perth, WA
