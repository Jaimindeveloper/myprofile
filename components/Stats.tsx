// components/Stats.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Cloud, GitBranch } from "lucide-react";
import styles from "./Stats.module.css";

export default function Stats() {
  const statsData = [
    {
      id: "years",
      number: "11+",
      label: "Years Experience",
      desc: "Full-stack web application engineering & architecture leadership.",
      icon: <Award className={styles.iconPurple} size={28} />,
    },
    {
      id: "leadership",
      number: "Tech Lead",
      label: "Engineering Leadership",
      desc: "Managing agile processes, sprint deliveries, and 10+ developer teams.",
      icon: <Users className={styles.iconCyan} size={28} />,
    },
    {
      id: "enterprise",
      number: "Cygnet.one",
      label: "Enterprise Delivery",
      desc: "Delivering business-aligned microservices and scalable cloud nodes.",
      icon: <Cloud className={styles.iconPink} size={28} />,
    },
    {
      id: "open-source",
      number: "15+",
      label: "Open Source Projects",
      desc: "Active contributor including Modelia AI Studio and sliding widgets.",
      icon: <GitBranch className={styles.iconPurple} size={28} />,
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={styles.bentoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(139, 92, 246, 0.2)",
                boxShadow: "0 20px 40px -15px rgba(139, 92, 246, 0.08)"
              }}
            >
              <div className={styles.glowBg}></div>
              <div className={styles.cardHeader}>
                <span className={styles.number}>{stat.number}</span>
                <div className={styles.iconContainer}>{stat.icon}</div>
              </div>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.desc}>{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
