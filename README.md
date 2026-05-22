# Jaimin Suthar — AI-Powered Technical Lead Portfolio

An AI-optimized, high-performance, and pixel-perfect personal portfolio website custom-tailored for **Jaimin Suthar**, a Full-Stack Technical Lead and Software Architect with 11+ years of experience.

The design is heavily inspired by modern card-based **Dribbble grid designs** featuring deep dark HSL colors, responsive glassmorphism, glowing micro-animations, and dynamic physics-based interactions powered by **Framer Motion** and **Next.js (App Router)**.

---

## 🌟 Primary Features Built

### 1. Dribbble-Style Bento Grid
* **Sticky Glass Navbar**: Sleek visual header with micro-interactive states, contact actions, and mobile drawer interfaces.
* **Modern Intro & SVG Dashboard**: Rich typography, floating bento tags, quick actions, and an interactive multi-orbit SVG visual dashboard simulating an active shell loadout.
* **Core Metrics Bento Block**: Highlight sections displaying 11+ Yrs Experience, Agile Team Leadership, Cygnet.one Enterprise Delivery, and 15+ Pinned Repositories.
* **Chronological Career timeline**: Interactive vertical roadmap that lets recruiters expand individual job cards to read about specific team sizes, microservices optimizations, and cloud scaling.
* **Categorized Skills Dashboard**: Category tabs (Backend, Frontend, Databases, DevOps, Integrations) with clean sliding selection indicators and skill rating stars.
* **Visual Projects Grid**: Beautiful card alignments mapping *Modelia AI Studio*, *P2P Lending Platform*, *Kapdaclick E-commerce*, and *Sliding Enquiry Form*.

### 2. High-Tech Gemini AI Recruiter Co-Pilot
A conversational AI assistant dashboard (`AICopilot.tsx`) loaded with two specialized developer utilities:
* **Mode A — Recruitment Advisor**: A chat console pre-seeded with a comprehensive system prompt detailing your career, projects, and resume download. Answers prospective client questions instantly.
* **Mode B — Tech Lead SOLID Code Reviewer**: An active editor console where users paste methods, SQL queries, or components. Calls Jaimin's virtual AI Tech Lead (via Gemini) to evaluate code compliance, calculate an architectural score (1-100), list pros and cons, write a rigorous critique, and provide a fully refactored optimal code block!
* **Offline Fallbacks**: Includes a robust local fallback system inside `app/api/chat/route.ts` that handles chatbot conversations and code reviews gracefully if no API key is present.

### 3. SEO & Indexation Architecture
* **Sitemap Config (`app/sitemap.ts`)**: Next.js automatically outputs a weekly-updating `sitemap.xml` for indexers.
* **Crawler Directives (`app/robots.ts`)**: Dynamically outputs `robots.txt` allowing full indexing on landing components while securing backend endpoints.
* **Rich Metadata (`app/layout.tsx`)**: Fully mapped open-graph schemas, keywords, and description tags optimized for search terms (C#, .NET Core, Microservices, Angular, React, DevOps).

---

## 🛠️ File Structure Mapped

```
d:\PROJECT\myprofile/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts         # Gemini AI Route & Local Fallback
│   ├── global.css               # Core Stylesheet & Design Tokens
│   ├── layout.tsx               # Root Layout with High SEO Metadata
│   ├── robots.ts                # Crawler Directives (robots.txt)
│   ├── sitemap.ts               # Sitemap generator (sitemap.xml)
│   └── page.tsx                 # Main Page Grid Assembler
├── components/
│   ├── AICopilot.tsx            # AI Recruiter & SOLID Reviewer UI
│   ├── AICopilot.module.css     
│   ├── Contact.tsx              # Contact Form & Details
│   ├── Contact.module.css       
│   ├── Experience.tsx           # Careers timeline
│   ├── Experience.module.css    
│   ├── Hero.tsx                 # Header Banner & SVG Orbits
│   ├── Hero.module.css          
│   ├── Navbar.tsx               # Sticky Glass Navigation
│   ├── Navbar.module.css        
│   ├── Projects.tsx             # Bento Projects Showcase
│   ├── Projects.module.css      
│   ├── Skills.tsx               # Categorized Tech Skills Board
│   ├── Skills.module.css        
│   ├── Stats.tsx                # Bento Metric Cards
│   └── Stats.module.css         
├── .env.local                   # Local Environment Variables (Key Added!)
├── .gitignore                   # Excludes node_modules, envs, builds
├── next-env.d.ts                # TypeScript Environment Reference
├── next.config.js               # Next.js Settings
├── package.json                 # Project Settings & Dependencies
└── tsconfig.json                # TypeScript Settings
```

---

## 🚀 Quick Start Guide

### 1. Local Setup & Execution
Install dependencies and run the Next.js development server locally:
```bash
# Install dependencies
npm install

# Start local server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the portfolio!

### 2. Customizing Variables
* **API Key**: Your `GEMINI_API_KEY` is already added in `.env.local` for local execution.
* **Resume Link**: The Google Drive resume link is linked inside components. You can swap it in `Navbar.tsx`, `AICopilot.tsx`, and `Contact.tsx` if you compile new copies.
* **Email**: Tied to `jaimin.suthar12@gmail.com`. You can update it in `Navbar.tsx`, `Hero.tsx`, `Contact.tsx`, and `app/page.tsx`.

### 3. Deploying to Vercel
1. Create a public or private repository on GitHub and commit your workspace files.
2. Log in to your [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Under **Environment Variables**, add:
   * **Key**: `GEMINI_API_KEY`
   * **Value**: `AIzaSyAPGjMMdeEkCKgIJI_zE0lON48TFM1c0FQ` *(Already configured!)*
5. Click **Deploy**. Vercel will build and serve your AI-Powered Technical Lead Portfolio immediately with HTTPS, global Edge routing, and absolute speed metrics!
