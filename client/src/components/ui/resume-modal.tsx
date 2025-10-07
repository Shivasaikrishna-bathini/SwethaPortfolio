import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-0 gap-0 bg-slate-900 dark:bg-slate-950" data-testid="modal-resume">
        <DialogHeader className="px-6 py-4 bg-slate-900 dark:bg-slate-950 border-b border-slate-700 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-orange-500" />
            <DialogTitle className="text-xl font-semibold text-white dark:text-white">Resume</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="flex-1 h-full p-6 bg-slate-900 dark:bg-slate-950">
          <iframe
            src="/attached_assets/Swetha_ATS_1759862930875.pdf"
            className="w-full h-full rounded-lg bg-white"
            title="Resume PDF"
            data-testid="iframe-resume"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
