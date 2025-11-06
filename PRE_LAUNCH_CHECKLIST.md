# Pre-Launch Checklist

Before deploying your portfolio to production, complete this checklist to ensure everything is perfect.

## 📋 Content Review

### Personal Information
- [ ] Update contact email in Footer component (`src/components/layout/Footer.astro`)
- [ ] Verify phone number (if adding one)
- [ ] Check LinkedIn URL is correct
- [ ] Check GitHub URL is correct
- [ ] Confirm location (Perth, WA) is accurate

### Resume
- [ ] Add your latest resume PDF to `public/resume.pdf`
- [ ] Ensure resume is optimized (file size < 2MB)
- [ ] Test download link works

### Projects
- [ ] Review all 3 project case studies for accuracy
- [ ] Add actual project images to `public/images/projects/`
- [ ] Update project dates if needed
- [ ] Add any missing projects (optional)
- [ ] Verify GitHub links work (if included)

### Images
- [ ] Add a professional photo (optional) to `public/images/`
- [ ] Add project screenshots/images
- [ ] Optimize all images (< 500KB each recommended)
- [ ] Ensure all images have descriptive filenames
- [ ] Verify image paths in MDX files are correct

## 🎨 Design & Branding

### Visual Consistency
- [ ] Check robot emoji (🤖) appears correctly everywhere
- [ ] Verify color scheme matches your preference
- [ ] Test dark theme on different devices
- [ ] Ensure fonts load correctly

### Navigation
- [ ] Test all navigation links work
- [ ] Verify mobile menu works smoothly
- [ ] Check footer links are correct
- [ ] Ensure all CTAs ("Get In Touch", etc.) work

### Responsive Design
- [ ] Test on mobile phone (iPhone, Android)
- [ ] Test on tablet (iPad, Android tablet)
- [ ] Test on desktop (1920px, 1440px, 1280px)
- [ ] Check that text is readable on all screen sizes

## 🔍 SEO & Performance

### Meta Tags
- [ ] Review page title in `src/layouts/BaseLayout.astro`
- [ ] Check meta description accurately describes you
- [ ] Verify keywords match your target roles
- [ ] Update OG image path (or add an OG image)

### Site URL
- [ ] Update `site` in `astro.config.mjs` to your custom domain
- [ ] Or use your Cloudflare Pages URL if no custom domain

### Performance
- [ ] Run `npm run build` successfully (no errors)
- [ ] Test production build with `npm run preview`
- [ ] Check Lighthouse score (aim for 90+): [web.dev/measure](https://web.dev/measure)

## ♿ Accessibility

### Content
- [ ] All images have alt text
- [ ] Headings are in logical order (H1, H2, H3)
- [ ] Links have descriptive text (not just "click here")
- [ ] Color contrast is sufficient (use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))

### Navigation
- [ ] Test keyboard navigation (Tab key)
- [ ] Ensure focus states are visible
- [ ] Verify screen reader compatibility (optional but recommended)

## 🔐 Security & Privacy

### Contact Information
- [ ] Decide if you want to show phone number publicly
- [ ] Use email address you check regularly
- [ ] Consider using a contact form instead (future enhancement)

### Social Media
- [ ] Verify all social media profiles are public (if linking)
- [ ] Update profile pictures on LinkedIn/GitHub to match branding

## 🚀 Deployment Preparation

### Version Control
- [ ] Initialize Git repository (`git init`)
- [ ] Create `.gitignore` file (already included)
- [ ] Make initial commit
- [ ] Create GitHub repository
- [ ] Push to GitHub

### Cloudflare Setup
- [ ] Have Cloudflare account ready
- [ ] Decide on project name (`kurt-adams-portfolio` or similar)
- [ ] Choose custom domain or use `.pages.dev`

### Environment Variables
- [ ] Identify any API keys or secrets (if using)
- [ ] Plan to add them in Cloudflare dashboard (not in code)

## 📱 Cross-Browser Testing

Test your site on:
- [ ] **Chrome** (desktop & mobile)
- [ ] **Safari** (desktop & iOS)
- [ ] **Firefox** (desktop)
- [ ] **Edge** (desktop)

## 📊 Analytics Setup (Optional)

- [ ] Decide on analytics provider:
  - Cloudflare Web Analytics (privacy-friendly, free)
  - Google Analytics
  - Plausible Analytics
- [ ] Get tracking code
- [ ] Add to `BaseLayout.astro`

## 🎯 Job Application Readiness

### Resume Updates
- [ ] Add portfolio URL to your resume
- [ ] Update resume summary to mention portfolio
- [ ] Ensure resume mentions projects featured on site

### LinkedIn Profile
- [ ] Add portfolio URL to LinkedIn
- [ ] Update LinkedIn headline to match hero section
- [ ] Add featured section with portfolio link
- [ ] Consider writing a LinkedIn post announcing portfolio

### Job Applications
- [ ] Prepare cover letter template mentioning portfolio
- [ ] Practice describing portfolio in 30 seconds (elevator pitch)
- [ ] Screenshot impressive metrics for applications

## ✅ Final Checks

### Functionality
- [ ] All links work (no 404s)
- [ ] All images load
- [ ] All CTAs work as expected
- [ ] Form submissions work (if you add a contact form)

### Content
- [ ] Spell check all text
- [ ] Grammar check all content
- [ ] Verify no placeholder text remains
- [ ] Check dates are current

### Legal
- [ ] Review that all project descriptions are accurate
- [ ] Ensure you have rights to all images used
- [ ] Consider adding copyright notice to footer
- [ ] Verify client names are public information (or anonymize)

## 🎊 Ready to Launch!

Once you've completed this checklist:

1. **Final build test:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Pre-launch: All checks complete"
   git push origin main
   ```

3. **Deploy to Cloudflare Pages:**
   Follow the guide in `DEPLOYMENT.md`

4. **Post-launch:**
   - Test live site on all devices
   - Share with friends/colleagues for feedback
   - Update resume with live URL
   - Start applying to jobs!

---

## 🆘 Need Help?

If you encounter issues:
1. Check **DEPLOYMENT.md** for troubleshooting
2. Review **README.md** for technical details
3. Check Cloudflare Pages documentation
4. Search the Astro Discord for similar issues

---

**You're about to have an incredible portfolio live. Good luck!** 🚀
