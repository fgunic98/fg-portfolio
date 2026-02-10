
import { motion } from 'motion/react';
import { Dna, CloudCog, Shield, Database } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const focusAreas = [
    {
      icon: <Dna className="w-6 h-6" />,
      title: "Computational Biology Systems",
      description: "Engineering software systems that support biological and molecular analysis"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulated & Clinical Engineering",
      description: "Designing secure, compliant systems for healthcare and clinical environments"
    },
    {
      icon: <CloudCog className="w-6 h-6" />,
      title: "Distributed Cloud Architecture",
      description: "Event-driven, serverless, and container-based system design"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data & Workflow Systems",
      description: "High-throughput pipelines, orchestration, and validation frameworks"
    }
  ];


  return (
    <section id="about" className="relative py-32 px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f172a] to-[#0a0e1a]" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d4ff] opacity-5 blur-[150px] rounded-full" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-block px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 backdrop-blur-sm mb-6">
            <span className="text-[#00d4ff] text-sm tracking-wider">PROFESSIONAL PROFILE</span>
          </div> */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-[#94a3b8] bg-clip-text text-transparent">
              About
            </span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-[#111827]/80 to-[#0f172a]/80 backdrop-blur-xl border border-[#00d4ff]/20 rounded-2xl p-10">

            <h2 className="flex justify-center text-2xl md:text-3xl text-[#94a3b8] mb-2 font-light tracking-wide">
              5+ years expirience | BSc Computer Science
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[#94a3b8] text-lg md:text-xl font-light tracking-wide text-center mb-6 pr-14">
              <span>AWS Certified Solutions Architect - Associate</span>
              <span className="hidden sm:inline ">|</span>
              <span>AWS Certified Machine Learning - Associate</span>
            </div>
            <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6 text-center">
              I design and engineer <span className="text-[#00d4ff] font-semibold">distributed software systems</span> that apply computer science principles to biological and clinical problems. My work spans data-intensive processing, algorithm execution environments, validation systems, and cloud-native architectures that support scientific discovery and healthcare use cases.
            </p>

            <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6 text-center">
              I lead the architecture and implementation of <span className="text-white font-semibold">serverless and container-based systems</span>, high-throughput data workflows, and secure execution environments. This includes close collaboration with scientists and laboratory teams to translate domain-specific constraints into reliable, scalable and cost-effective technical solutions.
            </p>

            <p className="text-lg text-[#cbd5e1] leading-relaxed text-center">
              My focus is on building systems that are not only scalable and performant, but also <span className="text-white font-semibold">auditable, reproducible, and secure by design</span> — combining infrastructure as code, event-driven architectures, CI/CD automation, observability practices, and strong validation logic to deliver production-grade scientific software.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
              
              <div className="relative bg-[#111827]/60 backdrop-blur-xl border border-[#00d4ff]/20 rounded-xl p-6 hover:border-[#00d4ff]/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {area.title}
                    </h3>
                    <p className="text-[#94a3b8]">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
