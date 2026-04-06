# Dynamic Human Capital — Website

Modern Next.js 14 website for Dynamic Human Capital (DHC), a Singapore-based recruitment agency and part of the Elitez Group.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
dhc-website/
├── app/
│   ├── globals.css       # Global styles + Tailwind
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Full-screen hero with animations
│   ├── Jobs.tsx          # Job platforms + stats counter
│   ├── Services.tsx      # 6 services with flip cards
│   ├── WhyDHC.tsx        # Trust signals + client logos
│   ├── Contact.tsx       # Enquiry form + contact details
│   └── Footer.tsx        # Footer with links
├── public/
│   └── images/           # Logo and static assets
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Sections

1. **Hero** — Animated headline, dual CTAs, floating geometric shapes
2. **Jobs** — MCF & JobStreet cards, animated counters (500+ roles, 200+ clients, 12+ years)
3. **Services** — 6 flip-card services grid
4. **Why DHC** — Pillars, differentiators, trusted brands
5. **Contact** — Enquiry form, address, phone, email, map placeholder
6. **Footer** — Links, social, MOM license, copyright

## Deployment

Deploy to [Vercel](https://vercel.com) by connecting the GitHub repository. No additional configuration needed.
