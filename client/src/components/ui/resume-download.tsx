import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Swetha_AI_Engineer_1759779780112.pdf';
    link.download = 'Sai_Sri_Swetha_Battu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className="gap-2 bg-primary hover:bg-primary/90"
      data-testid="button-download-resume"
    >
      <Download className="w-4 h-4" />
      Download Resume
    </Button>
  );
}
