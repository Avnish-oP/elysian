# Elysian Website - Updates & Features

## ✨ Recent Changes

### 1. **Enhanced Navbar Hover Animations**

#### Navigation Items

- **3D lift effect**: Items now move up slightly on hover (`y: -2`)
- **Glow effect**: Text gets a purple shadow glow on hover
- **Background animation**: Gradient background fades in with purple/blue colors
- **Shadow effect**: Box shadow appears around hovered items
- **Smooth transitions**: All animations are fluid and responsive

#### Social Media Icons

- **Full rotation**: Icons now rotate 360° on hover (was only 5°)
- **Larger scale**: Icons scale to 1.3x (was 1.2x)
- **Vertical lift**: Icons move up slightly on hover
- **Drop shadow glow**: Purple glow effect around icons
- **Smoother animation**: Better easing and duration

### 2. **New About Section**

#### Layout

- **Dark blue gradient background**: `from-blue-950 via-blue-900 to-blue-950`
- **Two-column grid**: Text on left, image on right
- **Responsive design**: Stacks vertically on mobile

#### Text Content (Left Side)

- **Custom font**: "Cinzel" serif font for the title (imported via Google Fonts)
- **Large title**: 6xl/7xl text size with bold weight
- **Description text**: Gray-300 color with proper spacing and readability
- **Fade-in animation**: Slides from left with opacity transition

#### Image (Right Side)

- **elysian-elements.png** displayed prominently
- **Hover effect**: Slight scale and rotation on hover
- **Fade-in animation**: Slides from right with opacity transition

### 3. **Date Strip**

#### Design

- **Three-section layout**:
  - Left: Off-white background, rounded left edge
  - Center: Golden gradient (`from-yellow-600 via-yellow-400 to-yellow-600`)
  - Right: Off-white background, rounded right edge
- **Date display**: "November 15-17, 2025" in bold, large text
- **Hover effect**: Slight scale on the date text
- **Full-width**: Stretches across the container

### 4. **Event Image**

- Full-width preview image (using heroImage.png)
- Rounded corners with shadow
- Scale animation on scroll into view
- 96px height (h-96)

### 5. **Tagline**

- **Text**: "Innovation in every _celebration_"
- **Styling**:
  - Large 5xl text
  - Word "celebration" is italic and purple-400 color
  - Centered alignment
- **Animation**: Fade up from bottom

### 6. **Register Button**

#### Design Features

- **Double border effect**:
  - Outer: Black background (1px padding)
  - Inner: Purple border (2px), transparent background
- **Fully rounded**: `rounded-full` on both layers
- **Hover effects**:
  - Purple glow shadow
  - Border color intensifies
  - Slight purple background tint
  - Scale up slightly
- **Tap effect**: Scales down on click
- **Large size**: px-12 py-4 padding
- **White text**: Bold, 20px size

## 🎨 Animation Details

### About Section Animations

1. **Text content**: Slides from left (x: -50 to 0) with fade
2. **Image**: Slides from right (x: 50 to 0) with fade, delayed by 0.2s
3. **Date strip**: Fades up from bottom (y: 30 to 0)
4. **Event image**: Scales up from 0.9 to 1 with fade
5. **Tagline**: Fades up from bottom with delay
6. **Button**: Fades up from bottom with 0.2s delay

### Navbar Animations

- **Nav items**: Multi-layered hover with background, text glow, and lift
- **Social icons**: 360° rotation with lift and glow
- **Active indicator**: Gradient underline with spring animation

## 📁 Files Modified

1. **src/components/Navbar.jsx** - Enhanced hover animations
2. **src/components/About.jsx** - New component created
3. **src/pages/Home.jsx** - Added About component
4. **index.html** - Added Cinzel font from Google Fonts

## 🎯 Key Features

✅ Smooth scroll-triggered animations (all sections fade in when visible)
✅ Interactive hover states with multiple effects
✅ Professional gradient backgrounds
✅ Custom typography (Cinzel font)
✅ Responsive design (mobile-friendly)
✅ Double-border button design
✅ Golden gradient date strip
✅ Purple/blue color scheme consistency

## 🚀 Next Steps

You can:

1. Update the date in the date strip
2. Change the event preview image
3. Modify the button link to actual registration page
4. Adjust colors in the gradients
5. Add more sections below

## 💡 Customization Tips

### Change the Date

Edit `src/components/About.jsx`, line with the date text:

```jsx
<motion.p className="text-3xl font-bold text-gray-900 whitespace-nowrap">
  November 15-17, 2025 // Change this
</motion.p>
```

### Change Button Action

Add an onClick handler or Link to the register button:

```jsx
<motion.button
  onClick={() => window.location.href = '/register'}
  // ... rest of props
>
```

### Adjust Colors

- Background: Change `from-blue-950` to your preferred color
- Golden gradient: Modify `from-yellow-600 via-yellow-400 to-yellow-600`
- Button border: Change `border-purple-500`

Enjoy your enhanced Elysian website! 🎉
