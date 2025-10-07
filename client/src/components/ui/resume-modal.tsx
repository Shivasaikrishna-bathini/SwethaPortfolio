import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh]" data-testid="modal-resume">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold">Resume</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="flex-1 h-full mt-4">
          <iframe
            src="/attached_assets/Swetha_AI_Engineer_1759779780112.pdf"
            className="w-full h-full rounded-lg border border-border"
            title="Resume PDF"
            data-testid="iframe-resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
