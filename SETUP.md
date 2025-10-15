# Elysian Event Website

A modern, interactive event website built with React, Vite, Framer Motion, and Tailwind CSS.

## ✨ Features Implemented

### 1. **Navbar Component**

- **Black background** with fixed positioning
- **Logo** on the left (uses `elysian-elements.png`)
- **Navigation buttons** in the center: Home, Events, Sponsors, Team
- **Social media links** on the right: Instagram, X (Twitter), LinkedIn
- **Smooth animations** with Framer Motion:
  - Slide-in animation on load
  - Hover effects on all interactive elements
  - Active page indicator with smooth transition
  - Background blur effect on scroll

### 2. **Hero Section**

- **Full-screen background image** (`heroImage.png`)
- **Scroll-based parallax animations**:
  - Image zooms and moves based on scroll position
  - Opacity changes for smooth transition
- **Smooth fade-in animation** on page load
- **Decorative gradient overlays** for depth
- **Responsive design** for all screen sizes

### 3. **Routing Structure**

- React Router DOM integration
- Four pages created:
  - **Home**: Hero section with placeholder content
  - **Events**: Placeholder page for event listings
  - **Sponsors**: Placeholder page for sponsors
  - **Team**: Placeholder page for team members

## 🚀 Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library (Instagram, X, LinkedIn)

## 🎨 Animation Features

- **Navbar animations**:

  - Smooth slide-in from top on load
  - Hover scale effects on logo and buttons
  - Active page underline with spring animation
  - Social icons rotate on hover

- **Hero animations**:
  - Parallax scroll effect
  - Zoom effect on scroll
  - Fade-in animation on load
  - Opacity transition while scrolling

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Development Server

The app runs on: **http://localhost:5173/**

## 📝 Next Steps

You can now:

1. Add content to the Events, Sponsors, and Team pages
2. Customize the color scheme (currently using purple accents)
3. Add more sections to the home page
4. Update social media URLs in `Navbar.jsx`
5. Replace placeholder images with actual event images

## 🎯 Key Files

- `src/App.jsx` - Main app with routing
- `src/components/Navbar.jsx` - Navigation component
- `src/components/Hero.jsx` - Hero section
- `src/pages/Home.jsx` - Home page
- `src/pages/Events.jsx` - Events page
- `src/pages/Sponsors.jsx` - Sponsors page
- `src/pages/Team.jsx` - Team page

## 🔧 Customization Tips

### Change Colors

Edit the Tailwind classes in components. Current accent color is `purple-400`. You can change it to any Tailwind color.

### Update Social Links

In `Navbar.jsx`, update the `socialLinks` array with your actual social media URLs.

### Modify Animations

Adjust Framer Motion properties in components:

- `duration` - Animation speed
- `ease` - Animation timing function
- `scale` - Size transformation
- `y` - Vertical movement

Enjoy building your Elysian event website! 🎉
