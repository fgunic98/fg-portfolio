
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#000000] to-[#0a0e1a]" />
      
      {/* Circuit pattern decorations */}
      {/* <div className="absolute top-20 left-10 w-40 h-40 border border-[#00d4ff]/10 rounded-xl rotate-12" /> */}
      {/* <div className="absolute bottom-20 right-10 w-32 h-32 border border-[#00d4ff]/10 rounded-xl -rotate-12" /> */}
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="inline-block px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 backdrop-blur-sm mb-6">
            <span className="text-[#00d4ff] text-sm tracking-wider">GET IN TOUCH</span>
          </div> */}
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#94a3b8] bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          
          <p className="text-xl text-[#cbd5e1] mb-12 max-w-2xl mx-auto">
            Interested in working together? 
            Let's connect.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#111827]/80 to-[#0f172a]/80 backdrop-blur-xl border border-[#00d4ff]/20 rounded-2xl p-12 mb-12"
        >
          <div className="flex flex-col gap-6">
            {/* Email */}
            <a
              href="mailto:gunic.filip@gmail.com"
              className="group flex items-center justify-center gap-4 p-6 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-[#00d4ff]" />
              <span className="text-lg text-white">gunic.filip@gmail.com</span>
              <ExternalLink className="w-4 h-4 text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/filip-gunic-397978253/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 p-6 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-[#00d4ff]" />
                <span className="text-white">LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a
                href="https://github.com/fgunic98/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 p-6 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-[#00d4ff]" />
                <span className="text-white">GitHub</span>
                <ExternalLink className="w-4 h-4 text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            onClick={() => window.location.href = 'mailto:filip.gunic@example.com'}
            className="bg-[#00d4ff] hover:bg-[#00b8e6] text-black px-10 py-6 text-lg rounded-xl shadow-lg shadow-[#00d4ff]/20 hover:shadow-[#00d4ff]/40 transition-all duration-300"
          >
            Get in Touch
          </Button>
        </motion.div> */}
      </div>
      
      {/* Footer
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 text-center mt-24 pt-12 border-t border-[#00d4ff]/10"
      >
        <p className="text-[#94a3b8] text-sm">
          © 2026 Filip Gunic. Designed with precision.
        </p>
      </motion.div> */}
    </section>
  );
};
