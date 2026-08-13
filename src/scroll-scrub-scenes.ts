import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "./components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#b5637a",
  background: "#1a0c10",
  ink: "#faf5f0",
  muted: "#9a7b72",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "scene-01",
    label: "Collection One",
    clip: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DYYteq9ay9ANYDPUaHvHjGjzxQ/34d8b147-3e53-4744-b22f-d85d43928796.mp4",
    poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DYYteq9ay9ANYDPUaHvHjGjzxQ/564b759d-89a0-4427-b483-91086de2a6d1.png",
    mobileClip: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DYYteq9ay9ANYDPUaHvHjGjzxQ/c939c92a-6967-4633-93cb-42af36653724.mp4",
    mobilePoster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3DYYteq9ay9ANYDPUaHvHjGjzxQ/06f095fc-6368-442d-9684-5bb89bde7b0f.png",
    kicker: "The Debut Collection",
    title: "Finally, Your Nude.",
    body: "Luxury lip essentials engineered for melanin-rich skin. Formulated clean, finished flawless.",
    scroll: 3,
    align: "left",
  },
];
