# Quick Start Guide - Meili Landing Page

## 🚀 Getting Started

### 1. Install Dependencies (if not already done)
```bash
cd meili-3d-landing
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: http://localhost:3000

## 📋 What You'll See

The landing page features 6 frames with "antigravity" animations:

1. **Frame 1**: "Travel without friction" - Centered introduction
2. **Frame 2**: "Speak. We listen" - Left-aligned, B2C focus
3. **Frame 3**: "Add a beach day" - Typewriter effect, real-time editing
4. **Frame 4**: "Control from orbit" - Right-aligned, B2B dashboard
5. **Frame 5**: "When plans collapse, we reroute" - Crisis AI with massive planet
6. **Frame 6**: "From orbit to earth" - Red landscape, booking CTAs
7. **Footer**: Links and social icons

## 🎨 Key Features Implemented

✅ Parallax scrolling with variable speeds (0.3x - 1.2x)  
✅ Typewriter effect on Frame 3  
✅ Counterbalanced animations (planet right = text from left)  
✅ Pulsing alert indicators on Frame 5  
✅ Smooth fade transitions with atmospheric emergence (0.4 opacity start)  
✅ Hover states with lift and glow effects  
✅ Responsive design (mobile-friendly)  
✅ Accessibility support (prefers-reduced-motion)  
✅ Footer with links and social icons  

## 🎯 Testing Checklist

- [ ] Scroll through all 6 frames smoothly
- [ ] Text fades in from different directions per frame
- [ ] Parallax effects work at different speeds
- [ ] Typewriter effect appears on Frame 3
- [ ] Alert dots pulse on Frame 5
- [ ] Buttons have hover effects (lift + glow)
- [ ] Footer appears at the bottom
- [ ] Mobile responsive (test on small screen)

## 🛠️ Common Customizations

### Change Text Content
Edit: `components/Overlay.tsx`
- Find the frame you want to modify
- Update the text inside `<h1>`, `<h2>`, or `<p>` tags

### Adjust Animation Speed
Edit: `components/Overlay.tsx`
- Find the `<ParallaxText>` component
- Modify the `speed` prop (lower = slower, higher = faster)

### Change Colors
Edit: `components/Overlay.tsx`
- Update Tailwind classes:
  - `text-purple-400` → Purple tones
  - `text-fuchsia-400` → Pink/magenta tones
  - `text-orange-400` → Orange tones (Frame 6)
  - `bg-purple-500` → Background colors

### Modify Button Styles
Edit: `components/Overlay.tsx`
- Find the `<motion.button>` components
- Update className for styling
- Modify `whileHover` for hover effects

## 📁 File Structure

```
meili-3d-landing/
├── components/
│   ├── Overlay.tsx          ← Main content & animations (MODIFIED)
│   ├── ImageSequence.tsx    ← 3D planet animation (MODIFIED)
│   ├── MainScene.tsx        ← 3D canvas setup
│   ├── HtmlScroll.tsx       ← Scroll container
│   └── Navbar.tsx           ← Top navigation
├── app/
│   ├── page.tsx             ← Main page
│   ├── layout.tsx           ← Root layout
│   └── globals.css          ← Global styles (MODIFIED)
├── public/
│   └── sequences/           ← Image sequences for planet
├── copy-and-animation-guide.md    ← Original copywriting guide
├── IMPLEMENTATION-NOTES.md        ← Technical details
├── FRAME-GUIDE.md                 ← Visual frame breakdown
└── QUICK-START.md                 ← This file
```

## 🐛 Troubleshooting

### Issue: Animations not working
**Solution**: Check browser console for errors. Ensure framer-motion is installed:
```bash
npm install framer-motion
```

### Issue: Planet not moving
**Solution**: Check that image sequences are in `/public/sequences/` and manifest.json exists

### Issue: Text not visible
**Solution**: Check contrast against background. Adjust opacity or add text shadows

### Issue: Scroll feels janky
**Solution**: 
1. Reduce parallax speeds
2. Check browser performance
3. Disable animations on low-end devices

### Issue: Mobile layout broken
**Solution**: Test responsive breakpoints. Adjust padding and font sizes in Tailwind classes

## 🎓 Learning Resources

### Framer Motion (Animations)
- Docs: https://www.framer.com/motion/
- Parallax: https://www.framer.com/motion/scroll-animations/

### React Three Fiber (3D)
- Docs: https://docs.pmnd.rs/react-three-fiber/
- Drei helpers: https://github.com/pmndrs/drei

### Tailwind CSS (Styling)
- Docs: https://tailwindcss.com/docs

## 📝 Next Steps

1. **Content**: Replace placeholder text with final copy
2. **Links**: Update footer links to actual URLs
3. **Images**: Ensure all planet sequences are optimized
4. **Performance**: Add lazy loading for images
5. **Analytics**: Add tracking for button clicks
6. **SEO**: Add meta tags and descriptions
7. **Testing**: Cross-browser testing (Chrome, Firefox, Safari)
8. **Deployment**: Build and deploy to production

## 🚢 Building for Production

```bash
npm run build
npm start
```

## 💡 Tips

- Use Chrome DevTools to debug animations (Performance tab)
- Test on actual mobile devices, not just browser resize
- Check accessibility with screen readers
- Monitor bundle size (image sequences can be large)
- Consider adding loading states for better UX

## 📞 Need Help?

Refer to:
- `IMPLEMENTATION-NOTES.md` for technical details
- `FRAME-GUIDE.md` for visual breakdown
- `copy-and-animation-guide.md` for original specifications

---

**Happy coding! 🎉**
