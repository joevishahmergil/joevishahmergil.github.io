import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronRight, Code2, Database, Brain, Server } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');

  const projects = {
    mlops: {
      title: "Customer Churn Prediction System",
      role: "ML Engineer (End-to-End MLOps Project)",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      why: "I built this project to demonstrate production-ready machine learning capabilities with industry-standard MLOps practices, focusing on experiment tracking, model versioning, and reproducible pipelines that solve real business problems.",
      designed: [
        "End-to-end ML pipeline with data preprocessing and feature engineering",
        "Comprehensive model evaluation comparing 5 algorithms (Logistic Regression, Random Forest, XGBoost, LightGBM, SVM)",
        "Business-aligned optimization prioritizing recall to minimize revenue loss",
        "MLflow integration for experiment tracking and metrics comparison",
        "DVC implementation for dataset versioning and data lineage",
        "Docker containerization for environment consistency and portability"
      ],
      learnings: [
        "Designing production-ready ML pipelines with proper data preprocessing and feature engineering",
        "Implementing MLOps best practices: experiment tracking (MLflow) and dataset versioning (DVC)",
        "Business-driven model evaluation and threshold optimization to improve recall from baseline",
        "Building reproducible ML systems using Docker containerization and Git workflows",
        "Handling imbalanced datasets and optimizing for business-critical metrics"
      ],
      techStack: "Python, Scikit-learn, XGBoost, LightGBM, Pandas, MLflow, DVC, Docker, Git",
      github: "https://github.com/joevishah2000/Churn_Prediction",
      metrics: [
        { label: "Best AUC Score", value: "0.84" },
        { label: "Recall Achieved", value: "52%" },
        { label: "Models Compared", value: "5" }
      ]
    },
    backend: {
      title: "Multi-Tenant Task & Workflow Management System",
      role: "Backend Engineer (Production-Style API Development)",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      why: "I built this project to gain hands-on experience designing scalable, production-grade backend systems with multi-tenancy, authentication, caching strategies, and modern React frontends—skills essential for full-stack engineering roles.",
      designed: [
        "Multi-tenant architecture with complete data isolation per organization",
        "JWT-based authentication system with access and refresh token management",
        "Role-based access control (RBAC) supporting Admin and User permissions",
        "Redis caching layer for high-read APIs with fault tolerance and TTL-based invalidation",
        "Async background job processing for non-critical operations",
        "FastAPI REST endpoints with pagination, filtering (status, priority), and comprehensive API documentation",
        "Modern React frontend with Tailwind CSS, glassmorphism UI, and responsive dashboard"
      ],
      learnings: [
        "Architecting multi-tenant systems with proper data isolation and security boundaries",
        "Implementing secure authentication flows with JWT tokens and refresh mechanisms",
        "Building high-performance APIs with Redis caching and async task processing",
        "Database design with SQLAlchemy ORM and PostgreSQL (Supabase)",
        "Full-stack integration connecting FastAPI backend with React frontend",
        "Creating production-ready documentation and maintaining clean API contracts"
      ],
      techStack: "FastAPI, SQLAlchemy, PostgreSQL (Supabase), Redis, React, Vite, Tailwind CSS, Framer Motion",
      github: "https://github.com/joevishah2000/MultiTenantTaskSystem",
      metrics: [
        { label: "API Endpoints", value: "15+" },
        { label: "User Roles", value: "2" },
        { label: "Cache Strategy", value: "Redis TTL" }
      ]
    },
    fullstack: {
      title: "AI-Powered Multi-Agent Content Moderation Platform",
      role: "GenAI Engineer (Agentic AI & Full-Stack Development)",
      icon: <Brain className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      why: "I built this project to gain hands-on experience with agentic AI systems, LangGraph workflows, and human-in-the-loop decision architectures used in real-world GenAI applications—going beyond simple chatbots to production AI orchestration.",
      designed: [
        "Multi-agent moderation pipeline with 6 specialized AI agents using ReAct reasoning (Reason → Act → Observe)",
        "LangGraph StateGraph orchestration for coordinated agent workflows",
        "Human-in-the-Loop (HITL) escalation system for low-confidence decisions and high-risk content",
        "FastAPI backend with JWT authentication and role-based access control for 6 user roles",
        "React dashboard with Material UI for moderation workflows, analytics, and appeals handling",
        "Vector memory system using ChromaDB for agent learning and context retention",
        "Confidence-based decision synthesis combining toxicity scoring, policy evaluation, and user reputation"
      ],
      learnings: [
        "Designing multi-agent AI systems with coordinated reasoning and decision synthesis",
        "Implementing LangGraph state machines for complex workflow orchestration",
        "Building human-AI collaboration patterns with confidence thresholds and escalation triggers",
        "Integrating LLMs (Google Gemini) into production applications with proper error handling",
        "Creating role-based dashboards and permission systems for enterprise workflows",
        "Managing agent memory and context using vector databases for learning and improvement",
        "Full-stack GenAI development: connecting AI pipelines with FastAPI backend and React frontend"
      ],
      techStack: "Python, FastAPI, LangGraph, LangChain, Google Gemini, React, Material UI, SQLite, ChromaDB, Zustand",
      github: "https://github.com/joevishahmergil/An-intelligent-platform-ensuring-safe-and-moderated-online-communities",
      metrics: [
        { label: "AI Agents", value: "6" },
        { label: "User Roles", value: "6" },
        { label: "HITL Workflow", value: "Enabled" }
      ]
    }
  };

  const renderHome = () => (
    <div className="space-y-48 md:space-y-64">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10 rounded-3xl blur-3xl"></div>
        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50">
          <div className="flex items-start justify-between">
            <div className="text-center space-y-10 flex-1">
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
                Available for Full-Time Opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                Joevishah Mergil S
              </h1>
              <p className="text-2xl md:text-4xl text-slate-300 font-medium">
                Generative AI Engineer & Python Developer
              </p>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Specializing in LLM-powered applications, RAG systems, and agentic AI workflows.
                Experienced in building production-grade solutions with LangChain, Azure AI Search,
                and vector databases. Passionate about bridging AI research and real-world deployment.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-8">
                <a href="mailto:joevishahmergil@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/20">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a href="https://linkedin.com/in/joevishah-mergil28" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl font-semibold transition-all hover:scale-105">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a href="https://github.com/joevishah2000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl font-semibold transition-all hover:scale-105">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Expertise */}
      <div className="pt-32">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Core Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Generative AI & LLMs</h3>
            <p className="text-slate-400 mb-4">Production RAG systems, prompt engineering, agentic workflows with LangGraph, LangChain, and multi-agent orchestration</p>
            <div className="flex flex-wrap gap-2">
              {['RAG', 'LangGraph', 'LangChain', 'Prompt Engineering', 'Vector DBs'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Full-Stack Development</h3>
            <p className="text-slate-400 mb-4">FastAPI backends, React frontends, PostgreSQL databases, Redis caching, and production-ready API development</p>
            <div className="flex flex-wrap gap-2">
              {['FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">MLOps & Cloud</h3>
            <p className="text-slate-400 mb-4">Azure AI Search, Azure Cosmos DB, MLflow experiment tracking, DVC versioning, Docker containerization</p>
            <div className="flex flex-wrap gap-2">
              {['Azure AI', 'MLflow', 'DVC', 'Docker', 'Git'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
            <p className="text-slate-400 mb-4">Scikit-learn, XGBoost, LightGBM, TensorFlow, PyTorch, feature engineering, model optimization</p>
            <div className="flex flex-wrap gap-2">
              {['Scikit-learn', 'XGBoost', 'PyTorch', 'TensorFlow', 'Pandas'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      {/* Professional Experience */}
      <div className="pt-32">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Professional Experience</h2>
        <div className="space-y-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-slate-700/50 text-center">
            <div className="flex flex-col items-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Associate Software Engineer</h3>
              <p className="text-blue-400 font-medium text-lg">CapeStart Software Pvt. Ltd</p>
              <span className="text-slate-400 mt-2">July 2024 – Present</span>
            </div>
            <ul className="space-y-4 text-slate-300 text-left max-w-3xl mx-auto">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Engineered enterprise-grade RAG chatbot with Azure OpenAI and Cosmos DB, achieving 92% semantic relevance rate across 7,000+ documents</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Designed multilingual search pipeline with Azure AI Search, reducing document lookup time by 65%</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Built Streamlit dashboard with SQL-backed conversation history, driving 40% higher user engagement</span>
              </li>
            </ul>
            <div className="mt-4 inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-sm font-medium">
              🌟 SuperStar of Q2, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      {/* Education */}
      <div className="pt-32">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Education</h2>
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-slate-700/50 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-2">B.E in Computer Science Engineering</h3>
            <p className="text-blue-400 font-medium text-lg">Arunachala College (Anna University)</p>
            <p className="text-slate-400 mt-2">CGPA: 8.8 / 10</p>
            <span className="text-slate-400 mt-2">2020 – 2024</span>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 rounded-3xl blur-2xl"></div>
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Open to full-time opportunities in GenAI, Full-Stack Development, and MLOps roles
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 9345413756</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>joevishahmergil@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProject = (key) => {
    const project = projects[key];
    return (
      <div className="space-y-8">
        {/* Project Header */}
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10 rounded-3xl blur-3xl`}></div>
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50">
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                {project.icon}
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-white mb-3">{project.title}</h1>
                <p className="text-xl text-slate-300 font-medium mb-6">{project.role}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} rounded-xl font-medium hover:scale-105 transition-all`}
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-700/50">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-6 bg-slate-900/50 rounded-2xl border border-slate-700/30">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </div>
                    <div className="text-slate-400 text-sm mt-3 font-medium uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Why I Built This */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">Why I Built This</h2>
          <p className="text-slate-300 leading-relaxed text-lg">{project.why}</p>
        </div>

        {/* What I Designed */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">What I Designed</h2>
          <div className="space-y-4">
            {project.designed.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-100 transition-all flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed flex-1">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">Key Learnings</h2>
          <div className="space-y-4">
            {project.learnings.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.color} mt-2.5 flex-shrink-0 group-hover:scale-150 transition-all`}></div>
                <p className="text-slate-300 leading-relaxed flex-1">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.split(', ').map((tech, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 bg-gradient-to-r ${project.color} bg-opacity-10 border border-slate-600 rounded-xl text-slate-200 font-medium hover:scale-105 transition-all`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-lg">
                JM
              </div>
              <span className="text-xl font-bold">Joevishah Mergil</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${activeTab === 'home'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'hover:bg-slate-800'
                  }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('mlops')}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${activeTab === 'mlops'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                  : 'hover:bg-slate-800'
                  }`}
              >
                MLOps
              </button>
              <button
                onClick={() => setActiveTab('backend')}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${activeTab === 'backend'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'hover:bg-slate-800'
                  }`}
              >
                Backend
              </button>
              <button
                onClick={() => setActiveTab('fullstack')}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${activeTab === 'fullstack'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                  : 'hover:bg-slate-800'
                  }`}
              >
                Full-Stack AI
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'mlops' && renderProject('mlops')}
        {activeTab === 'backend' && renderProject('backend')}
        {activeTab === 'fullstack' && renderProject('fullstack')}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-32">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            <p className="text-slate-400">© 2025 Joevishah Mergil S. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://github.com/joevishah2000" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/joevishah-mergil28" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:joevishahmergil@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;