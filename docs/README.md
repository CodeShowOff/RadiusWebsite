# Radius Promotional Website

A high-quality promotional website for the Radius app built with React, Vite, and Framer Motion.

## 🚀 Quick Start

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 🎨 Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Dark Theme** - Modern purple/cyan gradient design
- **Interactive Components** - Hover effects, scroll animations, and more
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML

## 📱 Download Detection

The download buttons automatically detect the user's device:
- **iOS devices** → Redirects to App Store
- **Android devices** → Redirects to Google Play Store
- **Desktop** → Scrolls to download section with QR code

## 🏗️ Project Structure

```
website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── TrustedBy.jsx/.css
│   │   ├── Features.jsx/.css
│   │   ├── HowItWorks.jsx/.css
│   │   ├── WhyRadius.jsx/.css
│   │   ├── Download.jsx/.css
│   │   ├── FAQ.jsx/.css
│   │   └── Footer.jsx/.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
│   └── favicon.svg
└── index.html
```

## 🎯 Sections

1. **Hero** - Eye-catching intro with animated phone mockup
2. **Trusted By** - Social proof from publications
3. **Features** - 6 key features with animated cards
4. **How It Works** - 4-step process with visual demo
5. **Why Radius** - Stats, benefits, and comparison table
6. **Download** - Call-to-action with store buttons and QR code
7. **FAQ** - Accordion-style frequently asked questions
8. **Footer** - Links, social media, and branding

## 🛠️ Build for Production

```bash
npm run build
npm run preview
```

The production build will be in the `dist/` folder.

## 📝 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: #8B5CF6;
  --secondary: #06B6D4;
  --accent: #F472B6;
  /* ... */
}
```

### Content
- Update store links in download buttons
- Modify FAQ questions in `src/components/FAQ.jsx`
- Change feature descriptions in `src/components/Features.jsx`

## ⚠️ Note

Make sure to update the App Store and Google Play Store URLs before deploying to production.
