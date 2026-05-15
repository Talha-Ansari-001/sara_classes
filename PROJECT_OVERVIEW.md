# Project Overview: Sara Classes Website (Modern Heritage Edition)

## 📝 Project Mission
Sara Classes is a premium educational institution located in Bhiwandi, Maharashtra. This project delivers a high-performance, visually stunning single-page application (SPA) that reflects the **"Modern Heritage"** brand identity—blending traditional educational values with cutting-edge technology and luxury aesthetics.

---

## 🎨 Design System: "Modern Heritage"
The website uses a bespoke design system generated and audited by the **UI/UX Pro Max** design intelligence.

### 1. Visual Identity
- **Theme:** Premium Dark Mode (Warmer Charcoal-Black: `#1C1917`)
- **Accent:** Heritage Gold (`#A16207`) - Optimized for WCAG 3:1 accessibility.
- **Surface Style:** "Liquid Glass" (Backdrop-blur + subtle border-trace + 5% white overlays).
- **Aesthetic Mood:** Cinematic, authoritative, tactile, and luxurious.

### 2. Typography
- **Headings:** *Playfair Display* (Weight: 900/Black) - Used for an editorial, high-contrast look with tight tracking (`tracking-tighter`).
- **Body & Italic:** *Playfair Display* (Weight: 400/700) - Used for storytelling and philosophical quotes.
- **Functional UI & Labels:** *JetBrains Mono* - Used in all-caps with wide tracking (`tracking-[0.2em]`) for precision and a modern technical feel.

---

## 🏗️ Technical Architecture

### Core Stack
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Custom Modern Heritage configuration)
- **Animations:** Framer Motion (Physics-based springs, SVG morphing, Scroll-linked animations)
- **Smooth Scrolling:** Lenis Scroll (Silky-smooth vertical momentum with 1.2s duration)
- **Icons:** Lucide React (Consistently styled vector icons)

### Performance & UX
- **GPU-Accelerated Animations:** Focused on `transform` and `opacity` to maintain 60fps.
- **Responsive Fluidity:** Adaptive layouts from mobile (375px) to ultra-wide (1440px+).
- **Magnetic Interactivity:** Reusable Higher-Order Component (HOC) for tactile element pull on buttons and cards.
- **Scroll Tracking:** Global gold-to-transparent progress bar ("The Golden Thread") fixed at the viewport top.

---

## 🚀 Premium Features & Components

### 1. Cinematic Hero Section
- **Morphing Gradients:** Two massive, slow-moving ambient gold glows that move independently.
- **Texture Overlay:** Carbon-fiber grain overlay for perceived depth.
- **Dynamic Headlines:** "Flip Words" animation using custom spring physics (`stiffness: 100`, `damping: 30`).

### 2. Academic Bento Grid
- **Liquid Glass Aesthetic:** Cards feature backdrop blurs and subtle gold "bleeds" on hover.
- **Success Cards:** Interactive student achievement cards (e.g., Aryan Sheikh - 98.4%) with mouse-tracking radial masks (Evervault effect).
- **Diverse Programs:** Covers K-10 Education, Junior College (11th-12th Science/Arts/Commerce), Graduation (B.Com, BMS, BA, B.Sc), and Teacher Training (B.Ed, D.Ed, B.Sc IT).

### 3. The Journey Roadmap
- **Vertical Timeline:** A scroll-linked "Golden Thread" that connects academic milestones.
- **Phased Progress:** Visualizes the student journey from *Foundational Excellence* to *Competitive Edge* and *Professional Launch*.
- **Interactive Nodes:** Center-aligned icons that scale and glow as they enter the viewport.

### 4. Expert Mentorship (Faculty Gallery)
- **Horizontal Scroll Gallery:** A "Slide to explore" interface with a custom scroll progress indicator.
- **Editorial Portraits:** Faculty images (including Miss Sara) transition from Black & White to color on hover.
- **Liquid Glass Containers:** Deep cards with border-trace effects and brand-aligned typography.

### 5. Entrance Excellence Batches
- **Evervault Interaction:** Mouse-tracking glow effects for NEET, IIT-JEE, and MHT CET cards.
- **Themed Color Systems:** 
  - **MHT CET:** Indigo theme for State Level Entrance.
  - **NEET:** Emerald theme for Medical Excellence.
  - **IIT-JEE:** Sky theme for Premier Engineering.
- **Conversion Focus:** "Admissions Open 2026-27" badges and direct scheduling CTAs.

### 6. Philosophy & Storytelling
- **Parallax Digits:** Massive background numbers that move at a different speed than the text.
- **Editorial Layout:** High-contrast serif typography for brand storytelling and philosophical grounding.

### 7. Conversion-Optimized Contact & Footer
- **Floating Inputs:** Form fields with bottom-border-only focus animations.
- **WhatsApp Integration:** Direct lead-gen link via a floating call/message widget.
- **Rich Footer:** Multi-column layout with quick navigation, office hours, and social connectivity.

---

## 📍 Business Operations
- **Institution:** Sara Classes Bhiwandi
- **Leadership:** Miss Sara (Founder & Academic Head)
- **Core Faculty:** Prof. Rajesh Mehta (Science), Dr. Ananya Shah (Mathematics), Prof. Vikram Singh (Commerce), Ms. Neha Kulkarni (Foundational).
- **Contact:** +91 86002 72278
- **Address:** Shop No. 14, R.N. Arcade, H. No. 1146, Next to Arif Garden, Nashik Road, Bhiwandi 421302.
- **Office Hours:** Mon - Sat (10:00 AM - 08:00 PM), Sundays reserved for Special Batches.

---

## 🛠️ Development Workflow
- **Linting:** Strict ESLint and TypeScript configuration for zero runtime errors.
- **Asset Management:** Optimized SVG icons and remote editorial imagery from Unsplash.
- **Audit Tooling:** Powered by **UI/UX Pro Max** for continuous design quality control.
