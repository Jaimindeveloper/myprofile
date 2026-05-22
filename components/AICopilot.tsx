// components/AICopilot.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Code, Send, Sparkles, Terminal, FileText, CheckCircle, AlertTriangle, Play, RefreshCw, Star } from "lucide-react";
import styles from "./AICopilot.module.css";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

interface ReviewResult {
  score: number;
  pros: string[];
  cons: string[];
  review: string;
  refactored: string;
}

export default function AICopilot() {
  const [activeMode, setActiveMode] = useState<"chat" | "reviewer">("chat");

  // Chatbot State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hello! I am Jaimin's AI Recruiter Co-pilot. I can answer any questions you have regarding Jaimin Suthar's 11+ years of experience as a Full-Stack Tech Lead. What would you like to know?",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reviewer State
  const [codeSnippet, setCodeSnippet] = useState(
    `// Paste C#, C++, SQL, TypeScript, PHP, or JavaScript here for a SOLID audit
public void SaveUser(User u) {
    var conn = new SqlConnection("Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;");
    conn.Open();
    var cmd = new SqlCommand("INSERT INTO Users VALUES('" + u.Name + "','" + u.Email + "')", conn);
    cmd.ExecuteNonQuery();
    
    // Violation of Single Responsibility - sending mail here!
    var mail = new MailMessage("admin@corp.com", u.Email);
    mail.Subject = "Welcome!";
    mail.Body = "Hi " + u.Name;
    new SmtpClient("smtp.corp.com").Send(mail);
}`
  );
  const [reviewResult, setReviewResult] = useState<ReviewResult | null>(null);
  const [reviewerLoading, setReviewerLoading] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChatSubmit = async (e?: React.FormEvent, customMsg?: string) => {
    e?.preventDefault();
    const query = customMsg || inputVal;
    if (!query.trim() || chatLoading) return;

    if (!customMsg) setInputVal("");
    
    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: query }]);
    setChatLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "chat", message: query }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.response || "No response received." }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Apologies, I encountered an internal communication error. Please try again." },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const handleCodeReviewSubmit = async () => {
    if (!codeSnippet.trim() || reviewerLoading) return;

    setReviewerLoading(true);
    setReviewResult(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "review", code: codeSnippet }),
      });
      const data = await response.json();
      setReviewResult({
        score: data.score || 70,
        pros: data.pros || [],
        cons: data.cons || [],
        review: data.review || "",
        refactored: data.refactored || "",
      });
    } catch (err) {
      // In case of error, show a generic failure feedback
      setReviewResult({
        score: 60,
        pros: ["Code compiles and has core logic."],
        cons: ["Connection timeout occurred while contacting Gemini API."],
        review: "I encountered a query timeout while trying to perform the full AI audit. Please ensure you are connected to the network or try submitting a smaller block of code.",
        refactored: "// Review timeout fallback",
      });
    } finally {
      setReviewerLoading(false);
    }
  };

  const promptSuggestions = [
    "Tell me about Jaimin's 11+ Yrs Experience",
    "What is Jaimin's core technology stack?",
    "Where is Jaimin located and is he open to remote?",
    "How can I download Jaimin's official resume?",
  ];

  return (
    <section id="ai-copilot" className={styles.copilotSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Jaimin's <span className="gradient-cyan-purple">AI Recruiter Co-Pilot</span>
          </h2>
          <p className={styles.sectionDesc}>
            Interact with my customized Gemini AI agent. You can ask details regarding my technical background or run a real-time Technical Lead SOLID audit on your own software code blocks.
          </p>
        </div>

        {/* Dashboard Tabs Toggle */}
        <div className={styles.tabsToggle}>
          <button
            onClick={() => setActiveMode("chat")}
            className={`${styles.toggleBtn} ${activeMode === "chat" ? styles.activeToggle : ""}`}
          >
            <MessageSquare size={16} />
            <span>Consult Recruiter Advisor</span>
          </button>
          <button
            onClick={() => setActiveMode("reviewer")}
            className={`${styles.toggleBtn} ${activeMode === "reviewer" ? styles.activeToggle : ""}`}
          >
            <Code size={16} />
            <span>SOLID Code Reviewer</span>
          </button>
        </div>

        {/* Dynamic Mode Render */}
        <div className={styles.workspace}>
          <AnimatePresence mode="wait">
            {activeMode === "chat" ? (
              <motion.div
                key="chat"
                className={styles.chatWrapper}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Chat Output Frame */}
                <div className={styles.chatConsole}>
                  <div className={styles.consoleHeader}>
                    <div className={styles.consoleDots}>
                      <span className={styles.dotRed}></span>
                      <span className={styles.dotYellow}></span>
                      <span className={styles.dotGreen}></span>
                    </div>
                    <span className={styles.consoleTitle}>recruiter_copilot_v2.1</span>
                    <span className={styles.liveBadge}><Sparkles size={12} /> Gemini Active</span>
                  </div>

                  <div className={styles.chatMessages}>
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`${styles.messageRow} ${msg.sender === "user" ? styles.userRow : styles.botRow}`}
                      >
                        <div className={styles.avatar}>
                          {msg.sender === "user" ? "U" : "AI"}
                        </div>
                        <div className={styles.bubble}>
                          <p>{msg.text}</p>
                        </div>
                      </div>
                    ))}
                    {chatLoading && (
                      <div className={`${styles.messageRow} ${styles.botRow}`}>
                        <div className={styles.avatar}>AI</div>
                        <div className={`${styles.bubble} ${styles.loadingBubble}`}>
                          <span className={styles.loadingDot}></span>
                          <span className={styles.loadingDot}></span>
                          <span className={styles.loadingDot}></span>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggestion Chips */}
                  <div className={styles.suggestions}>
                    {promptSuggestions.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => handleChatSubmit(undefined, s)}
                        disabled={chatLoading}
                        className={styles.suggestBtn}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleChatSubmit} className={styles.chatForm}>
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="Ask me about Jaimin's microservices experience, databases, salary expectations..."
                      className={styles.chatInput}
                      disabled={chatLoading}
                    />
                    <button type="submit" className={styles.sendBtn} disabled={chatLoading}>
                      <Send size={16} />
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="reviewer"
                className={styles.reviewerWrapper}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Code Input Panel (Left) */}
                <div className={styles.codeEditor}>
                  <div className={styles.editorHeader}>
                    <div className={styles.consoleDots}>
                      <span className={styles.dotRed}></span>
                      <span className={styles.dotYellow}></span>
                      <span className={styles.dotGreen}></span>
                    </div>
                    <span className={styles.consoleTitle}>clean_code_audit.cs</span>
                    <button 
                      onClick={() => setCodeSnippet("")}
                      className={styles.clearBtn}
                      title="Clear Editor"
                    >
                      <RefreshCw size={12} />
                    </button>
                  </div>
                  <textarea
                    value={codeSnippet}
                    onChange={(e) => setCodeSnippet(e.target.value)}
                    placeholder="// Paste your method, SQL queries, or frontend services here for review..."
                    className={styles.editorArea}
                    disabled={reviewerLoading}
                  />
                  <div className={styles.editorFooter}>
                    <button
                      onClick={handleCodeReviewSubmit}
                      disabled={reviewerLoading || !codeSnippet.trim()}
                      className={styles.runBtn}
                    >
                      {reviewerLoading ? (
                        <>
                          <RefreshCw size={14} className={styles.spinIcon} />
                          <span>Auditing Quality...</span>
                        </>
                      ) : (
                        <>
                          <Play size={14} />
                          <span>Run SOLID Audit</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Audit Dashboard Output (Right) */}
                <div className={styles.auditDashboard}>
                  {reviewerLoading ? (
                    <div className={styles.auditLoader}>
                      <div className={styles.orbitLoader}>
                        <div className={styles.innerOrbit}></div>
                      </div>
                      <h4 className={styles.loaderTitle}>Evaluating Architectural Constraints</h4>
                      <p className={styles.loaderSubtitle}>Jaimin's Tech Lead agent is checking SOLID compliances and query indexes...</p>
                    </div>
                  ) : reviewResult ? (
                    <div className={styles.dashboardResults}>
                      {/* Score Board */}
                      <div className={styles.scoreboard}>
                        <div className={styles.scoreOuter}>
                          <div className={styles.scoreNumber}>{reviewResult.score}</div>
                          <div className={styles.scoreLabel}>Score</div>
                        </div>
                        <div className={styles.scoreFeedback}>
                          <h4 className={styles.feedbackTitle}>
                            {reviewResult.score >= 85 ? "Excellent Architecture!" : reviewResult.score >= 70 ? "Needs Decoupling & Refactoring" : "Critical Architecture Smells"}
                          </h4>
                          <p className={styles.feedbackDesc}>
                            This code has been evaluated according to SOLID, Clean Code, and high-performance design specifications.
                          </p>
                        </div>
                      </div>

                      {/* Pros & Cons Tabs */}
                      <div className={styles.checklist}>
                        <div className={styles.checkCol}>
                          <h5 className={styles.checkHeader}><CheckCircle size={14} className={styles.iconGreen} /> Strengths</h5>
                          <ul className={styles.checkList}>
                            {reviewResult.pros.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.checkCol}>
                          <h5 className={styles.checkHeader}><AlertTriangle size={14} className={styles.iconYellow} /> Improvements</h5>
                          <ul className={styles.checkList}>
                            {reviewResult.cons.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* critique */}
                      <div className={styles.critiqueBox}>
                        <h5 className={styles.critiqueTitle}><Terminal size={14} /> Tech Lead Evaluation Critique</h5>
                        <p className={styles.critiqueText}>{reviewResult.review}</p>
                      </div>

                      {/* Refactored Output */}
                      <div className={styles.refactoredCodeBox}>
                        <div className={styles.codeBoxHeader}>
                          <FileText size={14} />
                          <span>Refactored Solution (Tech Lead Standard)</span>
                        </div>
                        <pre className={styles.refactoredPre}>
                          <code>{reviewResult.refactored}</code>
                        </pre>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.reviewPlaceholder}>
                      <Code size={48} className={styles.placeholderIcon} />
                      <h4 className={styles.placeholderTitle}>SOLID Code Audit Console</h4>
                      <p className={styles.placeholderText}>
                        Paste a C#, TypeScript, SQL, Node, or Laravel function in the editor and click "Run SOLID Audit" to get a comprehensive Tech Lead code review, architecture check, and dynamic refactored code directly.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
