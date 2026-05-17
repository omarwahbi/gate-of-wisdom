import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gate of Wisdom Consulting Engineers",
    short_name: "Gate of Wisdom",
    description:
      "Iraqi consulting firm specializing in feasibility studies, market research, project management, and business intelligence.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c49a6c",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}