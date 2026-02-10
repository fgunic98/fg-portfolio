import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from './ui/badge';
import { NetworkPattern } from './NetworkPattern';

interface Project {
  title: string;
  meta: string; // Role | Duration | Team
  description: string;
  contributions: string[]; // Short version for card
  tags: string[];
  details?: {
    scope?: string[];
    contributions?: string[]; // Extended version
  };
}

const projects: Project[] = [
  {
    title: "Large-Scale Bioinformatics Platforms",
    meta: "Full-Stack Engineer / Solution Architect / Technical Lead | 3+ years | Team: 7-10",
    description: "Cloud-native platforms for genomic data ingestion, workflow orchestration, and scientific visualization at multi-terabyte scale.",
    contributions: [
      "Designed serverless-first AWS architectures for large-scale data processing",
      "Built high-throughput ingestion pipelines and metadata systems",
      "Integrated Nextflow workflows (Tower & HealthOmics)",
      "Developed ECS-based interactive scientific visualization services",
      "Implemented authentication, authorization, and GraphQL APIs"
    ],
    tags: ["AWS", "Lambda", "ECS", "DynamoDB", "AppSync", "Nextflow", "Docker", "CDK", "Terraform"],
    details: {
      scope: [
        "Platforms processing 10+ TB datasets and millions of samples",
        "Dynamic UI generation for pipeline modules and metadata schemas",
        "Data ingestion via APIs, resumable uploads, and S3 pipelines",
        "Decoupled visualization architecture with Plotly Dash services",
        "Complex scientific metadata modeling"
      ],
      contributions: [
        "Owned DynamoDB schema and metadata architecture",
        "Designed visualization infrastructure on ECS",
        "Built dynamic UI and schema-driven configuration systems",
        "Implemented monitoring with CloudWatch, Prometheus, Grafana",
        "Authored diagrams, documentation, and test plans",
        "Collaborated closely with bioinformaticians and lab teams",
        "Optimized multiprocessing and parallel execution patterns"
      ]
    }
  },
  {
    title: "Regulated Clinical Decision & Reporting System",
    meta: "Technical Lead | ~1 year | Team: 3",
    description: "Ephemeral clinical analysis system with rule-driven validation, automated scoring, and compliance-focused reporting.",
    contributions: [
      "Designed secure ephemeral execution model (no persistent patient data)",
      "Built statistical validation engine driven by structured rule definitions",
      "Implemented biological decision-tree validation logic",
      "Led cloud security architecture and compliance alignment",
      "Built hardened CI/CD pipelines (SLSA Level 3)"
    ],
    tags: ["AWS", "Lambda", "CDK", "CloudFront", "WAF", "AWS Config", "Docker", "Python"],
    details: {
      scope: [
        "Clinical data validation and algorithmic scoring system",
        "HTML and PDF report generation",
        "Alignment with HIPAA, GDPR, IVDR, ISO, IEC standards",
        "Security-first infrastructure design"
      ],
      contributions: [
        "Designed rule-based statistical validation framework (~10 test types)",
        "Implemented decision-tree logic for biological validation",
        "Built full AWS infrastructure from scratch using CDK",
        "Designed WAF, CloudFront, Route53, AWS Config controls",
        "Led documentation for system and compliance artifacts",
        "Implemented manual approval, testing, and supply-chain controls in CI/CD"
      ]
    }
  },

  {
    title: "Applied Machine Learning Research",
    meta: "Research & Engineering ",
    description: "Machine learning models for biological sequence analysis and medical imaging.",
    contributions: [
      "Developed autoencoder models for protein sequence binding prediction",
      "Built CNN-based object detection systems for X-ray and CT images",
      "Applied deep learning to domain-specific biological datasets",
      "Optimized training and data preprocessing workflows"
    ],
    tags: ["Python", "Deep Learning", "CNN", "Autoencoders", "Bioinformatics", "tensorflow", "pytorch"]
  },
  {
    title: "Personal Open-Source Platform Engineering Projects",
    meta: "Independent / Personal Projects | Ongoing | Solo",
    description: "Self-driven infrastructure and DevOps engineering projects focused on open-source cloud-native tooling, automation, and observability.",
    contributions: [
      "Designed and deployed Kubernetes-based environments for containerized workloads",
      "Built reusable Terraform modules and infrastructure-as-code patterns",
      "Implemented CI/CD pipelines using Jenkins and GitHub Actions",
      "Deployed full observability stacks (Prometheus, Grafana, Loki)",
      "Applied infrastructure hardening, networking, and service configuration practices"
    ],
    tags: [
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Loki",
      "Docker",
      "DevOps",
      "Infrastructure"
    ],
    details: {
      scope: [
        "Hands-on experimentation with production-style platform engineering",
        "Focus on open-source ecosystem beyond managed cloud services",
        "Building repeatable, modular, and automated infrastructure setups"
      ],
      contributions: [
        "Container orchestration and workload deployment on Kubernetes",
        "Infrastructure provisioning and environment replication with Terraform",
        "Pipeline automation for build, test, and deployment workflows",
        "Metrics, logging, and monitoring system integration",
        "Continuous improvement of reliability, scalability, and automation practices"
      ]
    }
  }

];

export const ProjectsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <section id="projects" className="relative py-32 px-8">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#94a3b8] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projects.map((project, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative break-inside-avoid mb-8"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

                <div className="relative bg-[#111827]/80 backdrop-blur-xl border border-[#00d4ff]/20 rounded-2xl p-8 h-full hover:border-[#00d4ff]/40 transition-all duration-300">
                  
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-[#00d4ff]/70 mb-4">{project.meta}</p>

                  <p className="text-[#cbd5e1] mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Short Contributions */}
                  <div className="mb-6">
                    <h4 className="text-[#00d4ff] font-semibold mb-3 text-sm uppercase tracking-wider">
                      Key Contributions
                    </h4>
                    <ul className="space-y-2">
                      {project.contributions.map((c, i) => (
                        <li key={i} className="text-[#94a3b8] text-sm flex items-start">
                          <span className="text-[#00d4ff] mr-2">▹</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expand Button */}
                  {project.details && (
                    <button
                      onClick={() => toggle(index)}
                      className="text-[#00d4ff] text-sm font-medium mb-4 hover:text-white transition"
                    >
                      {isOpen ? "Hide Details" : "View Details"}
                    </button>
                  )}

                  {/* Expandable Area */}
                  <AnimatePresence initial={false}>
                    {isOpen && project.details && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden border-t border-[#00d4ff]/10 pt-4 mt-4"
                      >
                        {project.details.scope && (
                          <>
                            <h4 className="text-xs uppercase text-[#00d4ff]/70 mb-2">Scope</h4>
                            <ul className="text-sm text-[#94a3b8] space-y-1 mb-4">
                              {project.details.scope.map((s, i) => (
                                <li key={i}>• {s}</li>
                              ))}
                            </ul>
                          </>
                        )}

                        {project.details.contributions && (
                          <>
                            <h4 className="text-xs uppercase text-[#00d4ff]/70 mb-2">Extended Contributions</h4>
                            <ul className="text-sm text-[#94a3b8] space-y-1">
                              {project.details.contributions.map((c, i) => (
                                <li key={i}>• {c}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] text-xs px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};