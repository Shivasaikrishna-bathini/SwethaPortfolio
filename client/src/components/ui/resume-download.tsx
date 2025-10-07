import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeDownload() {
  const handleOpenResume = () => {
    // TODO: Update the resume PDF path here when you change your resume
    window.open('/attached_assets/Swetha_ATS_1759862930875.pdf', '_blank');
  };

  return (
    <Button
      onClick={handleOpenResume}
      className="gap-2 bg-primary hover:bg-primary/90"
      data-testid="button-download-resume"
    >
      <ExternalLink className="w-4 h-4" />
      View Resume
    </Button>
  );
}
