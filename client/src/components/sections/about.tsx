import { FadeIn, Stagger } from "@/components/ui/framer-motion";
import { fadeInVariants, staggerVariants } from "@/components/ui/framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 fade-in-section py-[6.854rem]">
      <div className="max-w-7xl mx-auto">
        <FadeIn variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-[4.236rem] text-center">
            About <span className="gradient-text">Me</span>
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 golden-gap items-center mb-16">
          <FadeIn 
            variants={fadeInVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                GenAI Engineer with 3+ years of experience architecting, developing, and deploying scalable AI-driven web applications, 
                specializing in <span className="text-primary font-semibold">Agentic AI</span> and <span className="text-secondary font-semibold">multi-agent systems</span> for enterprise solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Demonstrated expertise in building <span className="text-accent font-semibold">Model Context Protocol (MCP)</span> and 
                <span className="text-primary font-semibold"> Agent-to-Agent (A2A)</span> integrations, as well as 
                <span className="text-secondary font-semibold"> CrewAI frameworks</span> for advanced automation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently focused on applying AI/ML and full-stack engineering to deliver innovative, production-ready, 
                and domain-specific AI solutions for manufacturing, supply chain, and digital transformation.
              </p>
            </div>
          </FadeIn>
          
          <Stagger variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="space-y-4">
              <FadeIn variants={fadeInVariants} className="glass p-6 rounded-xl hover:border-primary/50 transition-all cursor-pointer" data-testid="card-ai-systems">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">AI Systems</h3>
                </div>
                <p className="text-muted-foreground">Expert in RAG pipelines, LLM fine-tuning, and multi-agent architectures</p>
              </FadeIn>

              <FadeIn variants={fadeInVariants} className="glass p-6 rounded-xl hover:border-secondary/50 transition-all cursor-pointer" data-testid="card-fullstack-dev">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Full-Stack Development</h3>
                </div>
                <p className="text-muted-foreground">Proficient in Python, JavaScript, SQL, and modern web frameworks</p>
              </FadeIn>

              <FadeIn variants={fadeInVariants} className="glass p-6 rounded-xl hover:border-accent/50 transition-all cursor-pointer" data-testid="card-cloud-devops">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
                </div>
                <p className="text-muted-foreground">AWS, GCP, Azure expertise with Docker, Kubernetes, and CI/CD</p>
              </FadeIn>
            </div>
          </Stagger>
        </div>

        <Stagger variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="grid md:grid-cols-3 golden-gap text-center">
            <FadeIn variants={fadeInVariants} className="glass p-8 rounded-xl" data-testid="stat-experience">
              <div className="text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </FadeIn>
            <FadeIn variants={fadeInVariants} className="glass p-8 rounded-xl" data-testid="stat-efficiency">
              <div className="text-4xl font-bold gradient-text mb-2">25%</div>
              <div className="text-muted-foreground">System Efficiency Boost</div>
            </FadeIn>
            <FadeIn variants={fadeInVariants} className="glass p-8 rounded-xl" data-testid="stat-projects">
              <div className="text-4xl font-bold gradient-text mb-2">4+</div>
              <div className="text-muted-foreground">Major Projects</div>
            </FadeIn>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
