import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "SaaS Dashboard",
    frontend: ["Vue 3", "Pinia", "TypeScript", "Tailwind",],
    backend: ["Node", "Express", "Postgres", "Docker"],
    features: ["Auth-JWT", "CRUD"],
    linkDemo: "https://saas-dashboard.ozerkozay.dev/",
    linkSource: "https://github.com/Vegastrikes/saas_dashboard",
    info: [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    ]
  },
];