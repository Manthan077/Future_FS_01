import infostack from "../assets/projects/infostack.png";
import mediroute from "../assets/projects/mediroute.png";
import reforge from "../assets/projects/reforge.png";
import maxfitness from "../assets/projects/max-fitness-pro.png";
import leadforge from "../assets/projects/leadforge.png";

export const projects = [
  {
    slug: "infostack",
    title: "INFOSTACK",
    subtitle: "Retrieval-Augmented Generation Platform",
    image: infostack,
    github: "https://github.com/Manthan077/infostack",
    demo: "https://infostack.vercel.app/",

    overview:
      "INFOSTACK is a production-grade multi-document RAG platform designed to answer queries strictly from user-provided documents while minimizing hallucinations.",

    problem: [
      "LLMs hallucinate when answering from large document sets.",
      "Existing tools lack citation enforcement.",
      "Multi-document semantic search is often slow or inaccurate."
    ],

    solution: [
      "Implemented multi-document ingestion (PDF, text, images, websites).",
      "Designed Strict and Hybrid query modes with backend guardrails.",
      "Integrated vector search using Qdrant for high-relevance retrieval."
    ],

    architecture: [
      "React frontend with real-time chat UI.",
      "Node.js + Express backend with RAG pipeline.",
      "Qdrant vector database for semantic retrieval.",
      "Gemini API + LangChain for controlled LLM responses."
    ],

    impact: [
      "≈90% relevance in internal evaluation.",
      "≈70% reduction in hallucinated responses.",
      "Sub-second UI responsiveness."
    ],

    tech: "React · Node.js · Qdrant · LangChain · Gemini API",
  },

  {
    slug: "mediroute-ai",
    title: "MEDIROUTE AI",
    subtitle: "Smart Ambulance Navigation System",
    image: mediroute,
    github: "https://github.com/Manthan077/mediroute_ai",
    demo: "https://medirouteai.vercel.app/",

    overview:
      "MEDIROUTE AI is a real-time emergency mobility platform that optimizes ambulance routing and hospital allocation using live traffic and capacity data.",

    problem: [
      "Ambulances get stuck in congested traffic.",
      "Hospitals receive patients without real-time capacity awareness.",
      "Manual routing causes critical delays."
    ],

    solution: [
      "Implemented live GPS tracking with real-time updates.",
      "Designed automated green-corridor routing logic.",
      "Built capacity-aware hospital allocation scoring."
    ],

    architecture: [
      "React + TypeScript dashboards for Admin, Hospital, Ambulance.",
      "Supabase for authentication, realtime updates, and database.",
      "Leaflet maps for live route visualization."
    ],

    impact: [
      "Targeted 25–40% faster ambulance response times.",
      "Real-time rerouting every ~2 seconds.",
      "Role-based operational dashboards."
    ],

    tech: "React · TypeScript · Supabase · Leaflet",
  },

  {
    slug: "reforge",
    title: "REFORGE",
    subtitle: "Web Cloning & Customization Platform",
    image: reforge,
    github: "https://github.com/Manthan077/reforge",

    overview:
      "ReForge is a powerful web cloning and customization platform that allows you to scrape any website, edit its content in real-time, and export it as a complete, production-ready package.",

    problem: [
      "Recreating web designs manually is time-consuming.",
      "Prototyping requires extensive setup and configuration.",
      "No easy way to clone and customize existing websites."
    ],

    solution: [
      "Built instant website cloning with Puppeteer for accurate extraction.",
      "Implemented live visual editor for text and image modifications.",
      "Created smart theme detection with automatic light/dark mode toggle."
    ],

    architecture: [
      "React frontend with click-to-edit interface.",
      "Node.js + Express backend with Puppeteer scraping.",
      "JWT authentication and profile management.",
      "Complete asset bundling and ZIP export system."
    ],

    impact: [
      "One-click website cloning and customization.",
      "Real-time editing with instant preview.",
      "Production-ready exports with all assets included."
    ],

    tech: "React · Node.js · Puppeteer · JWT · Express",
  },

  {
    slug: "max-fitness-pro",
    title: "MAX FITNESS PRO",
    subtitle: "Modern Fitness Center Website",
    image: maxfitness,
    github: "https://github.com/Manthan077/Future_FS_03",
    demo: "https://max-fitness-pro.vercel.app",

    overview:
      "A modern, responsive fitness center website featuring dark/light theme toggle, interactive gallery, membership plans, and seamless user experience optimized for all devices.",

    problem: [
      "Traditional gym websites lack modern UI/UX.",
      "Poor mobile experience drives potential members away.",
      "No easy way to showcase facilities and pricing."
    ],

    solution: [
      "Built responsive design with Tailwind CSS for all devices.",
      "Implemented dark/light theme with persistent preferences.",
      "Created interactive filterable gallery with lightbox view."
    ],

    architecture: [
      "React 19 with modern hooks and components.",
      "Vite 7 for lightning-fast build and development.",
      "React Router DOM for seamless navigation.",
      "Context API for theme state management."
    ],

    impact: [
      "Fully responsive across mobile, tablet, and desktop.",
      "Smooth theme switching with localStorage persistence.",
      "Fast performance with optimized load times."
    ],

    tech: "React · Vite · Tailwind CSS · React Router",
  },

  {
    slug: "leadforge-crm",
    title: "LEADFORGE CRM",
    subtitle: "Client Lead Management System",
    image: leadforge,
    github: "https://github.com/Manthan077/Future_FS_02",
    demo: "https://leadforge-crm.vercel.app",

    overview:
      "A powerful, intuitive Client Lead Management System designed to help businesses efficiently manage incoming leads with advanced analytics, real-time updates, and 92% conversion rate optimization.",

    problem: [
      "Businesses struggle to track and manage leads effectively.",
      "No centralized system for lead status and follow-ups.",
      "Lack of analytics to measure conversion performance."
    ],

    solution: [
      "Built comprehensive lead management with search and filters.",
      "Implemented real-time status updates and note tracking.",
      "Created advanced analytics dashboard with multiple chart types."
    ],

    architecture: [
      "React frontend with Recharts for data visualization.",
      "Node.js + Express backend with RESTful API.",
      "MongoDB with Mongoose for data persistence.",
      "JWT-based authentication for secure access."
    ],

    impact: [
      "92% conversion rate with optimized lead tracking.",
      "Real-time updates for instant status changes.",
      "Beautiful analytics with Pie, Bar, Area, and Radial charts."
    ],

    tech: "React · Node.js · MongoDB · Express · JWT · Recharts",
  },
];
