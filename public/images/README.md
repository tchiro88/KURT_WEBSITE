# Image Assets - Kurt Adams Portfolio

This directory contains all image assets for the portfolio website.

## Directory Structure

```
/public/images/
├── projects/          # Project screenshots and photos
├── personal/          # Personal photos, headshots
└── logos/             # Company logos, technology logos
```

## Naming Conventions

### General Rules
- Use **lowercase** with **hyphens** (kebab-case)
- Be **descriptive** and **concise**
- Include **context** in the filename
- Use **consistent** naming patterns

### Project Photos

**Format:** `project-name-description-number.jpg`

**Examples:**
```
scada-system-dashboard-01.jpg
scada-system-control-panel-02.jpg
scada-system-field-equipment-03.jpg

plc-controller-installation-01.jpg
plc-controller-wiring-02.jpg

mining-conveyor-system-overview-01.jpg
mining-conveyor-hmi-screen-02.jpg
```

**Template:**
```
[project-slug]-[what-it-shows]-[number].[ext]

Where:
- project-slug: Short project identifier (2-3 words)
- what-it-shows: Description of the image content
- number: Sequential number (01, 02, 03...)
- ext: File extension (jpg, png, webp)
```

### Personal Photos

**Format:** `kurt-adams-context.jpg`

**Examples:**
```
kurt-adams-headshot.jpg
kurt-adams-headshot-professional.jpg
kurt-adams-on-site.jpg
kurt-adams-with-equipment.jpg
kurt-adams-industrial-setting.jpg
```

### Company/Technology Logos

**Format:** `logo-company-name.png` or `tech-technology-name.svg`

**Examples:**
```
logo-autosapien.png
logo-mining-company.png

tech-siemens.svg
tech-allen-bradley.svg
tech-schneider-electric.svg
tech-wonderware.svg
```

## File Format Guidelines

### Recommended Formats

| Type | Format | Why |
|------|--------|-----|
| Photos | JPG/JPEG | Best for photographs, smaller file size |
| Screenshots | PNG | Better for UI screenshots, preserves text clarity |
| Logos | SVG or PNG | SVG for scalability, PNG with transparency |
| Diagrams | SVG or PNG | SVG preferred for crisp scaling |

### Image Optimization

**Before uploading:**
1. **Resize** to appropriate dimensions:
   - Project hero images: 1200x800px
   - Project thumbnails: 600x400px
   - Personal photos: 800x800px (square) or 600x900px (portrait)
   - Logos: 200x200px or SVG

2. **Compress** images:
   - JPG quality: 80-85%
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 200KB per image

3. **Format**:
   - Modern formats: WebP (preferred), AVIF
   - Fallback: JPG for photos, PNG for graphics

## Project-Specific Photo Organization

### Example: SCADA System Project

```
/projects/
  scada-oilfield-dashboard-01.jpg          # Main dashboard screenshot
  scada-oilfield-dashboard-02.jpg          # Alternative view
  scada-oilfield-alarm-management.jpg      # Alarm screen
  scada-oilfield-trends.jpg                # Trending graphs
  scada-oilfield-field-photo-01.jpg        # On-site equipment
  scada-oilfield-field-photo-02.jpg        # Control cabinet
```

### Example: PLC Programming Project

```
/projects/
  plc-mining-conveyor-ladder-logic.png     # Ladder diagram screenshot
  plc-mining-conveyor-hmi.jpg              # HMI screen
  plc-mining-conveyor-cabinet.jpg          # Control cabinet photo
  plc-mining-conveyor-installation.jpg     # Installation photo
```

## Integration with Code

### In Project Data Files

Update `/src/lib/data/projects.ts` with image references:

```typescript
{
  id: 'scada-oilfield',
  title: 'Oilfield SCADA System',
  images: [
    '/images/projects/scada-oilfield-dashboard-01.jpg',
    '/images/projects/scada-oilfield-dashboard-02.jpg',
    '/images/projects/scada-oilfield-field-photo-01.jpg',
  ],
  thumbnail: '/images/projects/scada-oilfield-dashboard-01.jpg',
  // ...
}
```

### In Components

```tsx
import Image from 'next/image'

<Image
  src="/images/projects/scada-oilfield-dashboard-01.jpg"
  alt="SCADA system main dashboard showing real-time oil production data"
  width={1200}
  height={800}
  className="rounded-lg"
/>
```

## Alt Text Guidelines

Always provide descriptive alt text:

**Good:**
```tsx
alt="SCADA dashboard displaying 12 oil wells with production rates and alarm status"
```

**Bad:**
```tsx
alt="Dashboard"
```

## Checklist Before Uploading

- [ ] Image is **properly named** using naming convention
- [ ] Image is **optimized** (< 200KB for web)
- [ ] Image is **correctly sized** for its use case
- [ ] Image is in the **correct directory**
- [ ] **Alt text** is descriptive and meaningful
- [ ] Image **quality** is acceptable after compression
- [ ] **Copyright/permissions** confirmed for the image

## Quick Reference Table

| Use Case | Directory | Naming Pattern | Size | Format |
|----------|-----------|----------------|------|--------|
| Project hero | `/projects/` | `project-name-hero.jpg` | 1200x800 | JPG |
| Project screenshot | `/projects/` | `project-name-description-##.png` | 1000x700 | PNG |
| Project photo | `/projects/` | `project-name-photo-##.jpg` | 800x600 | JPG |
| Personal headshot | `/personal/` | `kurt-adams-headshot.jpg` | 800x800 | JPG |
| Company logo | `/logos/` | `logo-company.png` | 200x200 | PNG/SVG |
| Tech logo | `/logos/` | `tech-name.svg` | 200x200 | SVG |

## Tools & Resources

### Image Optimization
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [ImageOptim](https://imageoptim.com/) - Mac app for optimization

### Format Conversion
- [CloudConvert](https://cloudconvert.com/) - Format conversion
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

### Sizing/Editing
- [Photopea](https://www.photopea.com/) - Free online Photoshop alternative
- [Canva](https://www.canva.com/) - Quick edits and resizing

## Contact

For questions about image assets or naming conventions, refer to this guide or update it as the project evolves.

---

**Last Updated:** 2025-10-21
**Maintained By:** Kurt Adams Portfolio Project
