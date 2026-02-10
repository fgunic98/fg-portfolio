
import { motion } from 'motion/react';
import { 
  Cloud, 
  Server, 
  GitBranch, 
  Code2, 
  FlaskConical,
  Database,
  Activity,
  Lock,
  Zap
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & Distributed Systems",
    icon: <Cloud className="w-8 h-8" />,
    skills: [
      "AWS Architecture & Serverless Systems",
      "Event-Driven Architectures",
      "High-Throughput Data Processing",
      "Distributed System Design",
      "Scalability & Cost Optimization"
    ]
  },
  {
    title: "Platform & Backend Engineering",
    icon: <Code2 className="w-8 h-8" />,
    skills: [
      "Python, JavScript/TypeScript, Java (Async & Parallel Processing)",
      "REST & GraphQL API Design",
      "Data Modeling (Relational + NoSQL)",
      "Data Pipelines & ETL Systems",
      "Workflow Orchestration (Nextflow)"
    ]
  },
  {
    title: "DevOps & Delivery Engineering",
    icon: <GitBranch className="w-8 h-8" />,
    skills: [
      "CI/CD Pipeline Design",
      "Infrastructure as Code (CDK, Terraform)",
      "Docker & Container Platforms",
      "Kubernetes & Orchestration",
      "GitOps & Automated Testing"
    ]
  },
  {
    title: "Observability & Reliability",
    icon: <Activity className="w-8 h-8" />,
    skills: [
      "Metrics, Logging & Tracing",
      "Prometheus, Grafana, Loki",
      "CloudWatch & CloudTrail",
      "Performance Optimization",
      "Failure Analysis & Resilience"
    ]
  },
  {
    title: "Security & Compliance Engineering",
    icon: <Lock className="w-8 h-8" />,
    skills: [
      "IAM, RBAC & Identity Design",
      "Encryption & Key Management",
      "Secure Cloud Architecture",
      "HIPAA / GDPR / IVDR Context",
      "Auditability & Data Protection"
    ]
  },
  {
    title: "Scientific & Applied Computing",
    icon: <FlaskConical className="w-8 h-8" />,
    skills: [
      "Bioinformatics Data Systems",
      "Scientific Visualization Platforms",
      "Statistical Validation Systems",
      "Machine Learning (Applied)",
      "Cross-disciplinary Domain Integration"
    ]
  },
  {
  title: "Linux & Systems",
  icon: <Server className="w-8 h-8" />,
  skills: [
    "Linux Server Administration",
    "Bash & Shell Scripting",
    "Process & Resource Management",
    "System Networking",
    "Container Host Management",
    "Performance & Troubleshooting"
  ]
},
];


export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-32 px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#000000] to-[#0a0e1a]" />
      
      {/* Decorative grid */}
      {/* <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div> */}
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* <div className="inline-block px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 backdrop-blur-sm mb-6">
            <span className="text-[#00d4ff] text-sm tracking-wider">EXPERTISE</span>
          </div> */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#94a3b8] bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            Systems, platforms, and engineering domains I work in
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Card glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#111827]/90 to-[#0f172a]/90 backdrop-blur-xl border border-[#00d4ff]/20 rounded-xl p-6 h-full hover:border-[#00d4ff]/50 transition-all duration-300">
                {/* Icon */}
                <div className="mb-4 text-[#00d4ff]">
                  {category.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                
                {/* Skills list */}
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-[#94a3b8] text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]/60 mr-2 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
