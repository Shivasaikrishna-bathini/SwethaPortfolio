import { FileText, Download, X } from "lucide-react";
import { useLocation } from "wouter";

export default function ResumeViewer() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white" data-testid="text-resume-title">Resume</h1>
              <p className="text-sm text-slate-400" data-testid="text-resume-owner">Sai Sri Swetha Battu</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* TODO: UPDATE YOUR RESUME - Change the PDF filename below when you upload a new resume */}
            <a
              href="/attached_assets/Swetha_ATS_1760453545923.pdf"
              download
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2"
              data-testid="button-download-pdf"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <button
              onClick={() => setLocation('/')}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2"
              data-testid="button-close-viewer"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ height: 'calc(100vh - 120px)' }}>
          {/* TODO: UPDATE YOUR RESUME - Change both PDF paths below (data and src) when you upload a new resume */}
          <object
            data="/attached_assets/Swetha_ATS_1760453545923.pdf"
            type="application/pdf"
            className="w-full h-full"
            data-testid="pdf-viewer"
          >
            <iframe
              src="/attached_assets/Swetha_ATS_1760453545923.pdf"
              className="w-full h-full"
              title="Resume PDF"
              data-testid="pdf-iframe-fallback"
            />
          </object>
        </div>
      </div>
    </div>
  );
}
