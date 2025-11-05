# Content Management Instructions

**Quick reference guide for updating your portfolio content, images, and text.**

## 📋 Table of Contents

- [Adding & Editing Projects](#adding--editing-projects)
- [Uploading Images](#uploading-images)
- [Uploading Videos](#uploading-videos)
- [Updating Contact Information](#updating-contact-information)
- [Modifying Text & Copy](#modifying-text--copy)
- [Adding Blog Posts](#adding-blog-posts)
- [Changing Colors & Styling](#changing-colors--styling)
- [Adding Your Resume](#adding-your-resume)

---

## Adding & Editing Projects

### Add a New Project

**Step 1: Create the project file**

```bash
# Navigate to your project directory
cd /path/to/KURT_WEBSITE

# Create a new MDX file
touch src/content/projects/my-awesome-project.mdx
```

**Step 2: Open the file and add this template:**

```mdx
---
title: "Your Project Title"
description: "One-sentence description that appears in project listings"
category: "Mining Automation"
# Categories: "Mining Automation", "IIoT Platform", "SCADA System", "PLC Programming", "Integration", "Data Analytics", "Cloud/Edge Computing", "Robotics"

image: "/images/projects/my-project-main.jpg"
images:
  - "/images/projects/my-project-1.jpg"
  - "/images/projects/my-project-2.jpg"
  - "/images/projects/my-project-3.jpg"

featured: true
# Set to true to show on homepage

status: "completed"
# Options: "completed", "in-progress", "concept"

date: 2024-11-05
# Project completion date

metrics:
  - label: "Project Value"
    value: "$800K"
    icon: "dollar-sign"
  - label: "Efficiency Gain"
    value: "40%"
    icon: "trending-up"
  - label: "Downtime Reduction"
    value: "70%"
    icon: "trending-down"
  - label: "Timeline"
    value: "6 months"
    icon: "clock"

techStack:
  - "Rockwell ControlLogix"
  - "Ignition SCADA"
  - "Node-RED"
  - "MQTT"
  - "Docker"

protocols:
  - "Ethernet/IP"
  - "Modbus TCP"
  - "OPC-UA"

client: "Tier 1 Mining Company"
# Use generic names or get permission to use real names

industry: "Mining & Resources"

projectValue: "$800K"

roi: "70% downtime reduction, 12-month payback"

relevantFor:
  - "Pre-Sales Solution Architect"
  - "Technical Sales Engineer"
  - "Solutions Engineer"
  - "ROC Controller"
  - "Automation Engineer"

highlights:
  - "Led $800K automation project from concept to delivery"
  - "Achieved 70% reduction in unplanned downtime"
  - "Integrated SCADA visibility for Remote Operations Center"
  - "Implemented predictive maintenance capabilities"
---

## Project Overview

Write your project overview here using Markdown formatting.

### The Challenge

Describe the problem or challenge the client faced.

### Solution

Explain your solution approach and technical implementation.

### Results

Quantify the outcomes and business impact.

```

**Step 3: Add project images**

```bash
# Copy your images to the public folder
cp ~/path/to/project-image.jpg public/images/projects/
```

**Step 4: Save, commit, and deploy**

```bash
git add src/content/projects/my-awesome-project.mdx public/images/projects/
git commit -m "Add new project: My Awesome Project"
git push origin main
```

### Edit an Existing Project

1. Open the project file in `src/content/projects/`
2. Edit the content using Markdown
3. Save the file
4. Commit and push

**Example:**

```bash
# Edit the export hay processing project
nano src/content/projects/export-hay-processing.mdx

# Save changes (Ctrl+O, Enter, Ctrl+X)

# Commit and push
git add src/content/projects/export-hay-processing.mdx
git commit -m "Update export hay project details"
git push origin main
```

---

## Uploading Images

### Project Images

**Location:** `public/images/projects/`

```bash
# Upload a single image
cp ~/Downloads/my-project.jpg public/images/projects/

# Upload multiple images
cp ~/Downloads/project-*.jpg public/images/projects/

# Recommended image specs:
# - Format: JPG or PNG (WebP for better compression)
# - Dimensions: 1920x1080 or 1600x900 (16:9 ratio)
# - File size: < 500KB per image
# - Use descriptive filenames: conveyor-automation-dashboard.jpg
```

### Profile Photos / Headshots

**Location:** `public/images/`

```bash
# Add your professional photo
cp ~/Photos/kurt-adams-headshot.jpg public/images/

# Update in components if needed
# Edit src/components/sections/HeroSection.astro to add photo
```

### Optimize Images Before Uploading

```bash
# Resize large images
convert large-image.jpg -resize 1920x1080 optimized-image.jpg

# Compress JPG
jpegoptim --max=85 my-image.jpg

# Convert to WebP (better compression)
cwebp -q 85 my-image.jpg -o my-image.webp
```

---

## Uploading Videos

### Project Demo Videos

**Location:** `public/videos/projects/`

**Option 1: Local Video Files**

```bash
# Upload video to public folder
cp ~/Videos/project-demo.mp4 public/videos/projects/

# Reference in project frontmatter:
---
title: "My Project"
video: "/videos/projects/project-demo.mp4"
---

# Recommended video specs:
# - Format: MP4 (H.264 codec)
# - Resolution: 1920x1080 or 1280x720
# - File size: < 50MB (compress if larger)
# - Duration: 1-3 minutes (shorter is better)
```

**Option 2: YouTube Embed (Recommended for large videos)**

```mdx
---
title: "My Project"
---

## Project Demo

<iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

**Compress Large Videos:**

```bash
# Compress MP4 to reduce file size
ffmpeg -i large-video.mp4 -c:v libx264 -crf 28 -c:a aac compressed-video.mp4

# Convert to WebM (better compression)
ffmpeg -i video.mp4 -c:v libvpx-vp9 -crf 30 video.webm
```

---

## Updating Contact Information

### Email, LinkedIn, GitHub

**File:** `src/components/layout/Footer.astro`

1. Open the file:
   ```bash
   nano src/components/layout/Footer.astro
   ```

2. Find and update these lines:

   ```astro
   <a href="mailto:kurt@autosapien.ai">
     kurt@autosapien.ai
   </a>

   <!-- Update email -->
   <a href="mailto:YOUR_EMAIL@example.com">
     YOUR_EMAIL@example.com
   </a>

   <!-- Update LinkedIn -->
   <a
     href="https://linkedin.com/in/your-profile"
     target="_blank"
     rel="noopener noreferrer"
   >

   <!-- Update GitHub -->
   <a
     href="https://github.com/your-username"
     target="_blank"
     rel="noopener noreferrer"
   >
   ```

3. Save and commit:
   ```bash
   git add src/components/layout/Footer.astro
   git commit -m "Update contact information"
   git push origin main
   ```

### Location

**File:** `src/components/layout/Footer.astro`

Find and update:
```astro
<span>Perth, WA</span>
```

Change to your location.

---

## Modifying Text & Copy

### Homepage Hero Section

**File:** `src/components/sections/HeroSection.astro`

**Main Headline:**
```astro
<span class="text-gradient-full">
  Technical Solutions
</span>
```

**Tagline:**
```astro
<p class="text-lg md:text-xl...">
  Bridging the gap between business development and technical excellence...
</p>
```

**Stats/Metrics:**
```astro
const stats: StatMetric[] = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Delivered', value: '$6M+' },
  { label: 'Systems Integrated', value: '50+' },
  { label: 'Efficiency Gains', value: '35%+' },
];
```

### Navigation Menu

**File:** `src/components/layout/Header.astro`

```astro
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
```

Add or remove items as needed.

### Footer Copyright & Text

**File:** `src/components/layout/Footer.astro`

```astro
<p class="text-steel-400 text-sm...">
  &copy; {currentYear} Kurt Adams. Built with <span class="text-primary-400">Astro</span>...
</p>
```

---

## Adding Blog Posts

### Create a New Blog Post

```bash
# Create blog post file
touch src/content/blog/my-first-post.mdx
```

**Template:**

```mdx
---
title: "Why I Love Industrial Automation"
excerpt: "A brief summary that appears in blog listings (1-2 sentences)"
author: "Kurt Adams"
date: 2024-11-05
readTime: "5 min"
image: "/images/blog/automation-hero.jpg"
tags:
  - "Industrial Automation"
  - "IIoT"
  - "Mining Technology"
category: "Industry Insights"
# Categories: "Technical Tutorial", "Industry Insights", "Project Showcase", "Thought Leadership", "Mining Technology", "IIoT & Industry 4.0", "Career Development"
featured: false
---

## Introduction

Your blog post content here using Markdown...

### Subheading

More content...

### Code Examples

\```python
# Python code example
def automate_process():
    return "Automated!"
\```

### Images in Blog Posts

![Alt text](/images/blog/my-image.jpg)

```

**Upload blog images:**

```bash
cp ~/Photos/blog-image.jpg public/images/blog/
```

**Commit and deploy:**

```bash
git add src/content/blog/my-first-post.mdx public/images/blog/
git commit -m "Add blog post: Why I Love Industrial Automation"
git push origin main
```

---

## Changing Colors & Styling

### Update Color Scheme

**File:** `tailwind.config.mjs`

Find the `colors` section:

```javascript
colors: {
  // Command Center Primary (Cyan/Teal)
  primary: {
    500: '#00ccd6', // ← Change this to your primary color
    // ...
  },
  // Warning/Accent (Orange/Amber)
  accent: {
    500: '#f97316', // ← Change this to your accent color
    // ...
  },
}
```

**Quick color changes:**

```javascript
// Blue theme
primary: { 500: '#3b82f6' },  // Blue
accent: { 500: '#f59e0b' },   // Amber

// Green theme
primary: { 500: '#10b981' },  // Green
accent: { 500: '#ef4444' },   // Red

// Purple theme
primary: { 500: '#8b5cf6' },  // Purple
accent: { 500: '#f59e0b' },   // Orange
```

Save and rebuild:

```bash
git add tailwind.config.mjs
git commit -m "Update color scheme to blue theme"
git push origin main
```

### Change Fonts

**File:** `src/styles/global.css`

Update the Google Fonts import:

```css
/* Current fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

/* Example: Change to Roboto */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
```

Then update `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Roboto', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'Courier New', 'monospace'],
},
```

---

## Adding Your Resume

### Upload Resume PDF

```bash
# Copy your resume to public folder
cp ~/Documents/Kurt-Adams-Resume-2024.pdf public/resume.pdf

# The download link is already configured in the site
# Users can click "Download Resume" button
```

**Verify the link works:**

1. Open `src/components/sections/HeroSection.astro`
2. Find the resume download link:
   ```astro
   <a href="/resume.pdf" class="btn-ghost" download>
     <Download class="w-5 h-5" />
     <span>Resume</span>
   </a>
   ```

3. Make sure the file is at `public/resume.pdf`

**Commit and deploy:**

```bash
git add public/resume.pdf
git commit -m "Add updated resume PDF"
git push origin main
```

---

## Quick Deployment Workflow

Every time you make changes:

```bash
# 1. Make your changes (edit files, add images, etc.)

# 2. Check what changed
git status

# 3. Add all changes
git add .

# 4. Commit with descriptive message
git commit -m "Descriptive message about what you changed"

# 5. Push to deploy
git push origin main

# 6. Wait 2-3 minutes for GitHub Actions to build and deploy
# Your changes will be live at https://kurt-adams.autosapien.ai
```

---

## Common Tasks Quick Reference

| Task | Command |
|------|---------|
| Add new project | `touch src/content/projects/project-name.mdx` |
| Upload image | `cp image.jpg public/images/projects/` |
| Upload video | `cp video.mp4 public/videos/projects/` |
| Edit contact info | `nano src/components/layout/Footer.astro` |
| Change colors | Edit `tailwind.config.mjs` |
| Add resume | `cp resume.pdf public/resume.pdf` |
| Deploy changes | `git add . && git commit -m "message" && git push origin main` |

---

## Need Help?

- **Deployment issues:** See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Technical setup:** See [README.md](./README.md)
- **Astro docs:** [docs.astro.build](https://docs.astro.build)

---

**Pro Tips:**

1. **Always test locally** before deploying:
   ```bash
   npm run dev
   # Check at http://localhost:4321
   ```

2. **Optimize images** before uploading (keep files < 500KB)

3. **Use descriptive commit messages** so you can track changes

4. **Back up important content** before making major changes

5. **Check the live site** after deployment to ensure everything looks good

---

Happy editing! 🚀
