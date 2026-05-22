// components/Skills.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Layout, Database, Cloud, CreditCard, Star } from "lucide-react";
import styles from "./Skills.module.css";

type CategoryId = "backend" | "frontend" | "database" | "devops" | "others";

interface SkillItem {
  name: string;
  level: number; // 1 to 5 stars
  desc: string;
}

interface CategoryData {
  id: CategoryId;
  label: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("backend");

  const categories: CategoryData[] = [
    {
      id: "backend",
      label: "Backend & Core",
      icon: <Server size={18} />,
      skills: [
        { name: "ASP.NET Core / Web API", level: 5, desc: "Architecting RESTful endpoints & enterprise APIs" },
        { name: "C# / .NET Core", level: 5, desc: "Object-oriented backend nodes, task concurrency" },
        { name: "Microservices Architecture", level: 4, desc: "Decoupled cloud pipelines & service registries" },
        { name: "Node.js / Express", level: 4, desc: "Asynchronous backend runtimes & event loops" },
        { name: "Python / OOP", level: 4, desc: "Data processing scripts & scripting automations" },
        { name: "Laravel (PHP)", level: 5, desc: "Monolithic & service-oriented Laravel 10 / Yii2 builds" },
      ],
    },
    {
      id: "frontend",
      label: "Frontend & Web",
      icon: <Layout size={18} />,
      skills: [
        { name: "Angular (16+)", level: 5, desc: "Component architecture, RxJS states, modular frameworks" },
        { name: "React JS", level: 4, desc: "Custom hooks, Virtual DOM nodes, state synchronization" },
        { name: "Vue.js", level: 4, desc: "Vuex stores, reactive templates, rapid interface builds" },
        { name: "TypeScript / ES6", level: 5, desc: "Type-safe architectures & modern Javascript compilers" },
        { name: "HTML5 / CSS Modules", level: 5, desc: "Responsive bento structures & glassmorphism filters" },
        { name: "jQuery / Legacy JS", level: 5, desc: "DOM interactions, plugin expansions, legacy migrations" },
      ],
    },
    {
      id: "database",
      label: "Databases & Architecture",
      icon: <Database size={18} />,
      skills: [
        { name: "SQL Server / Stored Procedures", level: 5, desc: "Complex joins, T-SQL scripting, schema mappings" },
        { name: "MySQL", level: 5, desc: "Query optimizations, indexed search pools, index tuning" },
        { name: "MongoDB", level: 4, desc: "BSON documents, schema-less structures, aggregation nodes" },
        { name: "PostgreSQL", level: 4, desc: "Relational constraints, custom type sets, performance tuning" },
        { name: "Database Optimization", level: 5, desc: "Query caching, read/write replicas, structural design" },
        { name: "SOLID & System Design", level: 5, desc: "Clean coding, OOP, design patterns, separation of concerns" },
      ],
    },
    {
      id: "devops",
      label: "DevOps & Cloud",
      icon: <Cloud size={18} />,
      skills: [
        { name: "AWS (EC2 / RDS)", level: 4, desc: "Elastic compute clusters, security policies, cloud storage" },
        { name: "Azure Ecosystem", level: 4, desc: "Cloud active domains, scaling setups, microservices nodes" },
        { name: "Docker Containerization", level: 5, desc: "Isolated environment containers, orchestration configurations" },
        { name: "Jenkins CI/CD", level: 4, desc: "Automated test pipelines, release schedules, webhook triggers" },
        { name: "DigitalOcean / VPS", level: 4, desc: "Droplet clusters, cloud databases, domain networking" },
        { name: "Kubernetes Orchestration", level: 3, desc: "Pod containers scaling, service mapping nodes" },
      ],
    },
    {
      id: "others",
      label: "Integrations & Others",
      icon: <CreditCard size={18} />,
      skills: [
        { name: "Stripe & PayPal Gateways", level: 5, desc: "Secure token authorizations, subscriptions, webhooks" },
        { name: "Google Maps & Calendar API", level: 5, desc: "Real-time calendar updates, geo-fencing overlays" },
        { name: "Git Version Control", level: 5, desc: "Branch mergers, repository trees, actions, hooks" },
        { name: "Jira / Agile / Scrum", level: 5, desc: "Sprint cycles, milestone tracking, team mentoring" },
        { name: "SOLID Design Principles", level: 5, desc: "Adherence to clean code, decoupling, and maintainability" },
        { name: "Apple & Google Pay", level: 4, desc: "Mobile payment integrations & tokens parsing" },
      ],
    },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Technical <span className="gradient-cyan-purple">Expertise Stack</span>
          </h2>
          <p className={styles.sectionDesc}>
            A curated representation of my full-stack capabilities, architecture guidelines, and system engineering tools accumulated over 11+ years of delivery.
          </p>
        </div>

        {/* Tab Controls */}
        <div className={styles.tabWrapper}>
          <div className={styles.tabContainer}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`${styles.tabBtn} ${isActive ? styles.activeTab : ""}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className={styles.activeIndicator}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={styles.btnContent}>
                    {cat.icon}
                    <span>{cat.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Skill Cards Grid */}
        <div className={styles.skillsGridWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className={styles.skillsGrid}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {categories
                .find((cat) => cat.id === activeCategory)
                ?.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ 
                      y: -4, 
                      borderColor: "rgba(6, 182, 212, 0.2)",
                      boxShadow: "0 15px 30px rgba(6, 182, 212, 0.05)"
                    }}
                  >
                    <div className={styles.skillHeader}>
                      <h4 className={styles.skillName}>{skill.name}</h4>
                      <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < skill.level ? styles.starFilled : styles.starEmpty}
                          />
                        ))}
                      </div>
                    </div>
                    <p className={styles.skillDesc}>{skill.desc}</p>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
