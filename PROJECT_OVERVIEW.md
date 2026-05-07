# Project Overview: Sara Classes Website

## 📝 Project Mission
Sara Classes is a premium educational institution located in Bhiwandi, Maharashtra. This project delivers a high-performance, visually stunning single-page application (SPA) that reflects the "Modern Heritage" brand identity—blending traditional educational values with cutting-edge technology and aesthetics.

## 🛠️ Tech Stack & Architecture

### Core Technologies
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scrolling:** Lenis Scroll
- **Icons:** Lucide React

### Design System
- **Theme:** Dark Mode by default (`#050505`)
- **Accent Color:** Modern Heritage Gold (`#EAB308`)
- **Typography:** 
  - Serif: *Playfair Display* (for headings and luxury feel)
  - Mono: *JetBrains Mono* (for technical/modern labels)

---

## 🏗️ Codebase Structure

### `/src/components` (The UI Library)
- **`Navbar.tsx`:** Floating navigation with active section highlighting using an `IntersectionObserver`.
- **`Hero.tsx`:** First impression section with a cinematic atmosphere and magnetic CTAs.
- **`BentoAcademic.tsx`:** An asymmetric "Bento Grid" showcasing programs from Jr.KG to Graduation.
- **`Philosophy.tsx`:** Brand storytelling section using parallax and cinematic text reveals.
- **`EntranceBatches.tsx`:** High-end "Evervault" glowing cards for specialized coaching (NEET, JEE, CET).
- **`ContactSection.tsx`:** Integrated lead generation form that directs inquiries to WhatsApp.
- **`Footer.tsx`:** Synchronized quick links with staggered reveal animations and smooth-scroll compatibility.
- **`BackToTop.tsx`:** Smart floating button that appears after scrolling past the Hero section.
- **`Magnetic.tsx`:** A reusable higher-order component for adding physical magnetic pull to buttons.
- **`SuccessMarquee.tsx`:** Infinite scrolling marquee displaying institutional achievements.

### `/src/hooks` & `/src/utils`
- **`useReveal.ts`:** Custom hook for managing scroll-triggered reveal animations.
- **`cn.ts`:** Tailwind class merging utility (using `clsx` and `tailwind-merge`).

---

## 🚀 Key Features

### 1. Premium Interactivity
- **Magnetic Buttons:** Elements that "pull" toward the cursor for a tactile feel.
- **Evervault Glow:** Dynamic radial gradients that follow the mouse on coaching cards.
- **Smooth Navigation:** Lenis integration provides a silky-smooth scrolling experience across all sections.

### 2. Strategic Lead Generation
- **WhatsApp Integration:** The contact form pre-fills messages for Miss Sara, reducing friction for potential students.
- **Floating Call CTA:** A persistent mobile-only call button for immediate enrollment inquiries.

### 3. Performance & SEO
- **Staggered Loading:** Components use `whileInView` animations to ensure the page feels "alive" as the user explores.
- **Responsive Design:** Fully optimized from mobile (thumb-friendly targets) to ultra-wide displays.

---

## 📍 Local Business Details
- **Head:** Miss Sara
- **Contact:** +91 86002 72278
- **Location:** Shop No. 14, R.N. Arcade, Bhiwandi, Maharashtra 421302.

---

## 🛠️ Development & Deployment
- **Push Workflow:** Git-enabled with a main branch synced to GitHub.
- **Build Command:** `npm run build` generates a production-ready `dist` folder.
- **Linting:** Configured with ESLint and TypeScript for strict code quality.
