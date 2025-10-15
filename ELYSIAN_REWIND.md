# Elysian Rewind Section - Documentation

## 🎬 Overview

The Elysian Rewind section is a stunning, modern component that showcases past event memories with two main features:

1. **Infinite Scrolling Text Animation** - Continuously moving "ELYSIAN REWIND" text
2. **Cylindrical Photo Gallery** - 3D rotating gallery with horizontal scroll

---

## ✨ Features Implemented

### 1. **Infinite Scrolling Text**

#### Visual Design

- **Large, bold text**: 8xl-9xl font size
- **Gradient effect**: Purple to pink gradient (`from-purple-400 via-pink-500 to-purple-400`)
- **Cinzel font**: Elegant serif font for premium feel
- **Star separator**: Purple star (★) between text repetitions
- **Seamless loop**: Duplicated text for continuous animation

#### Animation Details

- **Direction**: Left to right continuous movement
- **Duration**: 20 seconds per loop
- **Easing**: Linear (constant speed)
- **Repetition**: Infinite loop
- **Multiple copies**: 10 repetitions to ensure seamless effect

#### Edge Effects

- **Gradient fade**: Black gradient overlays on left and right edges
- **32px width**: Smooth fade-in/fade-out zones
- **Z-index layering**: Overlays stay on top without blocking content

---

### 2. **Cylindrical Photo Gallery**

#### 3D Transform Effect

The gallery creates a **3D cylinder rotation** effect using:

- **Transform properties**:
  - `rotateY()` - Rotates images around Y-axis
  - `translateZ()` - Moves images in 3D space (depth)
  - `scale()` - Scales images based on position
  - `opacity` - Fades images based on angle

#### Scroll Interaction

- **Horizontal scroll**: User scrolls left/right to navigate
- **Dynamic rotation**: Images rotate in 3D based on scroll position
- **Center focus**: Images at center are largest and most visible
- **Smooth transitions**: 0.3s ease-out for all transforms

#### Mathematical Calculations

```javascript
// Each image gets an angle position
anglePerImage = 360° / totalImages

// Rotation based on scroll
rotation = baseRotation - (scrollProgress × 360°)

// Depth calculation (creates cylinder effect)
translateZ = cos(rotation) × 50px

// Scale changes with position
scale = 0.8 + cos(rotation) × 0.2  // Range: 0.6 to 1.0

// Opacity fades for side images
opacity = 0.4 + cos(rotation) × 0.6  // Range: 0.4 to 1.0
```

#### Gallery Features

- **8 sample images**: Placeholder gallery items
- **Image size**: 320px width × 384px height (w-80 h-96)
- **Rounded corners**: rounded-2xl for modern look
- **Shadow effect**: shadow-2xl for depth
- **Snap scrolling**: Smooth snap to center on scroll
- **Hidden scrollbar**: Clean appearance

#### Image Cards

Each card includes:

- **Image**: Full cover image
- **Title overlay**: Dark gradient at bottom
- **Hover effect**: Scale up slightly (1.05x)
- **Purple glow**: Gradient overlay on hover

---

## 🎨 Styling & Design

### Color Scheme

- **Background**: Pure black (`bg-black`)
- **Text gradient**: Purple → Pink → Purple
- **Stars**: Purple-500
- **Image overlays**: Black gradient (from-black/80)
- **Hover glow**: Purple-600 with transparency

### Typography

- **Main title**: 8xl-9xl, font-black, Cinzel font
- **Instruction text**: xl, gray-400
- **Image titles**: 2xl, bold, white

### Spacing

- **Section padding**: py-20 (80px top/bottom)
- **Text margin**: mb-20 (80px bottom)
- **Gallery gap**: gap-8 (32px between images)
- **Star spacing**: mx-8 (32px margins)

---

## 🔧 Technical Implementation

### Component Structure

```
ElysianRewind (Main Component)
├── Infinite Scrolling Text Section
│   ├── Primary animated div
│   ├── Duplicate animated div (for seamless loop)
│   └── Gradient fade overlays
│
└── Cylindrical Gallery Section
    ├── Instruction text
    └── CylindricalGallery Component
        └── Scrollable container with image cards
```

### Key Props & State

- `galleryImages`: Array of image objects (id, url, title)
- `scrollProgress`: State tracking horizontal scroll (0 to 1)
- `scrollContainerRef`: Ref for scroll container
- `handleScroll`: Updates scroll progress on user scroll

### Framer Motion Usage

- **animate**: For infinite text animation
- **whileHover**: For image scale effects
- **whileInView**: For instruction text fade-in
- **transition**: For smooth animations

---

## 📱 Responsive Design

- **Desktop**: Full 3D effect with large images
- **Tablet**: Maintains 3D effect, slightly smaller
- **Mobile**: Horizontal scroll works perfectly, images stack

---

## 🎯 Customization Guide

### Change Images

Edit the `galleryImages` array in `ElysianRewind.jsx`:

```javascript
const galleryImages = [
  { id: 1, url: "/your-image.jpg", title: "Your Title" },
  // Add more images...
];
```

### Adjust Scroll Speed

Change the `duration` in the animate prop:

```javascript
transition={{
  duration: 20,  // Change this (lower = faster)
}}
```

### Modify Cylinder Radius

Adjust the `translateZ` calculation:

```javascript
const translateZ = Math.cos((rotation * Math.PI) / 180) * 50;
// Change 50 to larger number for wider cylinder
```

### Change Text Gradient

Modify the gradient classes:

```javascript
className = "bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400";
// Change colors: from-[color] via-[color] to-[color]
```

---

## 🚀 Performance Notes

- **GPU Acceleration**: Uses `transform` and `opacity` for smooth 60fps animations
- **Will-change**: Automatically applied by Framer Motion
- **Efficient rendering**: Only visible images are fully rendered
- **No layout shifts**: Fixed dimensions prevent reflows

---

## 📂 Files Created/Modified

1. **src/components/ElysianRewind.jsx** - Main component (NEW)
2. **src/pages/Home.jsx** - Added ElysianRewind component
3. **src/index.css** - Added scrollbar-hide and perspective utilities

---

## 🎥 Animation Timeline

1. **0s**: Text starts moving from right
2. **Continuous**: Text loops infinitely
3. **On scroll**: Gallery rotates in 3D
4. **On hover**: Images scale up with glow effect

---

## 💡 Pro Tips

1. **Add more images**: Gallery works best with 6-12 images
2. **Same aspect ratio**: Use consistent image sizes for best effect
3. **High quality images**: Use at least 640×768px images
4. **Descriptive titles**: Make titles engaging and memorable
5. **Test scroll**: Horizontal scroll works best with mouse/trackpad

---

Enjoy your stunning Elysian Rewind section! 🎉
