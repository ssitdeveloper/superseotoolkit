# Super SEO Toolkit

Free, fast, browser-based SEO tools for professionals. No login required. Works offline.

## Features

- **Meta Tag Analyzer** - Check page meta tags for SEO completeness
- **Title Tag Checker** - Verify title length, keywords, and quality
- **Keyword Density Analyzer** - Find keyword frequency in content
- **Robots.txt Generator** - Generate robots.txt with common configurations
- **Open Graph Preview** - Preview how pages look when shared on social media
- **Schema Markup Generator** - Generate JSON-LD structured data
- **Redirect Checker** - Analyze URL structure and HTTPS configuration
- **Word & Character Counter** - Count words, characters, reading time, and readability

## Quick Deploy to Cloudflare Pages

### Option 1: Using Cloudflare Dashboard
1. Sign in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Pages**
3. Click **Create a project** → **Connect to Git** (or **Upload directly**)
4. Select this repository
5. Build settings:
   - **Framework preset**: None
   - **Build command**: Leave empty (or use `echo "Static site"`)
   - **Build output directory**: `/` (root)
6. Click **Save and Deploy**

### Option 2: Using Wrangler CLI
```bash
npm install -g wrangler
wrangler pages deploy . --project-name super-seo-toolkit
```

### Option 3: Using Git
1. Push this repository to GitHub
2. Connect to Cloudflare Pages via dashboard
3. Cloudflare will auto-detect this as a static site

## Local Development

### Using Python (No dependencies needed)
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`

### Using Node.js
```bash
npx http-server
```

### Using PHP
```bash
php -S localhost:8000
```

## File Structure

```
.
├── index.html          # Main application
├── manifest.json       # PWA manifest
├── sw.js              # Service worker (offline support)
├── package.json       # Project metadata
├── _redirects         # Cloudflare routing
└── README.md          # This file
```

## PWA Installation

The app is a Progressive Web App (PWA). To install:
- **Desktop**: Click the install button in your address bar
- **Mobile**: Tap "Add to Home Screen" or "Install"

Once installed, you can use all tools offline!

## Performance Tips

1. **Cache headers** - Assets are cached aggressively for performance
2. **Service Worker** - Enables offline functionality and faster loads
3. **Zero dependencies** - Pure HTML/CSS/JavaScript for speed

## Customization

### Add Your Branding
Edit the constants in `index.html`:
- Update the logo and title
- Change color scheme (CSS variables in `:root`)
- Add your affiliate links in the affiliate section

### Add Google AdSense
Replace the `<!-- Google AdSense -->` comments with:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-ID"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-YOUR-ID"
     data-ad-slot="YOUR-SLOT-ID"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## Analytics

Add your analytics provider:

### Google Analytics
Add to `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Cloudflare Analytics
No setup needed - automatically included with Cloudflare Pages!

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)
- Works offline with PWA support

## Privacy

All processing happens locally in your browser. Nothing is sent to any server.

## License

MIT License - Feel free to fork, modify, and deploy!

## Troubleshooting

### Service Worker not working
- Check browser privacy settings
- Clear site data and reinstall
- Service workers require HTTPS (Cloudflare automatically provides this)

### PWA won't install
- Must be served over HTTPS
- `manifest.json` must be accessible
- Service worker must be registered

### Build failing on Cloudflare
- Make sure `_redirects` file exists
- Don't set a build command (leave empty)
- Build output should be `/` or `.`

## Performance Metrics (Target)

- **LCP (Largest Contentful Paint)**: < 1.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Time to First Byte**: < 200ms

## Deploy Status

[![Deployed on Cloudflare Pages](https://img.shields.io/badge/deployed-cloudflare%20pages-blue?style=flat-square)](https://pages.cloudflare.com/)

---

Made with ❤️ for SEO professionals
