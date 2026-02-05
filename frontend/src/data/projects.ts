import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "This Site",
    frontend: ["Vue 3", "Pinia", "TypeScript", "Tailwind",],
    backend: ["Docker"],
    features: ["Responsive Design", "Mobile Friendly", "Themes"],
    linkDemo: "",
    linkSource: "https://github.com/Vegastrikes/personal-site",
    info: [
        "This site is my personal hub and a living template I can reuse for future projects. I built it to be fast to iterate on, easy to maintain, and clean to extend. It’s designed around reusable components, a consistent layout system, and a theme setup that keeps the UI cohesive while still being flexible.",
        "I’m sharing the source because this setup is also a solid baseline for anyone who wants a modern frontend without overengineering. Fork it, adjust the content, and you’ve got a starter that’s easy to host and maintain.",
    ]
  },
  {
    title: "Template Site Engineering Firm",
    frontend: ["HTML", "Tailwind",],
    backend: ["PHP"],
    features: ["Responsive Design", "Mobile Friendly", "Multiple Language Support", "Server Side Rendering - SSR", "Fast Response", "SEO Friendly"],
    linkDemo: "https://template-site.ozerkozay.dev/",
    linkSource: "https://github.com/Vegastrikes/template-site",
    info: [
      "This project started as a standard multi-page corporate website for an engineering firm. The website doesn’t need a heavy frontend framework. It needs to load quickly, rank well, and present information clearly across devices. That’s why this template uses server-side rendered PHP pages with Tailwind: minimal runtime overhead, predictable performance, and a simple content structure that search engines can crawl cleanly.",
      "I later refactored the project into a template so it can be reused for similar corporate sites (products or services catalogs, nested pages, contact flows, and language switching). If you want a fast, SEO-friendly baseline that you can customize by swapping content, branding, and page sections, this repo is meant to be forked and adapted."
    ]
  },
  {
    title: "SaaS Dashboard",
    frontend: ["Vue 3", "Pinia", "TypeScript", "Tailwind",],
    backend: ["Node", "Express", "Postgres", "Docker"],
    features: ["Responsive Design", "Mobile Friendly", "Auth", "JWT", "CRUD", "Route Guards"],
    linkDemo: "https://saas-dashboard.ozerkozay.dev/",
    linkSource: "https://github.com/Vegastrikes/saas_dashboard",
    info: [
      "I made this SaaS dashboard as a recent hands-on refresher while I wasn’t actively working in a software position. It covers the essentials and it’s deployed so it can be reviewed as a working product, not a bullet point.",
      "The goal here is simple: demonstrate real implementation skills and modern tooling instead of relying on keywords."
    ]
  },
];