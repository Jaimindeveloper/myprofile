// components/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Shield, Terminal, Zap, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Background Neon Glows */}
      <div className={styles.glowPurple}></div>
      <div className={styles.glowCyan}></div>

      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* AI Active Pill */}
          <motion.div className={styles.badge} variants={itemVariants}>
            <span className={styles.badgePulse}></span>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span className={styles.badgeText}>AI-Powered Agent Co-Pilot Live</span>
          </motion.div>

          <motion.h1 className={styles.title} variants={itemVariants}>
            Architecting Scalable <br />
            <span className="gradient-cyan-purple">Enterprise Solutions</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            I am <strong className={styles.highlight}>Jaimin Suthar</strong>, a <span className={styles.role}>Technical Lead & Full-Stack Developer</span> with <strong>11+ years of experience</strong>. I specialize in the Microsoft .NET ecosystem, designing secure Microservices, cloud architectures on AWS, and implementing fluid responsive interfaces with Angular and React.
          </motion.p>

          {/* Quick Tags Bento */}
          <motion.div className={styles.techTags} variants={itemVariants}>
            <span className={styles.tag}><Terminal size={14} /> .NET Core & C#</span>
            <span className={styles.tag}><Zap size={14} /> Microservices</span>
            <span className={styles.tag}><ArrowUpRight size={14} /> Angular & React</span>
            <span className={styles.tag}><Shield size={14} /> Cloud & DevOps</span>
          </motion.div>

          {/* Call to Actions */}
          <motion.div className={styles.ctaGroup} variants={itemVariants}>
            <button 
              onClick={() => handleScrollTo("ai-copilot")} 
              className={styles.primaryCta}
            >
              <span>Consult Recruiter AI</span>
              <ArrowUpRight size={18} />
            </button>
            <button 
              onClick={() => handleScrollTo("projects")} 
              className={styles.secondaryCta}
            >
              <span>View Projects</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div className={styles.socials} variants={itemVariants}>
            <a href="https://github.com/Jaimindeveloper" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jaimin-suthar12/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jaimin.suthar12@gmail.com" className={styles.socialIcon} aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Architectural Dashboard Side */}
        <motion.div 
          className={styles.visualSide}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className={styles.archWrapper}>
            {/* Custom SVG Orbital Dashboard */}
            <div className={styles.orbitalBoard}>
              <svg viewBox="0 0 400 400" className={styles.svgOrbits}>
                {/* Outermost Orbit */}
                <circle cx="200" cy="200" r="170" className={styles.orbitLine} />
                {/* Mid Orbit */}
                <circle cx="200" cy="200" r="120" className={styles.orbitLine} />
                {/* Innermost Orbit */}
                <circle cx="200" cy="200" r="70" className={styles.orbitLine} />

                {/* Orbit Nodes */}
                <circle cx="200" cy="30" r="6" className={`${styles.orbitNode} ${styles.purpleNode}`} />
                <circle cx="80" cy="200" r="6" className={`${styles.orbitNode} ${styles.cyanNode}`} />
                <circle cx="200" cy="320" r="6" className={`${styles.orbitNode} ${styles.pinkNode}`} />
                <circle cx="290" cy="110" r="6" className={`${styles.orbitNode} ${styles.cyanNode}`} />
              </svg>

              {/* Core Terminal Dashboard */}
              <div className={styles.coreCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardDotRed}></div>
                  <div className={styles.cardDotYellow}></div>
                  <div className={styles.cardDotGreen}></div>
                  <span className={styles.cardTitle}>tech_lead_agent.sh</span>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.codeLine}><span className={styles.codeBlue}>$</span> npm run load-jaimin</p>
                  <p className={styles.codeOutput}>&gt; Resolving dependencies...</p>
                  <p className={styles.codeOutput}>&gt; [OK] C# / .NET Core 8 initialized</p>
                  <p className={styles.codeOutput}>&gt; [OK] Angular 16 micro-frontend active</p>
                  <p className={styles.codeOutput}>&gt; [OK] Docker / AWS cluster connected</p>
                  <p className={styles.codeSuccess}>&gt; Jaimin.Suthar status: READY_FOR_HIRE</p>
                  <div className={styles.techStackLog}>
                    <div className={styles.stackItem}>C#</div>
                    <div className={styles.stackItem}>Angular</div>
                    <div className={styles.stackItem}>Docker</div>
                    <div className={styles.stackItem}>AWS</div>
                  </div>
                </div>
              </div>

              {/* Decorative floating stats */}
              <div className={`${styles.floatingBadge} ${styles.badgeLeft}`}>
                <span className={styles.floatNum}>11+</span>
                <span className={styles.floatText}>Years Exp</span>
              </div>
              
              <div className={`${styles.floatingBadge} ${styles.badgeRight}`}>
                <span className={styles.floatNum}>Cygnet</span>
                <span className={styles.floatText}>Tech Lead</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
