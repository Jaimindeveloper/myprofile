// app/page.tsx
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AICopilot from "@/components/AICopilot";
import Contact from "@/components/Contact";
import { Cpu, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Sticky Header Nav */}
      <Navbar />

      <main style={{ minHeight: "100vh", position: "relative" }}>
        {/* Hero Banner Section */}
        <Hero />

        {/* Core Stats Bento Block */}
        <Stats />

        {/* Interactive Expandable Timelines */}
        <Experience />

        {/* Dynamic Category Tech Skills Tab Board */}
        <Skills />

        {/* Visual Bento Projects Releases */}
        <Projects />

        {/* Virtual Recruiter & SOLID Code Reviewer Console */}
        <AICopilot />

        {/* Bento Contact Grid & Inquiry Panel */}
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          padding: "40px 24px",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Logo Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "6px",
                background: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#fff",
                fontSize: "15px",
                boxShadow: "0 0 10px rgba(139, 92, 246, 0.3)",
              }}
            >
              J
            </div>
            <span
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "-0.02em",
              }}
            >
              Jaimin<span style={{ color: "#06B6D4" }}>.Suthar</span>
            </span>
          </div>

          <p
            style={{
              fontSize: "13px",
              color: "rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              maxWidth: "420px",
              lineHeight: 1.5,
            }}
          >
            Technical Lead &amp; Full-Stack Developer with 11+ years of
            delivery. Specializing in secure, highly scalable microservices,
            backend nodes, and rich web frontends.
          </p>

          {/* Social Icon links */}
          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="https://github.com/Jaimindeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: "rgba(0, 0, 0, 0.4)", transition: "color 0.3s" }}
              onMouseOver={(e) => { e.currentTarget.style.color = "#000"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "rgba(0, 0, 0, 0.4)"; }}
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaimin-suthar12/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "rgba(0, 0, 0, 0.4)", transition: "color 0.3s" }}
              onMouseOver={(e) => { e.currentTarget.style.color = "#06B6D4"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "rgba(0, 0, 0, 0.4)"; }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:jaimin.suthar12@gmail.com"
              aria-label="Email"
              style={{ color: "rgba(0, 0, 0, 0.4)", transition: "color 0.3s" }}
              onMouseOver={(e) => { e.currentTarget.style.color = "#8B5CF6"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "rgba(0, 0, 0, 0.4)"; }}
            >
              <Mail size={18} />
            </a>
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              borderTop: "1px solid rgba(0, 0, 0, 0.05)",
              paddingTop: "20px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <span>© {new Date().getFullYear()} Jaimin Suthar. All Rights Reserved.</span>
            <span>•</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
              <Cpu size={12} /> AI-Optimized Portfolio
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
