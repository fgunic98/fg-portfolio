
import { motion } from 'motion/react';
import { FileText, Download } from 'lucide-react';
import { Button } from './ui/button';
import cvPdfUrl from "../../assets/Cloud Backend & DevOps Engineer.pdf";

export const DownloadCVSection: React.FC = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPdfUrl;
    link.download = "Cloud Backend & DevOps Engineer.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="cv" className="relative py-32 px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f172a] to-[#0a0e1a]" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#94a3b8] bg-clip-text text-transparent">
              Curriculum Vitae
            </span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] via-[#0080ff] to-[#00d4ff] rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500" />
          
          <div className="relative bg-gradient-to-br from-[#111827]/90 to-[#0f172a]/90 backdrop-blur-xl border-2 border-[#00d4ff]/30 rounded-2xl p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00d4ff]/20 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00d4ff]/20 rounded-br-2xl" />
            
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/30">
                <FileText className="w-16 h-16 text-[#00d4ff]" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg text-[#cbd5e1] leading-relaxed max-w-2xl mx-auto">
                Download my full professional CV including detailed experience, certifications, 
                technical proficiencies, and comprehensive project portfolio.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button
                onClick={handleDownload}
                className="group/btn bg-[#00d4ff] hover:bg-[#00b8e6] text-black px-10 py-6 text-lg rounded-xl shadow-xl shadow-[#00d4ff]/30 hover:shadow-[#00d4ff]/50 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-3 group-hover/btn:animate-bounce" />
                Download CV (PDF)
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#00d4ff]/10">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-[#94a3b8]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff]/60" />
                  <span>Last updated: February 2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
