"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Shield, Brain, Cpu, Database } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: "AI Environment Generation",
      description: "Generate optimized ML environments instantly with AI-powered recommendations.",
    },
    {
      icon: Shield,
      title: "Safe Dependency Installation",
      description: "Prevent conflicts and broken setups through automated compatibility checks.",
    },
    {
      icon: Brain,
      title: "Automated Troubleshooting",
      description: "Identify and resolve environment issues before they affect productivity.",
    },
    {
      icon: Cpu,
      title: "Preconfigured ML Stacks",
      description: "Ready-to-use setups for PyTorch, TensorFlow, CUDA and modern AI workflows.",
    },
    {
      icon: Database,
      title: "Smart Diagnostics",
      description: "Analyze hardware, software and system readiness with actionable insights.",
    },
  ];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        display: "flex",
        flexDirection: "column",
        background:
          "radial-gradient(circle at top left, rgba(34,197,94,0.15), transparent 30%), radial-gradient(circle at bottom right, rgba(59,130,246,0.15), transparent 30%), var(--bg-primary)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "999px",
          background: "rgba(34,197,94,0.15)",
          filter: "blur(120px)",
          top: "-150px",
          left: "-100px",
          animation: "float 8s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "999px",
          background: "rgba(59,130,246,0.1)",
          filter: "blur(150px)",
          top: "100px",
          right: "-200px",
          animation: "float 10s ease-in-out infinite reverse",
          zIndex: 0,
        }}
      />
      {/* Hero Section */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "6rem",
          position: "relative",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "4rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* LEFT: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{
                fontSize: "4.5rem",
                fontWeight: 800,
                lineHeight: "1.1",
                marginBottom: "1.5rem",
                background: "linear-gradient(to right, #22c55e, #06b6d4, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(34,197,94,0.35)",
              }}
            >
              Build ML Environments Faster ⚡
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--text-secondary)",
                marginBottom: "2.5rem",
                lineHeight: "1.6",
                maxWidth: "600px",
              }}
            >
              Generate safe, optimized, and hardware-aware AI/ML setup scripts instantly. 
              Say goodbye to dependency hell and manual configuration.
            </p>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link
                href="/diagnose"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "16px",
                  background: "linear-gradient(to right,#22c55e,#16a34a)",
                  color: "white",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 10px 30px rgba(34,197,94,0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                Run Diagnostics
              </Link>

              <Link
                href="/profiles"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "16px",
                  border: "1px solid var(--border-strong)",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  textDecoration: "none",
                  backdropFilter: "blur(10px)",
                  background: "var(--bg-secondary)",
                  transition: "all 0.3s ease",
                }}
              >
                Browse Profiles
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Live Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              style={{
                padding: "2rem",
                borderRadius: "24px",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-strong)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(34,197,94,.15)",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              <div style={{ display: "flex", gap: "8px", marginBottom: "1.5rem" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#eab308" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e" }} />
              </div>
              <p style={{ color: "#22c55e", marginBottom: "1rem" }}>
                $ envforge diagnose
              </p>
              <p style={{ color: "var(--text-primary)" }}>✓ Python 3.11 Detected</p>
              <p style={{ color: "var(--text-primary)" }}>✓ CUDA Toolkit Available</p>
              <p style={{ color: "var(--text-primary)" }}>✓ NVIDIA GPU Compatible</p>
              <p style={{ color: "var(--text-primary)" }}>✓ Dependency Check Passed</p>
              <br />
              <p style={{ color: "var(--brand-primary)", marginBottom: "0.5rem", fontWeight: 600 }}>
                ⚡ Generating Optimized Environment...
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                Profile: PyTorch CUDA 12.1
              </p>
              <br />
              <p style={{ color: "#22c55e", fontWeight: "bold" }}>
                Status: Ready To Deploy ✓
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem', fontWeight: 700 }}>Built For Modern AI Development</h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-secondary)",
                maxWidth: "800px",
                margin: "0 auto 4rem",
                lineHeight: "1.8",
                fontSize: "1.1rem"
              }}
            >
              From intelligent diagnostics to automated troubleshooting and environment generation, EnvForge provides everything needed to build, validate, and deploy AI/ML environments with confidence.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    style={{
                      padding: "2.5rem",
                      background: "var(--bg-primary)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "24px",
                      backdropFilter: "blur(10px)",
                      boxShadow: "var(--shadow-lg)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Icon
                      size={40}
                      color="#22c55e"
                      style={{
                        marginBottom: "1.5rem",
                        filter: "drop-shadow(0 0 10px rgba(34,197,94,0.5))",
                      }}
                    />
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>{feature.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 700 }}>How It Works</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {[
                { num: 1, title: "Run Diagnostics", desc: "Use the built-in diagnostic tool to analyze your system hardware and OS." },
                { num: 2, title: "Choose Profile", desc: "Select your desired ML framework (e.g. PyTorch, TensorFlow) and version." },
                { num: 3, title: "Verify Compatibility", desc: "EnvForge automatically checks if your hardware supports the selected profile." },
                { num: 4, title: "Generate Script", desc: "Instantly download a safe, optimized setup script ready for deployment." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  style={{ display: 'flex', gap: '2rem', marginBottom: i < 3 ? '3rem' : 0, alignItems: 'flex-start' }}
                >
                  <div style={{ 
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)', 
                    color: 'white', 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '1.25rem',
                    fontWeight: 700, 
                    flexShrink: 0,
                    boxShadow: "0 0 20px rgba(34,197,94,0.4)"
                  }}>
                    {step.num}
                  </div>
                  <div style={{ paddingTop: '0.5rem' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: 600 }}>{step.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.desc}</p>
                  </div>
                  {i < 3 && <div style={{ width: '2px', background: 'var(--border-strong)', margin: '-3rem 0 0 0', flexGrow: 1 }} />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '8rem', marginTop: '2rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(59,130,246,0.1))',
              borderRadius: '32px',
              border: '1px solid var(--border-subtle)',
              boxShadow: "var(--shadow-lg)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800 }}>Ready to Forge Your Environment?</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Start building optimized AI environments in minutes. Stop debugging installation errors.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/diagnose" style={{
                padding: '1rem 2.5rem',
                borderRadius: '999px',
                background: 'linear-gradient(to right,#22c55e,#16a34a)',
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: "0 10px 30px rgba(34,197,94,0.3)",
              }}>
                Run Diagnostics
              </Link>
              <Link href="/troubleshoot" style={{
                padding: '1rem 2.5rem',
                borderRadius: '999px',
                background: 'transparent',
                border: '1px solid var(--border-strong)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
              }}>
                AI Troubleshoot
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
