// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Cpu, FileText } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, "hero")}>
          <span className={styles.logoSymbol}>J</span>
          <span className={styles.logoText}>
            aimin<span className={styles.accent}>.Suthar</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className={styles.desktopLinks}>
          <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className={styles.link}>Home</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, "experience")} className={styles.link}>Experience</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className={styles.link}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className={styles.link}>Projects</a>
          <a href="#ai-copilot" onClick={(e) => handleNavClick(e, "ai-copilot")} className={`${styles.link} ${styles.aiLink}`}>
            <Cpu size={14} className={styles.aiIcon} /> AI Co-Pilot
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className={styles.link}>Contact</a>
        </div>

        <div className={styles.actions}>
          <a 
            href="https://drive.google.com/file/d/1kfqHLaZgpZZVLk9BEZLiIYgbBWHuYIia/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.resumeBtn}
            title="Download Jaimin's Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>
          
          <button 
            onClick={(e) => {
              const el = document.getElementById("ai-copilot");
              if (el) {
                const offset = 80;
                window.scrollTo({
                  top: el.getBoundingClientRect().top + window.scrollY - offset,
                  behavior: "smooth",
                });
              }
            }}
            className={styles.ctaBtn}
          >
            <Cpu size={16} />
            <span>Consult AI</span>
          </button>

          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className={styles.mobileLink}>Home</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, "experience")} className={styles.mobileLink}>Experience</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className={styles.mobileLink}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className={styles.mobileLink}>Projects</a>
          <a href="#ai-copilot" onClick={(e) => handleNavClick(e, "ai-copilot")} className={`${styles.mobileLink} ${styles.mobileAiLink}`}>
            <Cpu size={16} /> AI Co-Pilot & Reviewer
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className={styles.mobileLink}>Contact</a>
          <div className={styles.mobileActions}>
            <a 
              href="https://drive.google.com/file/d/1kfqHLaZgpZZVLk9BEZLiIYgbBWHuYIia/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mobileResumeBtn}
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
