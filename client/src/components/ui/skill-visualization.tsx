import { motion } from "framer-motion";

interface SkillVisualizationProps {
  skill: string;
  level: number;
  color: string;
  delay?: number;
}

export default function SkillVisualization({ skill, level, color, delay = 0 }: SkillVisualizationProps) {
  return (
    <div className="space-y-2" data-testid={`skill-viz-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            color === 'primary' ? 'bg-primary' : 
            color === 'secondary' ? 'bg-secondary' : 
            'bg-accent'
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
