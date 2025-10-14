import { FadeIn, Stagger } from "@/components/ui/framer-motion";
import { fadeInVariants, staggerVariants } from "@/components/ui/framer-motion";

const experiences = [
  {
    type: "work",
    title: "StarRez Developer",
    organization: "University of Bridgeport",
    period: "Aug 2024 – Apr 2025",
    location: "Bridgeport, CT",
    description: [
      "Managed and customized StarRez housing portal, supporting student housing operations across semesters",
      "Developed StarRez Wizards to streamline housing applications and automate deposit processing",
      "Integrated workflows with AwareManager and UpKeep portals, accelerating maintenance coordination",
      "Built automated tools for dynamic reporting using Python and AWS, boosting operational efficiency",
      "Collaborated with cross-functional campus departments to optimize data integration and user experience"
    ],
    skills: ["Python", "AWS", "Automation"],
    color: "primary"
  },
  {
    type: "education",
    title: "M.S. in Computer Science",
    organization: "University of Bridgeport",
    period: "Aug 2023 – Dec 2025",
    location: "Bridgeport, CT",
    description: [
      "Focus on Artificial Intelligence, Full-Stack Development, and Cloud Computing",
      "Relevant Coursework: Advanced Machine Learning, Cloud Computing, Software Engineering"
    ],
    skills: ["AI/ML", "Cloud Computing", "Software Engineering"],
    color: "secondary"
  },
  {
    type: "education",
    title: "BCom with Computer Science",
    organization: "Adikavi Nannaya University (AKNU)",
    period: "Jun 2019 – Jun 2023",
    location: "India",
    description: [
      "Completed coursework in Data Structures, Algorithms, Operating Systems, and Databases",
      "Academic Project: Open Banking API Aggregator for Seamless Financial Data Integration"
    ],
    skills: ["Data Structures", "Algorithms", "Databases"],
    color: "accent"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen golden-section px-6 fade-in-section">
      <div className="max-w-7xl mx-auto">
        <FadeIn variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold golden-mb text-center">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline Connector */}
          <div className="timeline-connector hidden md:block"></div>

          <Stagger variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {experiences.map((exp, index) => (
              <FadeIn 
                key={index}
                variants={fadeInVariants}
                className="mb-12 md:ml-16"
              >
                <div 
                  className={`glass p-8 rounded-xl hover:border-${exp.color}/50 transition-all cursor-pointer`}
                  data-testid={`experience-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${exp.color}/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                      {exp.type === 'work' ? (
                        <svg className={`w-6 h-6 text-${exp.color}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                      ) : (
                        <svg className={`w-6 h-6 text-${exp.color}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h3 className="text-2xl font-bold">{exp.title}</h3>
                          <p className={`text-${exp.color} font-semibold`}>{exp.organization}</p>
                        </div>
                        <span className="text-sm font-mono text-muted-foreground px-3 py-1 glass rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.location}</p>
                      
                      <ul className="space-y-3 text-muted-foreground">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <svg className={`w-4 h-4 text-${exp.color} mt-1 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`px-3 py-1 bg-${exp.color}/10 text-${exp.color} text-sm rounded-full`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
