# Deployment Guide for Offline HTML Games Pack

## Quick Deployment to Vercel

### Method 1: One-Click Deploy (Recommended)

1. Click the "Deploy with Vercel" button in the README
2. Connect your GitHub account
3. Choose a project name
4. Click "Deploy"
5. Wait 2-3 minutes for the build to complete
6. Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? (default or custom)
# - Directory? ./
# - Override settings? N

# Deploy to production
vercel --prod
```

### Method 3: GitHub Integration

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

## Deployment to Other Platforms

### Netlify

```bash
# Build the static site
npm run build

# Deploy the out/ folder to Netlify
# Option 1: Drag and drop the out/ folder to netlify.com/drop
# Option 2: Use Netlify CLI
npm install -g netlify-cli
netlify deploy --dir=out --prod
```

### GitHub Pages

```bash
# Build the static site
npm run build

# The out/ folder contains the static site
# Push the out/ folder to gh-pages branch
# Or use gh-pages package:
npm install -D gh-pages
npx gh-pages -d out
```

### Any Static Host

```bash
# Build the static site
npm run build

# Upload the entire out/ folder to your hosting provider
# - AWS S3 + CloudFront
# - Google Cloud Storage
# - Azure Static Web Apps
# - Any web server (Apache, Nginx, etc.)
```

## Environment Configuration

### Build Settings

**Build Command:**
```bash
npm run build
```

**Output Directory:**
```
out
```

**Install Command:**
```bash
npm install
```

**Node Version:**
- Recommended: 18.x or 20.x
- Minimum: 16.x

### Environment Variables

No environment variables are required for basic deployment.

## Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed:
   - Type: A Record
   - Name: @ (or subdomain)
   - Value: (Vercel provides this)
4. Wait for DNS propagation (5-60 minutes)

### Other Platforms

Follow your hosting provider's documentation for custom domain setup.

## Troubleshooting

### Build Fails

**Error: "Command failed with exit code 1"**
- Check Node.js version (should be 16+)
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`
- Rebuild: `npm run build`

**Error: "Out of memory"**
- Increase Node memory: `NODE_OPTIONS="--max-old-space-size=4096" npm run build`

### Games Not Loading

**404 Errors on Game Pages**
- Ensure `output: 'export'` is in next.config.js
- Check that games are in `public/games-data/offline/`
- Verify build completed successfully

**Blank Game Pages**
- Check browser console for errors
- Ensure iframe src paths are correct
- Verify games files are included in deployment

### Service Worker Issues

**Service Worker Not Registering**
- Ensure HTTPS is enabled (required for service workers)
- Check browser console for errors
- Verify sw.js is in the public folder

## Performance Optimization

### Reduce Build Size

The current build is ~4.3GB due to 300 game files. To reduce:

1. **Remove unused games** (if you don't need all 300):
   ```bash
   # Remove games from public/games-data/offline/
   # Regenerate config
   npm run generate-config
   ```

2. **Use compression**:
   - Vercel automatically compresses files
   - For other hosts, enable gzip/brotli compression

3. **CDN Configuration**:
   - Vercel provides global CDN automatically
   - For other hosts, use CloudFlare or similar

### Improve Load Times

1. **Enable caching** (already configured in vercel.json)
2. **Use lazy loading** (already implemented)
3. **Service Worker caching** (already implemented)

## Monitoring

### Vercel Analytics

Enable in Project Settings → Analytics to track:
- Page views
- Performance metrics
- Geographic distribution

### Custom Analytics

Add analytics to `pages/_app.js`:
```javascript
// Example: Google Analytics
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // Track page views
    const handleRouteChange = (url) => {
      // Your analytics code here
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  return <Component {...pageProps} />;
}
```

## Security

### Headers

Already configured in vercel.json. For other platforms, add:

```nginx
# Nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
```

### HTTPS

- Vercel: Automatic HTTPS
- Other platforms: Use Let's Encrypt or your provider's SSL

## Support

For issues:
1. Check this guide
2. Review Next.js documentation
3. Check Vercel documentation
4. Open an issue on GitHub

## Updates

To update the deployed site:

1. Make changes locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Commit and push to GitHub
5. Vercel auto-deploys from main branch
6. Or manually deploy: `vercel --prod`
