// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Jaimin Suthar | Tech Lead & Full-Stack Developer | C# .NET Core Microservices Angular",
  description: "Technical Lead & Full-Stack Developer with 11+ years of experience. Expert in ASP.NET Core, Microservices, Angular, React, Node.js, C#, AWS, Docker, and DevOps. Discover Jaimin's portfolio, interactive projects, and try the AI Recruiter Co-pilot.",
  keywords: [
    "Jaimin Suthar",
    "Tech Lead Portfolio",
    "Full-Stack Developer Vadodara",
    "C# Developer",
    "ASP.NET Core Web API",
    "Microservices Architect",
    "Angular Expert",
    "React Developer",
    "Node.js Fullstack",
    "Cygnet One Tech Lead",
    "Hire DotNet Core Developer",
    "Docker AWS DevOps Engineer",
    "Rockers Technologies Team Lead"
  ],
  authors: [{ name: "Jaimin Suthar", url: "https://jaimindeveloper.github.io/" }],
  creator: "Jaimin Suthar",
  openGraph: {
    title: "Jaimin Suthar | Tech Lead & Full-Stack Developer",
    description: "11+ Years of technical leadership and full-stack execution. Specializing in highly scalable .NET Core backend systems, microservices, AWS, Angular, and React frontends.",
    url: "https://jaimindeveloper.github.io/",
    siteName: "Jaimin Suthar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaimin Suthar | Tech Lead & Full-Stack Developer",
    description: "Enterprise software architect and lead fullstack developer. View projects, architecture designs, and interact with the recruitment co-pilot.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050811",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
