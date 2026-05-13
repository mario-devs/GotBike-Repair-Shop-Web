# Bike Repair Shop — Web Demo Implementation Plan

A premium black & white single-page website for a small bike repair shop, featuring fluid animations, a reservation form, and all sections a real shop would need.

---

## Technology Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Build tool** | **Vite 6** | Fastest dev server, zero-config, industry standard |
| **UI framework** | **React 19** | Most popular, huge ecosystem, easy to maintain |
| **Animations** | **Framer Motion 12** | Best React animation library, declarative API |
| **Routing** | None (single-page scroll) | Simplest approach for a small shop demo |
| **Styling** | **Vanilla CSS** with CSS custom properties | Full control, no dependencies, easy to tweak |
| **Fonts** | **Google Fonts — Inter + Syne** | Clean modern body + bold display headings |
| **Icons** | **Lucide React** | Lightweight, beautiful, MIT licensed |

> [!NOTE]
> No backend is needed for this demo. The reservation form will show a success animation on submit. A real backend (Node, Spring Boot, etc.) can be wired in later without changing the UI.

---

## Site Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Navbar** | Fixed top bar with logo + smooth-scroll nav links |
| 2 | **Hero** | Full-viewport intro with animated headline + CTA button |
| 3 | **Services** | Grid of repair services with icons, prices, and staggered reveal |
| 4 | **How It Works** | 3-step visual flow: Book → Drop off → Ride |
| 5 | **About Us** | Shop story, team photo area, values |
| 6 | **Testimonials** | Customer reviews in a horizontal auto-scroll carousel |
| 7 | **Book a Repair** | Reservation form (name, email, phone, bike type, issue, preferred date) |
| 8 | **Footer** | Address, hours, social links, copyright |

---

## Animations & Interactions

- **Page load**: Hero text slides up + fades in, staggered per line
- **Scroll reveals**: Every section fades + slides into view using Framer Motion `whileInView`
- **Service cards**: Scale up on hover, subtle shadow lift
- **How It Works**: Steps animate in sequence (stagger)
- **Testimonials**: Smooth horizontal auto-scroll carousel with drag
- **Form submit**: Button morphs into a checkmark with a success message
- **Navbar**: Background blurs/darkens on scroll
- **Smooth scrolling**: CSS `scroll-behavior: smooth` + anchor links

---

## Execution Phases

### Phase 1 — Project Setup
1. Initialize Vite + React project in `/Users/essie/Developer/bikeshopweb`
2. Install dependencies: `framer-motion`, `lucide-react`
3. Remove Vite boilerplate
4. **Verify**: `npm run dev` starts without errors

---

### Phase 2 — Design System & Global Styles
1. Set up CSS custom properties (black/white palette, spacing scale, typography)
2. Import Google Fonts (Inter + Syne)
3. Global reset + base styles
4. **Verify**: Dev server shows a blank styled page with correct fonts

#### Files
- **[MODIFY]** [index.html](file:///Users/essie/Developer/bikeshopweb/index.html) — SEO meta tags, font links
- **[MODIFY]** [src/index.css](file:///Users/essie/Developer/bikeshopweb/src/index.css) — Design tokens, reset, typography

---

### Phase 3 — Components (built & tested one by one)

Each component is created, visually tested in the browser, then we move on.

#### 3a — Navbar
- **[NEW]** `src/components/Navbar.jsx`
- **[NEW]** `src/components/Navbar.css`
- Fixed position, logo text, nav links, scroll-triggered background

#### 3b — Hero
- **[NEW]** `src/components/Hero.jsx`
- **[NEW]** `src/components/Hero.css`
- Full-height section, animated headline, subtext, CTA button

#### 3c — Services
- **[NEW]** `src/components/Services.jsx`
- **[NEW]** `src/components/Services.css`
- 3-column grid of service cards with icons, descriptions, prices

#### 3d — How It Works
- **[NEW]** `src/components/HowItWorks.jsx`
- **[NEW]** `src/components/HowItWorks.css`
- 3-step horizontal flow with numbered circles and connecting lines

#### 3e — About Us
- **[NEW]** `src/components/About.jsx`
- **[NEW]** `src/components/About.css`
- Two-column layout: text + image placeholder area

#### 3f — Testimonials
- **[NEW]** `src/components/Testimonials.jsx`
- **[NEW]** `src/components/Testimonials.css`
- Horizontal draggable carousel with customer quotes

#### 3g — Book a Repair (Reservation Form)
- **[NEW]** `src/components/BookRepair.jsx`
- **[NEW]** `src/components/BookRepair.css`
- Full form with validation, animated submit button, success state

#### 3h — Footer
- **[NEW]** `src/components/Footer.jsx`
- **[NEW]** `src/components/Footer.css`
- Contact info, opening hours, social icons, copyright

---

### Phase 4 — Page Assembly
- **[MODIFY]** `src/App.jsx` — Import and compose all sections in order
- **[MODIFY]** `src/App.css` — Page-level layout styles
- **Verify**: Full page scrolls through all sections with all animations working

---

### Phase 5 — Polish & Final Testing
1. Test all animations in browser
2. Test responsive design (mobile, tablet, desktop)
3. Fix any visual issues
4. Final screenshot / recording of the working demo
5. **Verify**: Everything renders correctly and all interactions work

---

## Verification Plan

### After Each Phase
- Run `npm run dev` and visually inspect in the browser
- Check the browser console for errors or warnings
- Confirm animations trigger correctly

### Final Verification
- Full page walkthrough recording
- Responsive check at 375px, 768px, and 1440px widths
- All form fields work and show validation
- All scroll animations trigger on first view
- No console errors

---

## Project Documentation

A `walkthrough.md` artifact will be updated after each phase documenting:
- What was built
- What was tested
- Screenshots/recordings of the result
