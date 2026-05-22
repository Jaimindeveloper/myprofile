// components/Projects.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Sparkles, Shield, ShoppingCart, HelpCircle } from "lucide-react";
import styles from "./Projects.module.css";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  detailedDesc: string;
  tech: string[];
  github?: string;
  demo?: string;
  icon: React.ReactNode;
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      id: "dotnet-microservices",
      title: "Enterprise .NET Microservices",
      category: "Backend Architecture",
      desc: "High-performance .NET Core distributed system with scalable API endpoints and secure authentication.",
      detailedDesc: "Designed and implemented a scalable, robust backend architecture using ASP.NET Core Web API, Entity Framework Core, and SQL Server. Features include JWT authentication, CQRS patterns, robust dependency injection, and comprehensive unit testing.",
      tech: ["C#", ".NET Core", "SQL Server", "Microservices", "REST API", "Entity Framework"],
      icon: <Code className={styles.iconPurple} size={24} />,
    },
    {
      id: "modelia",
      title: "Modelia AI Studio",
      category: "Generative AI",
      desc: "An AI Studio application designed to orchestrate prompting models, built with a robust TypeScript interface.",
      detailedDesc: "Modelia AI Studio is a technical workbench that helps developers orchestrate LLMs, manage prompt contexts, and integrate custom microservice APIs. Designed with modular TypeScript, it offers a clean interface for rapid AI prototyping.",
      tech: ["TypeScript", "Next.js", "Generative AI", "Node.js", "CSS Modules"],
      github: "https://github.com/Jaimindeveloper/modelia-ai-studio",
      icon: <Sparkles className={styles.iconCyan} size={24} />,
    },
    {
      id: "p2p-lending",
      title: "P2P Lending / Crowdfunding Platform",
      category: "Fintech Product",
      desc: "Peer-to-peer crowdfunding & loan management software with separate modules for borrowers and investors.",
      detailedDesc: "A complete Peer-to-Peer (P2P) lending engine built with ASP.NET Core microservices, employing Entity Framework Core for data access, SQL Server for storage, and React frontends for a responsive UI.",
      tech: ["C#", ".NET Core", "Entity Framework", "SQL Server", "React", "Azure"],
      demo: "https://www.lending-software.com",
      icon: <Shield className={styles.iconPink} size={24} />,
    },
    {
      id: "sliding-form",
      title: "Sliding Enquiry Form",
      category: "WordPress Plugin",
      desc: "A highly-customizable enquiry popup plugin utilizing CSS3 3D slide animations and active positioning.",
      detailedDesc: "Sliding Enquiry Form is an open-source, highly-customizable WordPress plugin with over thousands of downloads. It enables fixed-position sliding contact panels (footer left, footer right, page sides) leveraging hardware-accelerated CSS3 3D transitions.",
      tech: ["WordPress", "PHP", "CSS3 3D Effects", "JavaScript", "jQuery"],
      github: "https://github.com/Jaimindeveloper/sliding-enquiry-form",
      demo: "https://wordpress.org/plugins/sliding-enquiry-form/",
      icon: <HelpCircle className={styles.iconPurple} size={24} />,
    },
  ];

  return (
    <section id="projects" className={styles.projSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Technical <span className="gradient-cyan-purple">Production Releases</span>
          </h2>
          <p className={styles.sectionDesc}>
            A showcase of core production applications and open-source packages I have designed, optimized, and delivered.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              className={styles.projCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.category}>{proj.category}</span>
                <div className={styles.iconBox}>{proj.icon}</div>
              </div>

              <h3 className={styles.projTitle}>{proj.title}</h3>
              <p className={styles.projDesc}>{proj.desc}</p>
              
              <div className={styles.detailedBox}>
                <p className={styles.detailedDesc}>{proj.detailedDesc}</p>
              </div>

              {/* Tech Tags */}
              <div className={styles.techList}>
                {proj.tech.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className={styles.cardActions}>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                    title="View GitHub Repository"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.demoBtn}`}
                    title="Visit Live Deployment"
                  >
                    <ExternalLink size={16} />
                    <span>Demo Link</span>
                  </a>
                )}
                {!proj.github && !proj.demo && (
                  <span className={styles.corpLabel}>
                    <Code size={14} /> Proprietary Codebase
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
