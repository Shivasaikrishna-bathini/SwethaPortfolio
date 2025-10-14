import { useState } from "react";
import { FadeIn, Stagger } from "@/components/ui/framer-motion";
import { fadeInVariants, staggerVariants } from "@/components/ui/framer-motion";
import ProjectModal from "@/components/ui/project-modal";

// TODO: UPDATE YOUR PROJECTS - Edit title, description, tags, and other project details below
// To add a project link: Change "link: null" to "link: 'your-github-or-demo-url'"
const projects = [
  {
    id: 1,
    title: "Cognitive HOI Reasoning", // TODO: Edit project title here
    period: "Apr 2023 – Mar 2024",
    description: "Research project investigating human-object interaction models on Bongard-HOI and HAKE datasets, bridging cognitive paradigms in computer vision.", // TODO: Edit project description here
    tags: ["Computer Vision", "DVRL", "Deep Learning"], // TODO: Edit project tags here
    icon: "🧠",
    metric: "80% Accuracy",
    color: "primary",
    link: null, // TODO: ADD PROJECT LINK - Replace null with your GitHub repo or live demo URL (e.g., "https://github.com/username/repo")
    details: [
      "Investigated human-object interaction models on Bongard-HOI and HAKE datasets",
      "Identified reasoning gaps between synthetic and real-world image understanding",
      "Applied DVRL (Data Valuation using Reinforcement Learning) and Componential Analysis techniques"
    ],
    techStack: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "DVRL", "Deep Learning"],
    outcomes: [
      "Raised model accuracy from 55% to 80% through advanced techniques",
      "Contributed novel insights into bridging cognitive paradigms in computer vision",
      "Published findings applicable to real-world AI systems"
    ]
  },
  {
    id: 2,
    title: "Personal Attorney – Legal RAG",
    period: "Apr 2024 – Nov 2024",
    description: "RAG system providing state-specific DMV/legal information. Implemented with ChromaDB, LangChain, FastAPI, and DeepSeek 8B with LoRA fine-tuning.",
    tags: ["RAG", "LangChain", "FastAPI", "LoRA"],
    icon: "⚖️",
    metric: "ChromaDB",
    color: "secondary",
    link: null, // TODO: Add GitHub repo or live demo link here
    details: [
      "Built a Retrieval-Augmented Generation (RAG) system for state-specific DMV and legal information",
      "Implemented scalable vector database architecture with ChromaDB",
      "Fine-tuned DeepSeek 8B model using LoRA for domain-specific legal queries"
    ],
    techStack: ["ChromaDB", "LangChain", "FastAPI", "DeepSeek 8B", "LoRA", "Python", "Vector DB"],
    outcomes: [
      "Reduced expensive LLM retraining costs through RAG architecture",
      "Enabled scalable updates without full model retraining",
      "Delivered practical support for immigrants navigating complex legal frameworks"
    ]
  },
  {
    id: 3,
    title: "SmartMed AI – Pill Detection",
    period: "Jan 2025 – Aug 2025",
    description: "Computer vision pipeline using YOLO (v5–v12), multi-scale detection, and attention modules for pharmaceutical applications with frame-to-frame tracking.",
    tags: ["YOLO", "PyTorch", "OpenCV", "AWS"],
    icon: "💊",
    metric: "Computer Vision",
    color: "accent",
    link: null, // TODO: Add GitHub repo or live demo link here
    details: [
      "Developed comprehensive computer vision pipeline using YOLO versions 5 through 12",
      "Implemented multi-scale detection and attention modules for accurate pill identification",
      "Built frame-to-frame tracking system to handle overlapping pills in pharmaceutical settings"
    ],
    techStack: ["YOLO", "PyTorch", "OpenCV", "ResNet", "FastAPI", "AWS", "Computer Vision"],
    outcomes: [
      "Deployed solution for pharmacies improving operational accuracy",
      "Enhanced reliability in pill recognition tasks through advanced tracking",
      "Reduced manual verification time in pharmaceutical workflows"
    ]
  },
  {
    id: 4,
    title: "Time-Series Forecasting",
    period: "Sep 2025 – Present",
    description: "Stock market analysis using advanced forecasting models. Comparing traditional ARIMA/SARIMA with Meta's Prophet and XGBoost ensembles for volatile financial data.",
    tags: ["ARIMA", "Prophet", "XGBoost"],
    icon: "📈",
    metric: "Ongoing",
    color: "primary",
    link: null, // TODO: Add GitHub repo or live demo link here
    details: [
      "Designed forecasting models for volatile financial time-series data",
      "Compared traditional statistical methods (ARIMA/SARIMA) with modern ML approaches",
      "Implemented ensemble methods using XGBoost and Meta's Prophet for improved predictions"
    ],
    techStack: ["ARIMA", "SARIMA", "Meta Prophet", "XGBoost", "Python", "Pandas", "NumPy", "Time-Series Analysis"],
    outcomes: [
      "Improved accuracy in predicting market fluctuations under high volatility conditions",
      "Identified optimal forecasting techniques for different market conditions",
      "Currently refining models for production deployment"
    ]
  },
  {
    id: 5,
    title: "Custom Sanskrit Transformer",
    period: "Jun 2025 – Aug 2025",
    description: "Advanced NLP model trained on ancient Sanskrit Vedic texts with custom 25,000-token vocabulary. Optimized with NVIDIA GPUs, CUDA, cuDNN, and TensorRT for production deployment.",
    tags: ["Transformers", "CUDA", "TensorRT", "NLP"],
    icon: "📜",
    metric: "46% Faster",
    color: "secondary",
    link: null, // TODO: Add GitHub repo or live demo link here
    details: [
      "Built and trained a Transformer-based NLP model on ancient Sanskrit Vedic texts with custom 25,000-token vocabulary",
      "Optimized inference and training using NVIDIA GPUs, CUDA, cuDNN, and integrated TensorRT",
      "Engineered kernel-level performance tuning, system profiling, and benchmarking for scalable deployment"
    ],
    techStack: ["PyTorch", "Transformers", "CUDA", "cuDNN", "TensorRT", "NVIDIA GPUs", "Python", "NLP"],
    outcomes: [
      "Reduced inference latency by 46% and boosted throughput by 39% over baseline",
      "Delivered robust real-time serving pipeline with <75ms inference times",
      "Achieved production-grade deployment with optimized matrix multiplications for efficient attention"
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="min-h-screen px-6 fade-in-section" style={{ paddingTop: 'var(--space-phi-4)', paddingBottom: 'var(--space-phi-4)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold golden-mb text-center">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </FadeIn>

          <Stagger variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid md:grid-cols-2 golden-gap">
              {projects.map((project) => (
                <FadeIn 
                  key={project.id}
                  variants={fadeInVariants}
                  className={`project-card glass p-8 rounded-xl cursor-pointer group hover:border-${project.color}/50`}
                  data-testid={`project-card-${project.id}`}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-${project.color}/20 rounded-lg flex items-center justify-center group-hover:bg-${project.color}/30 transition-colors text-2xl`}>
                      {project.icon}
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{project.period}</span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 group-hover:text-${project.color} transition-colors`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 bg-${project.color}/10 text-${project.color} text-sm rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg className={`w-4 h-4 text-${project.color}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{project.metric}</span>
                    </div>
                    <svg className={`w-5 h-5 ml-auto text-${project.color} group-hover:translate-x-2 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
