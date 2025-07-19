# Public Directory

This directory contains static assets that are served directly to the browser.

## Purpose

- Store static files that need to be publicly accessible
- House images, icons, fonts, and other media assets
- Contain files that don't require processing or bundling
- Provide direct URL access to assets

## Guidelines

- Optimize images for web (compress, use appropriate formats)
- Use descriptive filenames for better organization
- Consider using a CDN for large assets in production
- Keep file sizes reasonable for performance
- Use appropriate image formats (WebP, AVIF for modern browsers)
- Organize assets in logical subdirectories

## Common Subdirectories

### Images

- `images/` - General application images
- `icons/` - Icon files (SVG, PNG)
- `logos/` - Brand logos and variations
- `avatars/` - Default user avatars and profile images
- `backgrounds/` - Background images and patterns

### Documents

- `documents/` - PDF files, documentation
- `downloads/` - Files available for download
- `templates/` - Document templates

### Media

- `videos/` - Video files
- `audio/` - Audio files and sounds
- `animations/` - Lottie files, GIFs

### Metadata

- `favicon.ico` - Website favicon
- `robots.txt` - Search engine crawling instructions
- `sitemap.xml` - Site structure for search engines
- `manifest.json` - PWA manifest file

## Example Structure

```
public/
├── images/
│   ├── hero-banner.jpg
│   ├── placeholder.svg
│   └── team/
├── icons/
│   ├── social/
│   └── ui/
├── logos/
│   ├── logo.svg
│   └── logo-dark.svg
├── documents/
│   └── user-guide.pdf
├── favicon.ico
├── robots.txt
└── manifest.json
```

## Asset Optimization Tips

- Use next/image component for automatic optimization
- Implement proper alt text for accessibility
- Consider lazy loading for images below the fold
- Use appropriate image dimensions to avoid layout shift
- Implement responsive images with different sizes

## Access in Code

```typescript
// Next.js automatically serves files from public/
<img src="/images/logo.svg" alt="Company Logo" />;

// Using next/image (recommended)
import Image from "next/image";
<Image
  src="/images/hero-banner.jpg"
  alt="Hero Banner"
  width={800}
  height={400}
/>;
```
