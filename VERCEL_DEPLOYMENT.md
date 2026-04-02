# Vercel Deployment Guide for Infinite Mind

## ✅ Pre-Deployment Checklist

Your app is now **ready for Vercel deployment** with the following fixes:

- ✅ React downgraded from 19.0.0 → 18.3.1 (compatible with react-scripts)
- ✅ `vercel.json` configuration added
- ✅ `vercel-build` script added to package.json
- ✅ `.vercelignore` file created

---

## 🚀 Deploy Frontend to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Navigate to frontend folder**
   ```bash
   cd frontend
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard (Easy)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import from GitHub: `https://github.com/srikanthg212/InfiniteMind`
4. **Framework Preset**: Other (NOT Create React App)
5. **Root Directory**: `frontend`
6. **Build Command**: `yarn build`
7. **Output Directory**: `build`
8. **Install Command**: `yarn install`
9. Click **"Deploy"**

**Important:** Set Framework Preset to "Other" to prevent Vercel from auto-detecting and using react-scripts instead of CRACO.

---

## 🔧 Environment Variables on Vercel

Add this environment variable in Vercel Dashboard:

**Key**: `REACT_APP_BACKEND_URL`  
**Value**: Your backend URL (e.g., `https://your-backend.railway.app` or keep current preview URL)

---

## 🎯 Custom Domain on Vercel

After deployment:

1. Go to your project settings on Vercel
2. Click **"Domains"**
3. Add your custom domain (e.g., `infinitemind.com`)
4. Update your DNS records as instructed by Vercel
5. Free SSL certificate is automatically provisioned!

---

## 📝 What Changed?

### package.json
```json
{
  "dependencies": {
    "react": "^18.3.1",      // ← Changed from 19.0.0
    "react-dom": "^18.3.1"   // ← Changed from 19.0.0
  },
  "scripts": {
    "vercel-build": "craco build"  // ← Added for Vercel
  }
}
```

### New Files
- `frontend/vercel.json` - Vercel configuration
- `frontend/.vercelignore` - Files to ignore during deployment

---

## 🐛 Troubleshooting

### If build fails with "react-scripts: command not found":

**Solution:** Vercel is trying to use react-scripts instead of CRACO.

1. In Vercel Dashboard, go to **Project Settings**
2. Go to **General** → **Build & Development Settings**
3. Set **Framework Preset**: `Other` (NOT Create React App)
4. Set **Build Command**: `yarn build`
5. Set **Install Command**: `yarn install`
6. **Redeploy**

### Other common issues:

1. **Check Node version**: Vercel uses Node 18 by default
2. **Clear cache**: Redeploy with cache cleared
3. **Check environment variables**: Make sure `REACT_APP_BACKEND_URL` is set
4. **Build locally first**:
   ```bash
   cd frontend
   yarn build
   ```
   If it builds locally, it should work on Vercel!

---

## 🎉 Expected Result

After successful deployment:
- **URL**: `infinitemind.vercel.app` or your custom domain
- **Build Time**: ~2-3 minutes
- **Auto-deploys**: Every git push to main branch
- **Free**: Vercel's Hobby plan is free for personal projects

---

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App on Vercel](https://vercel.com/guides/deploying-react-with-vercel)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)

---

**Need help?** Check the Vercel deployment logs for detailed error messages!
