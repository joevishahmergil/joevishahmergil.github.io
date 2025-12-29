import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronRight, Code2, Database, Brain, Server, Award, Briefcase } from 'lucide-react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'churn',
      title: "Customer Churn Prediction System",
      subtitle: "End-to-End ML & MLOps Pipeline",
      summary: "Built a production-ready churn prediction pipeline with business-driven evaluation, prioritizing high recall to minimize missed churn cases.",
      problem: "Customer churn directly impacts revenue. Manual analysis does not scale, and many ML models fail due to class imbalance and lack of reproducibility.",
      solution: "Built a production-ready churn prediction pipeline with business-driven evaluation, prioritizing high recall to minimize missed churn cases.",
      architecture: [
        "Data → EDA & Feature Engineering",
        "→ Model Training & Tuning",
        "→ Experiment Tracking (MLflow)",
        "→ Dataset Versioning (DVC)",
        "→ Dockerized ML Pipeline"
      ],
      highlights: [
        "Performed structured EDA to identify churn drivers",
        "Trained and compared 5 ML models",
        "Optimized decision thresholds for recall",
        "Tracked experiments using MLflow",
        "Versioned datasets using DVC",
        "Dockerized for reproducibility"
      ],
      impact: [
        { label: "Best AUC", value: "0.84" },
        { label: "Recall", value: "52%" },
        { label: "Models", value: "5" }
      ],
      techStack: "Python, Scikit-learn, XGBoost, LightGBM, Pandas, MLflow, DVC, Docker",
      github: "https://github.com/joevishah2000/Churn_Prediction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 'backend',
      title: "Multi-Tenant Task & Workflow Management System",
      subtitle: "Production-Grade Backend + React Frontend",
      summary: "Designed a multi-tenant backend system with secure authentication, RBAC, caching, and a modern frontend dashboard.",
      problem: "Most task management systems fail to support data isolation across organizations, secure role-based access, and high-read performance at scale.",
      solution: "Designed a multi-tenant backend system with secure authentication, RBAC, caching, and a modern frontend dashboard.",
      architecture: [
        "React Frontend",
        "→ FastAPI Backend",
        "→ JWT Authentication & RBAC",
        "→ PostgreSQL (Multi-Tenant)",
        "→ Redis Cache"
      ],
      highlights: [
        "Multi-tenant architecture with strict data isolation",
        "JWT-based authentication (access + refresh tokens)",
        "Role-Based Access Control (Admin, User)",
        "Redis caching with TTL-based invalidation",
        "Async background jobs for non-critical tasks",
        "Pagination and filtering for task APIs",
        "Modern React UI with Tailwind & Framer Motion"
      ],
      impact: [
        { label: "API Endpoints", value: "15+" },
        { label: "User Roles", value: "2" },
        { label: "Cache", value: "Redis" }
      ],
      techStack: "FastAPI, PostgreSQL, SQLAlchemy, Redis, React, Vite, Tailwind CSS",
      github: "https://github.com/joevishah2000/MultiTenantTaskSystem",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'genai',
      title: "AI-Driven Content Moderation Platform",
      subtitle: "Multi-Agent GenAI System with Human-in-the-Loop",
      summary: "Built a multi-agent AI moderation platform using LangGraph and ReAct reasoning, combining automated decisions with human-in-the-loop escalation.",
      problem: "Content moderation systems face a trade-off: Manual moderation does not scale, and fully automated moderation lacks trust and nuance. Real-world platforms require AI + human collaboration.",
      solution: "Built a multi-agent AI moderation platform using LangGraph and ReAct reasoning, combining automated decisions with human-in-the-loop escalation.",
      architecture: [
        "Content → Agent Graph (LangGraph)",
        "→ Confidence-Based Decision",
        "→ Auto-Enforcement OR HITL Review"
      ],
      highlights: [
        "Stateful multi-agent workflow using LangGraph",
        "ReAct loops for explainable AI decisions",
        "Confidence-based routing for HITL escalation",
        "Vector memory using ChromaDB",
        "Role-based dashboards for moderators and admins",
        "Secure JWT authentication with RBAC"
      ],
      impact: [
        { label: "AI Agents", value: "6" },
        { label: "User Roles", value: "6" },
        { label: "HITL", value: "Enabled" }
      ],
      techStack: "Python, FastAPI, LangGraph, LangChain, Google Gemini API, React, Material UI, ChromaDB",
      github: "https://github.com/joevishahmergil/An-intelligent-platform-ensuring-safe-and-moderated-online-communities",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const skills = [
    {
      category: "Generative AI & Agentic Systems",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      items: ["RAG Systems", "LangGraph", "LangChain", "Prompt Engineering", "Vector DBs", "Multi-Agent AI"]
    },
    {
      category: "Backend Engineering",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      items: ["FastAPI", "PostgreSQL", "Redis", "JWT Auth", "RBAC", "REST APIs"]
    },
    {
      category: "Machine Learning & MLOps",
      icon: <Database className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      items: ["Scikit-learn", "XGBoost", "MLflow", "DVC", "Docker", "Azure AI"]
    },
    {
      category: "Cloud & Databases",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      items: ["Azure OpenAI", "Cosmos DB", "Supabase", "ChromaDB", "SQLAlchemy", "React"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-emerald-600/5"></div>

        <div className="relative max-w-6xl w-full">
          <div className="text-center space-y-12">
            {/* Profile Image */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src="/Untitled-2.jpg"
                  alt="Joevishah Mergil S"
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                />
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-medium backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Available for Full-Time Opportunities
            </div>

            {/* Name & Title */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                Joevishah Mergil S
              </h1>
              <p className="text-3xl md:text-4xl text-slate-300 font-semibold">
                GenAI Engineer | ML Engineer | Backend Engineer
              </p>
              <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
                Building production-grade AI systems with LangGraph, RAG pipelines, and multi-agent workflows.
                Experienced in FastAPI backends, MLOps, and scalable cloud solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <a
                href="mailto:joevishahmergil@gmail.com"
                className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/joevishah-mergil28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:bg-slate-700/50"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              {/* <a
                href="https://github.com/joevishah2000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:bg-slate-700/50"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="px-6 py-40 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Core Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>

                <div className="relative space-y-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center`}>
                    {skill.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white">{skill.category}</h3>

                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 bg-gradient-to-r ${skill.color} bg-opacity-10 border border-slate-700 rounded-xl text-sm font-medium text-slate-300`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                <div className="relative p-10 md:p-12">
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                      <p className="text-xl text-slate-400 font-medium">{project.subtitle}</p>
                      <p className="text-lg text-slate-300 leading-relaxed">{project.summary}</p>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${project.color} rounded-xl font-semibold hover:scale-105 transition-all whitespace-nowrap`}
                    >
                      <Github className="w-5 h-5" />
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-6 mb-10 p-8 bg-slate-900/50 rounded-2xl border border-slate-700/30">
                    {project.impact.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Details */}
                  {activeProject === project.id ? (
                    <div className="space-y-8 animate-fadeIn">
                      {/* Problem */}
                      <div className="space-y-3">
                        <h4 className="text-2xl font-bold text-white">Problem</h4>
                        <p className="text-lg text-slate-300 leading-relaxed">{project.problem}</p>
                      </div>

                      {/* Solution */}
                      <div className="space-y-3">
                        <h4 className="text-2xl font-bold text-white">Solution</h4>
                        <p className="text-lg text-slate-300 leading-relaxed">{project.solution}</p>
                      </div>

                      {/* Architecture */}
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-white">Architecture</h4>
                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/30 font-mono text-slate-300">
                          {project.architecture.map((line, i) => (
                            <div key={i} className="py-1">{line}</div>
                          ))}
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-white">Key Highlights</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <ChevronRight className={`w-5 h-5 flex-shrink-0 mt-1 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                              <span className="text-slate-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-white">Tech Stack</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.split(', ').map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveProject(null)}
                        className="text-slate-400 hover:text-white font-medium flex items-center gap-2 mt-6"
                      >
                        Show Less
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveProject(project.id)}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 text-lg"
                    >
                      View Details
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-40 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <Briefcase className="w-8 h-8" />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Associate Software Engineer</h3>
                  <p className="text-xl text-blue-400 font-semibold">CapeStart Software Pvt. Ltd</p>
                  <p className="text-slate-400 mt-2">July 2024 – Present</p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <ChevronRight className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-300">Engineered enterprise-grade RAG chatbot with Azure OpenAI and Cosmos DB, achieving <strong className="text-white">92% semantic relevance</strong> across 7,000+ documents</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ChevronRight className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-300">Designed multilingual search pipeline with Azure AI Search, reducing document lookup time by <strong className="text-white">65%</strong></span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ChevronRight className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-300">Built Streamlit dashboard with SQL-backed conversation history, driving <strong className="text-white">40% higher user engagement</strong></span>
                  </li>
                </ul>

                <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400 font-semibold">
                  <Award className="w-5 h-5" />
                  SuperStar of Q2, 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-3">B.E in Computer Science Engineering</h3>
            <p className="text-2xl text-blue-400 font-semibold mb-4">Arunachala College (Anna University)</p>
            <div className="flex flex-wrap justify-center gap-8 text-lg text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">CGPA:</span>
                <span className="text-white font-bold">8.8 / 10</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Duration:</span>
                <span className="text-white font-semibold">2020 – 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-40 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 rounded-3xl blur-3xl"></div>

            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
                Open to full-time opportunities in GenAI, Full-Stack Development, and MLOps roles
              </p>

              <div className="flex flex-wrap justify-center gap-8 text-lg">
                <a href="tel:+919345413756" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+91 9345413756</span>
                </a>
                <a href="mailto:joevishahmergil@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span>joevishahmergil@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400">© 2025 Joevishah Mergil S. All rights reserved.</p>

          <div className="flex gap-6">
            {/* <a href="https://github.com/joevishah2000" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a> */}
            <a href="https://linkedin.com/in/joevishah-mergil28" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:joevishahmergil@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;