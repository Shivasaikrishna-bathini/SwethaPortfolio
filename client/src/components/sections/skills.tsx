import { FadeIn, Stagger } from "@/components/ui/framer-motion";
import { fadeInVariants, staggerVariants } from "@/components/ui/framer-motion";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: "🧠",
    color: "primary",
    skills: [
      "Large Language Models",
      "Generative AI", 
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Model Fine-Tuning",
      "Prompt Engineering"
    ]
  },
  {
    title: "Programming Languages",
    icon: "💻",
    color: "secondary",
    skills: [
      "Python",
      "Java", 
      "C/C++",
      "JavaScript",
      "SQL",
      "NoSQL"
    ]
  },
  {
    title: "Frameworks & Libraries", 
    icon: "🔧",
    color: "accent",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Hugging Face",
      "LangChain",
      "FastAPI",
      "Flask",
      "Pandas",
      "NumPy"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️", 
    color: "primary",
    skills: [
      "AWS",
      "GCP",
      "Azure ML",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "MLflow",
      "Airflow"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 fade-in-section py-[6.854rem]">
      <div className="max-w-7xl mx-auto">
        <FadeIn variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-[4.236rem] text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 golden-gap mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Stagger 
              key={categoryIndex}
              variants={staggerVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
            >
              <FadeIn variants={fadeInVariants}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </h3>
              </FadeIn>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <FadeIn
                    key={skillIndex}
                    variants={fadeInVariants}
                    whileHover={{ scale: 1.1 }}
                    className={`skill-badge px-4 py-2 glass rounded-lg text-sm font-mono hover:border-${category.color}/50 cursor-pointer transition-all`}
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className={`inline-block w-2 h-2 bg-${category.color} rounded-full mr-2`}></span>
                    {skill}
                  </FadeIn>
                ))}
              </div>
            </Stagger>
          ))}
        </div>
      </div>
    </section>
  );
}
