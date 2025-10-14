import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X, Github, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    period: string;
    description: string;
    tags: string[];
    icon: string;
    metric: string;
    color: string;
    details?: string[];
    techStack?: string[];
    outcomes?: string[];
    // TODO: Uncomment these when you add links to your projects
    // githubLink?: string;
    // websiteLink?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto" data-testid={`modal-project-${project.id}`}>
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 bg-${project.color}/20 rounded-lg flex items-center justify-center text-3xl`}>
                {project.icon}
              </div>
              <div>
                <DialogTitle className="text-3xl font-bold mb-2">{project.title}</DialogTitle>
                <p className="text-muted-foreground font-mono text-sm">{project.period}</p>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* TODO: UNCOMMENT THIS SECTION WHEN YOU ADD LINKS TO YOUR PROJECTS */}
        {/* Project Links Section */}
        {/* {(project.githubLink || project.websiteLink) && (
          <div className="flex flex-wrap gap-3 mt-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-${project.color}/10 hover:bg-${project.color}/20 text-${project.color} transition-colors group`}
                data-testid={`link-github-${project.id}`}
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">View on GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
            {project.websiteLink && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-${project.color}/10 hover:bg-${project.color}/20 text-${project.color} transition-colors group`}
                data-testid={`link-website-${project.id}`}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Live Demo</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
          </div>
        )} */}

        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {project.details && project.details.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Details</h3>
              <ul className="space-y-2">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <svg className={`w-5 h-5 text-${project.color} mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className={`bg-${project.color}/10 text-${project.color} hover:bg-${project.color}/20`}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Outcomes & Impact</h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <svg className={`w-5 h-5 text-${project.color} mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="font-mono">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
