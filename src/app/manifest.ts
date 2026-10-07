import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BrassSmile: Independent Educational Resource",
    short_name: "BrassSmile",
    description: "Authoritative educational resource on smile care, oral biology, technology, and modern living.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F5",
    theme_color: "#0F172A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
