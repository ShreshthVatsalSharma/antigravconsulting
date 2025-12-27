# AntiGrav Consulting Website - File Structure & Summary

## Project Overview
- **Status**: Frontend Prototype (Mockup Mode)
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion

---

## Directory Structure

```
client/src/
├── App.tsx                          # Main router (7 routes)
├── main.tsx                         # Entry point
├── index.css                        # Global styles + design tokens
│
├── pages/                           # Page components
│   ├── Home.tsx                     # Homepage (hero + services + founders)
│   ├── Services.tsx                 # Services details (5 services)
│   ├── About.tsx                    # About company + founder profiles with images
│   ├── Contact.tsx                  # Contact form + contact info
│   ├── PrivacyPolicy.tsx            # Privacy policy page
│   ├── TermsOfService.tsx           # Terms of service page
│   ├── Legal.tsx                    # Legal notice page
│   └── not-found.tsx                # 404 page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx               # Navigation (fixed, responsive)
│   │   └── Footer.tsx               # Footer (with legal links)
│   │
│   └── ui/                          # shadcn/ui components (50+)
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── form.tsx
│       ├── label.tsx
│       ├── toaster.tsx
│       └── ... (47 more UI components)
│
├── hooks/
│   ├── use-toast.ts                 # Toast notifications
│   └── use-mobile.tsx               # Mobile detection
│
└── lib/
    ├── queryClient.ts               # React Query setup
    └── utils.ts                     # clsx utility
```

---

## Routes Map

| Route | Page | File |
|-------|------|------|
| `/` | Home | `pages/Home.tsx` |
| `/services` | Services | `pages/Services.tsx` |
| `/about` | About | `pages/About.tsx` |
| `/contact` | Contact Form | `pages/Contact.tsx` |
| `/privacy-policy` | Privacy Policy | `pages/PrivacyPolicy.tsx` |
| `/terms-of-service` | Terms of Service | `pages/TermsOfService.tsx` |
| `/legal` | Legal Notice | `pages/Legal.tsx` |
| `*` | 404 Not Found | `pages/not-found.tsx` |

---

## Component Breakdown

### Navbar (`components/layout/Navbar.tsx`)
- Fixed sticky header with scroll detection
- Logo: "AntiGrav" (no dot)
- Desktop navigation (Home, Services, About, Contact)
- Mobile hamburger menu
- CTA button: "Schedule Consultation"

### Footer (`components/layout/Footer.tsx`)
- Dark charcoal background
- Company info
- Contact details:
  - Email: `info@antigravconsulting.com`
  - Location: `India (Ranchi / Delhi)`
- Links:
  - Company: About Us, Our Services, Contact
  - Legal: Privacy Policy, Terms of Service, Legal Notice
- Copyright year (auto-updates)

### Home Page (`pages/Home.tsx`)
**Sections**:
1. **Hero** - Value proposition, CTA buttons
2. **Core Capabilities** - 3 service highlights
3. **Why AntiGrav** - Checklist + founder profiles with images
4. **Final CTA** - Call to action section

**Images Used**:
- Hero background image (generated)
- Texture overlay (generated)
- Founder images (Shreshth & Tahir - imported)

### Services Page (`pages/Services.tsx`)
**5 Core Services**:
1. India Market Entry Strategy
2. Joint Venture & Partner Identification
3. Go-To-Market Strategy
4. Market & Sales Enablement
5. Founder & Leadership Advisory

Each service includes:
- Icon (Lucide)
- Description
- Bullet points
- Hover effects

### About Page (`pages/About.tsx`)
**Sections**:
1. Header - About statement
2. Mission - Company mission + values (4 cards)
3. Founders - Profiles with large images:
   - Shreshth Vatsal Sharma (IIT Jodhpur, IIM Ranchi)
   - Tahir Khan (IIM Ranchi)

### Contact Page (`pages/Contact.tsx`)
**Left Column**:
- Title: "Let's Discuss Your Expansion"
- Contact info cards:
  - Email: `info@antigravconsulting.com`
  - Location: `India (Ranchi / Delhi)`
- Next steps section

**Right Column**:
- Form with fields:
  - Name (2+ chars)
  - Email (valid format)
  - Company (2+ chars)
  - Message (10+ chars)
- Form validation with Zod
- Success toast on submission

### Legal Pages
- **Privacy Policy** (`pages/PrivacyPolicy.tsx`) - 7 sections
- **Terms of Service** (`pages/TermsOfService.tsx`) - 9 sections
- **Legal Notice** (`pages/Legal.tsx`) - 7 sections

---

## Design System

### Colors
- **Primary**: `#3C3E54` (Deep Charcoal Blue) - `220 30% 20%`
- **Secondary**: `#F0F4F8` (Light Blue-Grey) - `210 20% 96%`
- **Muted**: `#E8ECEF` (Soft Grey) - `210 10% 90%`
- **Accent**: `#EEF2F6` (Very Light Blue) - `215 25% 95%`
- **Text**: Dark charcoal / White

### Typography
- **Headings**: DM Sans (bold, semibold)
- **Body**: Inter (regular)

### Spacing
- Base radius: 4px
- Container max-width: 1280px

---

## Assets

### Generated Images
Located in `attached_assets/generated_images/`:
1. `minimalist_architectural_abstract_hero_for_consulting_firm.png` - Hero image
2. `subtle_network_texture_background.png` - Texture overlay

### Founder Images
Located in `attached_assets/`:
1. `WhatsApp_Image_2025-12-27_at_02.13.17_1766827467534.jpeg` - Tahir Khan
2. `Screenshot_2025-12-27_at_2.55.19_PM_1766827524874.png` - Shreshth Vatsal Sharma

---

## Key Features

✅ **Fully Responsive** - Mobile-first design
✅ **Animations** - Framer Motion entry/scroll animations
✅ **Form Validation** - Zod schema + React Hook Form
✅ **Toast Notifications** - Success/error feedback
✅ **Accessibility** - Semantic HTML, ARIA labels
✅ **SEO Ready** - Meta tags, proper heading hierarchy
✅ **Fast Loading** - Static React, optimized images
✅ **Professional Design** - Minimal, premium aesthetic

---

## Dependencies

**Core**:
- react@19.2.0
- react-dom@19.2.0
- wouter@3.3.5

**Styling**:
- tailwindcss@4.1.14
- framer-motion@12.23.24

**Forms & Validation**:
- react-hook-form@7.66.0
- zod@3.25.76
- @hookform/resolvers@3.10.0

**UI Components**:
- lucide-react@0.545.0
- @radix-ui/* (multiple)

**Build Tools**:
- vite@7.1.9
- typescript@5.6.3
- tailwindcss-animate@1.0.7

---

## Logo

**Current Logo**: "AntiGrav" (text-based)
- Font: DM Sans
- Weight: Bold
- Color: Primary (Deep Charcoal Blue)
- No dot or additional marks

This is used in:
- Navbar (top-left)
- Footer (top-left)
- Meta tags

---

## Where Consultation Requests Go

**Current Mode**: Frontend Mockup
- Form submissions logged to browser console
- Success toast shown to user

**Production Integration**: 
- Configure to send to: `info@antigravconsulting.com`
- Store in database (when backend is added)
- Send confirmation email to user

See `CONSULTATION_FLOW.md` for details.

---

## Deployment Status

✅ Live on Replit
✅ All 7 pages accessible
✅ Responsive on all devices
✅ All links functional
✅ Images loading correctly
✅ Forms validating correctly

---

**Last Updated**: December 27, 2025
**Version**: 1.0
**Status**: Production Ready (Frontend)
