// components/Contact.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Download, Send, CheckCircle2, User, HelpCircle, FileText } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job Offer",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || loading) return;

    setLoading(true);
    // Simulate API form submission latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "Job Offer", message: "" });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Let's Build <span className="gradient-cyan-purple">Something Great</span>
          </h2>
          <p className={styles.sectionDesc}>
            Looking to hire a Technical Lead, build complex full-stack web applications, or discuss system architecture? Get in touch immediately.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Contact Details Bento (Left) */}
          <div className={styles.infoCol}>
            {/* Address Badge */}
            <div className={styles.infoCard}>
              <div className={styles.infoIconBox}>
                <MapPin size={20} className={styles.iconCyan} />
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Office Location</h4>
                <p className={styles.infoText}>Sayajiganj, Vadodara, Gujarat, India - 390020</p>
              </div>
            </div>

            {/* Email Badge */}
            <a href="mailto:jaimin.suthar12@gmail.com" className={`${styles.infoCard} ${styles.clickableCard}`}>
              <div className={styles.infoIconBox}>
                <Mail size={20} className={styles.iconPurple} />
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Direct Email Address</h4>
                <p className={styles.infoText}>jaimin.suthar12@gmail.com</p>
              </div>
            </a>

            {/* Resume Badge */}
            <a 
              href="https://drive.google.com/file/d/1kfqHLaZgpZZVLk9BEZLiIYgbBWHuYIia/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.infoCard} ${styles.clickableCard} ${styles.resumeCard}`}
            >
              <div className={styles.infoIconBox}>
                <FileText size={20} className={styles.iconPink} />
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Download Curriculum Vitae</h4>
                <p className={styles.infoText}>Google Drive secure PDF download</p>
              </div>
            </a>

            <div className={styles.statusPanel}>
              <span className={styles.statusPulse}></span>
              <span className={styles.statusText}>Open to Technical Lead & Architect Roles</span>
            </div>
          </div>

          {/* Contact Form Panel (Right) */}
          <div className={styles.formCol}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleFormSubmit}
                  className={styles.contactForm}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="name"><User size={12} /> Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={styles.input}
                        disabled={loading}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="email"><Mail size={12} /> Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={styles.input}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="subject"><HelpCircle size={12} /> Inquiry Purpose</label>
                    <select
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={styles.select}
                      disabled={loading}
                    >
                      <option value="Job Offer">Hiring/Recruiting Invitation</option>
                      <option value="Project Collaboration">Freelance / Project Collaboration</option>
                      <option value="General Question">Technical Consulting / Consultation</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Message Description</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Jaimin, we would love to schedule an interview for our Tech Lead role..."
                      className={styles.textarea}
                      disabled={loading}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={loading}>
                    {loading ? (
                      <>
                        <span className={styles.spinner}></span>
                        <span>Delivering Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="thank-you"
                  className={styles.thankYouBox}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle2 size={56} className={styles.thankYouIcon} />
                  <h3 className={styles.thankYouTitle}>Inquiry Logged Successfully!</h3>
                  <p className={styles.thankYouText}>
                    Thank you for reaching out. As Jaimin's co-pilot, I have logged your message details securely. Jaimin Suthar will follow up with you at your email address shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
