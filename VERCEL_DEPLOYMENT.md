# Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

Your portfolio is fully configured for Vercel deployment with optimal settings for global distribution.

---

## One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/archduke1337/dev-portfolio)

---

## Manual Deployment Steps

### 1. Prerequisites
- GitHub account with repository pushed
- Vercel account (free tier available)
- Node.js 18+ installed locally

### 2. Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Import your GitHub repository: `archduke1337/dev-portfolio`
4. Vercel will auto-detect the configuration

### 3. Project Settings

Vercel will automatically detect these settings from `vercel.json`:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`
- **Node Version**: 18.x (from package.json engines)

### 4. Environment Variables

Add these in Vercel Dashboard → Project Settings → Environment Variables:

```env
# Feature Flags
VITE_ENABLE_3D=true
VITE_ENABLE_ANIMATIONS=true
VITE_ENABLE_SERVICE_WORKER=true

# App Configuration
VITE_APP_NAME="Gaurav - Developer Portfolio"
VITE_APP_URL=https://dev-portfolio.vercel.app
VITE_AUTHOR_NAME="Gaurav Yadav"
VITE_AUTHOR_EMAIL=gauravramyadav@gmail.com
VITE_GITHUB_USERNAME=archduke1337
```

### 5. Deploy

Click **"Deploy"** and Vercel will:
1. Install dependencies
2. Build your project
3. Deploy to global CDN
4. Provide a production URL

---

## 🌍 Global Configuration

### Edge Network
Your portfolio is configured for optimal global performance:

- **Default Region**: `iad1` (Washington D.C., USA)
- **Global CDN**: Automatic edge caching
- **HTTPS**: Automatic SSL certificates
- **Custom Domain**: Add your domain in Vercel settings

### Performance Features

#### Cache Headers
- **Static Assets** (`/assets/*`): 1 year cache
- **Service Worker** (`/sw.js`): No cache, must revalidate
- **HTML**: Dynamic, no cache

#### Security Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

#### SPA Routing
All routes redirect to `/index.html` for client-side routing

---

## 📊 Build Performance

### Production Build Stats
```bash
npm run build
```

Expected output:
- **Bundle Size**: ~400-600KB (gzipped)
- **Chunks**: 6-8 vendor chunks for optimal caching
- **Build Time**: 10-20 seconds
- **Lighthouse Score**: 90+

### Optimization Features
- ✅ Terser minification
- ✅ Console.log removal
- ✅ CSS code splitting
- ✅ Hash-based filenames
- ✅ Tree shaking
- ✅ Lazy loading

---

## 🔄 Continuous Deployment

### Automatic Deployments
Vercel automatically deploys when you:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment
- Open pull request → Preview deployment with unique URL

### Branch Configuration
```json
{
  "git": {
    "deploymentEnabled": {
      "main": true,
      "develop": true
    }
  }
}
```

---

## 🛠 Custom Domain Setup

### Add Custom Domain

1. Go to **Project Settings** → **Domains**
2. Add your domain (e.g., `gaurav.dev`)
3. Follow Vercel's DNS instructions:

```txt
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

4. Wait for DNS propagation (5-30 minutes)
5. Vercel auto-provisions SSL certificate

### Domain Aliases
- `dev-portfolio.vercel.app` (default)
- `www.yourdomain.com`
- `yourdomain.com`

---

## 📱 Preview Deployments

Every push gets a unique preview URL:
- Test changes before merging
- Share with clients/team
- Automatic cleanup after merge

Example: `dev-portfolio-git-feature-branch-username.vercel.app`

---

## 🔍 Monitoring & Analytics

### Vercel Analytics (Optional)

Add to your project:
```bash
npm install @vercel/analytics
```

Update `src/main.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In your root component
<Analytics />
```

### Web Vitals
Monitor in Vercel Dashboard:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Time to First Byte (TTFB)

---

## 🚨 Troubleshooting

### Build Fails

**Check Node version:**
```bash
node --version  # Should be 18+
```

**Clear cache and rebuild:**
```bash
rm -rf node_modules build
npm install
npm run build
```

### 404 Errors

Ensure `vercel.json` has SPA rewrites:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Environment Variables Not Working

- Variable names must start with `VITE_`
- Redeploy after adding variables
- Check Vercel Dashboard logs

### Slow Build Times

- Check dependencies size
- Review Vite config
- Consider build caching

---

## 📚 Files Configuration

### Core Files
- ✅ `vercel.json` - Vercel configuration
- ✅ `.vercelignore` - Ignore unnecessary files
- ✅ `.env.production` - Production environment variables
- ✅ `.env.example` - Example environment variables
- ✅ `package.json` - Build scripts and engines

### Build Output
```
build/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── react-vendor-[hash].js
│   ├── three-vendor-[hash].js
│   ├── framer-motion-[hash].js
│   └── ...other chunks
└── manifest.json
```

---

## 🎯 Post-Deployment Checklist

After successful deployment:

- [ ] Test live URL
- [ ] Verify 3D graphics work
- [ ] Check mobile responsiveness
- [ ] Test all links and navigation
- [ ] Verify contact form
- [ ] Run Lighthouse audit
- [ ] Test PWA installability
- [ ] Check all social links
- [ ] Verify custom domain (if added)
- [ ] Test on multiple devices
- [ ] Monitor Web Vitals in Vercel Dashboard

---

## 🔐 Security Best Practices

### Implemented
- ✅ HTTPS only (automatic)
- ✅ Security headers configured
- ✅ XSS protection
- ✅ Content type sniffing prevention
- ✅ Clickjacking protection

### Recommended
- Add CSP headers for additional security
- Regular dependency updates
- Monitor Vercel security advisories

---

## 💡 Pro Tips

1. **Use Preview URLs** for testing before production
2. **Add .vercelignore** to speed up deployments
3. **Monitor analytics** to understand user behavior
4. **Set up notifications** for deployment status
5. **Use environment variables** for API keys
6. **Enable Vercel Analytics** for Web Vitals tracking
7. **Add custom error pages** (404, 500)
8. **Configure redirects** for SEO if needed

---

## 🆘 Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Issues](https://github.com/archduke1337/dev-portfolio/issues)

---

## 📈 Performance Optimization

Your deployment includes:
- Global CDN distribution
- Automatic image optimization
- Brotli compression
- HTTP/2 & HTTP/3 support
- Edge caching
- Automatic SSL
- DDoS protection

**Expected Performance:**
- Lighthouse Score: 95+
- First Load: <1.5s
- Interaction Ready: <2s
- Global Latency: <100ms

---

*Deploy with confidence! Your portfolio is production-ready and optimized for global performance.* 🚀
