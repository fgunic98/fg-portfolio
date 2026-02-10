
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { DNAPattern } from './DNAPattern';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0a0e1a] to-[#000000]" />
      
      {/* DNA Pattern overlay */}
      {/* <DNAPattern /> */}

      {/* Radial gradient spotlight effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00d4ff] opacity-5 blur-[120px] rounded-full" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            {/* <div className="inline-block px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 backdrop-blur-sm mb-8">
              <span className="text-[#00d4ff] text-sm tracking-wider">PORTFOLIO 2026</span>
            </div> */}
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {/* <span className="bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent">
              Filip Gunic
            </span> */}
            <span className="bg-[linear-gradient(115deg,#f5f5f5_0%,#dcdcdc_15%,#b8b8b8_30%,#ededed_45%,#00d4ff22_52%,#a6a6a6_60%,#e8e8e8_75%,#cfcfcf_90%,#f5f5f5_100%)] bg-[length:200%_200%] animate-[shine_10s_linear_infinite] bg-clip-text text-transparent">
              Filip Gunic
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-[#94a3b8] mb-8 font-light tracking-wide">
            Bioinformatics Solutions Architect | Cloud & DevOps Engineer
          </h2>

          <p className="text-lg md:text-xl text-[#cbd5e1] max-w-3xl mx-auto mb-12 leading-relaxed">
            Designs and engineers distributed software at the intersection of computer science, biology, and regulated environments. Building scalable data workflows, secure and compliant cloud architectures, and reliable systems for production and clinical use.
          </p>

          {/* <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-[#00d4ff] hover:bg-[#00b8e6] text-black px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#00d4ff]/20 hover:shadow-[#00d4ff]/40 transition-all duration-300"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 text-white px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Contact
            </Button>
          </div> */}
        </motion.div>
        
        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-[#00d4ff]/60" />
          </motion.div>
        </motion.div> */}
      </div>
      
      {/* Circuit-like decorative elements */}
      {/* <div className="absolute top-20 right-20 w-32 h-32 border border-[#00d4ff]/10 rounded-lg rotate-12" /> */}
      {/* <div className="absolute bottom-40 left-20 w-24 h-24 border border-[#00d4ff]/10 rounded-lg -rotate-12" /> */}
    </section>
  );
};
