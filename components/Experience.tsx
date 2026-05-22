// components/Experience.tsx
"use client";

import React, { useState } from "react";
import { motion as fm, AnimatePresence } from "framer-motion";
import { Calendar, Briefcase, ChevronDown, ChevronUp, MapPin, Award } from "lucide-react";
import styles from "./Experience.module.css";

interface JobItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  accomplishments: string[];
  skills: string[];
}

export default function Experience() {
  const [expandedCard, setExpandedCard] = useState<string | null>("cygnet");

  const jobs: JobItem[] = [
    {
      id: "cygnet",
      role: "Technical Lead",
      company: "Cygnet.one",
      location: "Vadodara, Gujarat, India",
      period: "Oct 2020 - Present",
      accomplishments: [
        "Led cross-functional software teams to design, architect, and deliver secure, enterprise-grade cloud systems using .NET Core, C#, Web API, and microservices.",
        "Engineered scalable backend systems with Node.js and Laravel 10, integrated with Angular 16 frontends.",
        "Architected robust healthcare booking portals with real-time Google Calendar and Maps APIs integration.",
        "Managed Docker containers deployment across DigitalOcean environments and integrated automated CI/CD pipelines via Jenkins.",
        "Maintained top-tier code quality standards through detailed code reviews, SOLID design enforcement, and agile sprint planning using Jira."
      ],
      skills: [".NET Core 8", "C#", "Microservices", "Angular 16", "Node.js", "Docker", "Jenkins", "SQL Server"]
    },
    {
      id: "rockers",
      role: "Tech Lead",
      company: "Rockers Technologies (USA Client)",
      location: "Vadodara, India / USA Remote",
      period: "Jan 2017 - Oct 2020",
      accomplishments: [
        "Managed an agile team of 11 multi-disciplinary members (7 Developers, 2 Designers, 2 QA), steering product workflows and on-time sprint completions.",
        "Led end-to-end development of a major Peer-to-Peer (P2P) Crowdfunding and lending platform, managing borrower-investor modules.",
        "Designed service-oriented backend layers using Laravel (5.x) and APIATO architecture for high scalability and secure API endpoints.",
        "Implemented high-performance caching strategies using Redis, lowering load delays by over 40%.",
        "Optimized complex relational schemas in MySQL, tuning indexed database parameters for high data throughput."
      ],
      skills: ["Laravel", "APIATO", "AngularJS", "Redis", "MySQL", "P2P Systems", "Team Management"]
    },
    {
      id: "mtaj",
      role: "Sr Software Engineer",
      company: "Mtaj Solutions",
      location: "Vadodara, Gujarat, India",
      period: "Apr 2015 - Jan 2017",
      accomplishments: [
        "Managed development of a high-traffic E-commerce platform scaling to thousands of product SKUs.",
        "Designed the complex checkout checkout flows, dynamic shopping cart nodes, and a modular customer wallet system.",
        "Developed custom coupon/discount calculation engines with robust security protocols preventing voucher abuses.",
        "Conducted code reviews, database query auditing, and mentored junior coders in SOLID practices."
      ],
      skills: ["Core PHP", "Laravel", "E-Commerce", "Checkout Flow", "Wallet Integration", "Query Optimization"]
    },
    {
      id: "aldiablos",
      role: "Software Developer",
      company: "Aldiablos Infotech Pvt. Ltd.",
      location: "Vadodara, Gujarat, India",
      period: "Jan 2014 - Nov 2015",
      accomplishments: [
        "Developed and maintained modular web applications using robust MVC frameworks.",
        "Built fast, secure RESTful web service endpoints for web app integrations.",
        "Crafted mobile-responsive, elegant frontends utilizing HTML5, CSS3, JavaScript, and jQuery.",
        "Designed relational database tables, optimized complex SQL queries, and written stored procedures."
      ],
      skills: ["ASP.NET MVC", "C#", "SQL Server", "REST APIs", "jQuery", "CSS3", "Bootstrap"]
    }
  ];

  const toggleExpand = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section id="experience" className={styles.expSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Professional <span className="gradient-cyan-purple">Career Journey</span>
          </h2>
          <p className={styles.sectionDesc}>
            Over 11 years of leading agile software squads, optimizing microservice pipelines, and delivering robust full-stack applications.
          </p>
        </div>

        {/* Timeline Path */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>

          {jobs.map((job, index) => {
            const isExpanded = expandedCard === job.id;
            return (
              <fm.div
                key={job.id}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {/* Timeline Circle Node */}
                <div className={`${styles.timelineNode} ${isExpanded ? styles.activeNode : ""}`}>
                  <Briefcase size={16} className={styles.nodeIcon} />
                </div>

                {/* Card Container */}
                <div 
                  className={`${styles.card} ${isExpanded ? styles.expandedCard : ""}`}
                  onClick={() => toggleExpand(job.id)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.headerInfo}>
                      <span className={styles.period}>
                        <Calendar size={12} /> {job.period}
                      </span>
                      <h3 className={styles.roleTitle}>{job.role}</h3>
                      <h4 className={styles.companyName}>
                        {job.company} <span className={styles.bullet}>•</span> <span className={styles.location}><MapPin size={12} /> {job.location}</span>
                      </h4>
                    </div>
                    <button className={styles.toggleBtn} aria-label="Toggle Details">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <fm.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={styles.expandedContent}
                      >
                        <div className={styles.contentInner}>
                          <h5 className={styles.secLabel}><Award size={14} /> Key Contributions:</h5>
                          <ul className={styles.bulletsList}>
                            {job.accomplishments.map((acc, i) => (
                              <li key={i}>{acc}</li>
                            ))}
                          </ul>

                          <div className={styles.skillsTagWrapper}>
                            {job.skills.map((s) => (
                              <span key={s} className={styles.skillTag}>{s}</span>
                            ))}
                          </div>
                        </div>
                      </fm.div>
                    )}
                  </AnimatePresence>
                </div>
              </fm.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
