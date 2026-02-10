
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { NetworkPattern } from './NetworkPattern';

interface Project {
  title: string;
  description: string;
  contributions: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Cloud Bioinformatics Platform",
    description: "Scalable genomic analysis platform processing terabytes of molecular sequencing data with serverless compute orchestration.",
    contributions: [
      "Designed AWS architecture with Lambda, Step Functions, and S3",
      "Implemented CI/CD pipelines with automated testing and deployment",
      "Built secure API layer with authentication and authorization",
      "Optimized data pipelines for cost and performance"
    ],
    tags: ["AWS", "Python", "Lambda", "S3", "Step Functions", "Terraform", "Docker"]
  },
  {
    title: "Regulated Clinical Data System",
    description: "HIPAA-compliant data infrastructure for clinical research with audit trails, encryption, and access controls.",
    contributions: [
      "Architected multi-tenant secure data storage solution",
      "Implemented encryption at rest and in transit",
      "Built comprehensive logging and monitoring system",
      "Created automated compliance reporting tools"
    ],
    tags: ["AWS", "Security", "IAM", "KMS", "CloudWatch", "Terraform", "PostgreSQL"]
  },
  {
    title: "Distributed Analysis Workflow Engine",
    description: "High-throughput workflow orchestration system for parallel execution of scientific computations across containerized environments.",
    contributions: [
      "Designed event-driven microservices architecture",
      "Built container orchestration with ECS/Fargate",
      "Implemented dynamic scaling and resource optimization",
      "Created workflow DSL and execution engine"
    ],
    tags: ["AWS", "ECS", "Docker", "Python", "EventBridge", "DynamoDB", "SNS"]
  },
  {
    title: "Scientific Data API Gateway",
    description: "RESTful API serving real-time access to integrated biological databases with GraphQL federation and caching layers.",
    contributions: [
      "Developed GraphQL API with federated schema design",
      "Implemented Redis caching strategy for performance",
      "Built rate limiting and authentication middleware",
      "Created OpenAPI documentation and SDK generation"
    ],
    tags: ["Python", "FastAPI", "GraphQL", "Redis", "PostgreSQL", "Docker", "AWS"]
  },
  {
    title: "Infrastructure as Code Framework",
    description: "Modular Terraform framework for provisioning reproducible cloud environments with self-service deployment capabilities.",
    contributions: [
      "Created reusable Terraform modules for common patterns",
      "Implemented GitOps workflows with automated PR reviews",
      "Built environment promotion pipeline with validation",
      "Designed state management and secret handling strategy"
    ],
    tags: ["Terraform", "AWS", "GitHub Actions", "Python", "Vault", "Packer"]
  },
  {
    title: "Observability & Monitoring Platform",
    description: "Centralized monitoring solution aggregating metrics, logs, and traces across distributed bioinformatics services.",
    contributions: [
      "Deployed Prometheus and Grafana stack on Kubernetes",
      "Built custom exporters for domain-specific metrics",
      "Implemented distributed tracing with OpenTelemetry",
      "Created automated alerting and incident response workflows"
    ],
    tags: ["Prometheus", "Grafana", "Kubernetes", "OpenTelemetry", "CloudWatch", "Python"]
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-32 px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f172a] to-[#0a0e1a]" />
      <NetworkPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* <div className="inline-block px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 backdrop-blur-sm mb-6">
            <span className="text-[#00d4ff] text-sm tracking-wider">SELECTED WORK</span>
          </div> */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#94a3b8] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // transition={{ duration: 0.2, delay: index * 0.1 }}
              // whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
              
              {/* Card content */}
              <div className="relative bg-[#111827]/80 backdrop-blur-xl border border-[#00d4ff]/20 rounded-2xl p-8 h-full hover:border-[#00d4ff]/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h3>
                
                <p className="text-[#cbd5e1] mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-[#00d4ff] font-semibold mb-3 text-sm uppercase tracking-wider">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {project.contributions.map((contribution, i) => (
                      <li key={i} className="text-[#94a3b8] text-sm flex items-start">
                        <span className="text-[#00d4ff] mr-2 flex-shrink-0">▹</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] hover:bg-[#00d4ff]/10 text-xs px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
