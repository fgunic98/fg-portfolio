import React, { useMemo } from "react";

type Props = { className?: string };

export const DNAPattern: React.FC<Props> = ({ className = "" }) => {
  const W = 160;
  const H = 150;
  
  const centerX = W / 2;
  const amplitude = 100;
  const spacing = 0;
  
  const { topStrand, bottomStrand, rungs } = useMemo(() => {
    // Create a smooth sine wave using cubic Bézier curves
    const topStrand = `
      M ${centerX - spacing / 2} 0
      C ${centerX - spacing / 2 + amplitude * 0.7} ${H * 0.25},
        ${centerX - spacing / 2 + amplitude * 0.7} ${H * 0.75},
        ${centerX - spacing / 2} ${H}
      M ${centerX - spacing / 2} ${H}
      C ${centerX - spacing / 2 - amplitude * 0.7} ${H * 1.25},
        ${centerX - spacing / 2 - amplitude * 0.7} ${H * 1.75},
        ${centerX - spacing / 2} ${H * 2}
    `;
    
    const bottomStrand = `
      M ${centerX + spacing / 2} 0
      C ${centerX + spacing / 2 - amplitude * 0.7} ${H * 0.25},
        ${centerX + spacing / 2 - amplitude * 0.7} ${H * 0.75},
        ${centerX + spacing / 2} ${H}
      M ${centerX + spacing / 2} ${H}
      C ${centerX + spacing / 2 + amplitude * 0.7} ${H * 1.25},
        ${centerX + spacing / 2 + amplitude * 0.7} ${H * 1.75},
        ${centerX + spacing / 2} ${H * 2}
    `;
    
    // Create evenly spaced rungs
    const rungCount = 8;
    const rungs: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
    
    for (let i = 0; i < rungCount; i++) {
      const y = (H / rungCount) * i + H / (rungCount * 2);
      const angle = (2 * Math.PI * y) / H;
      
      rungs.push({
        x1: centerX - spacing / 2 + amplitude * Math.sin(angle),
        y1: y,
        x2: centerX + spacing / 2 + amplitude * Math.sin(angle + Math.PI),
        y2: y
      });
    }
    
    return { topStrand, bottomStrand, rungs };
  }, []);
  
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        position: "absolute", 
        inset: 0, 
        opacity: 0.03, 
        pointerEvents: "none"
      }}
    >
      <defs>
        <pattern 
          id="dna-pattern" 
          x="0" 
          y="0" 
          width={W} 
          height={H * 2} 
          patternUnits="userSpaceOnUse"
        >
          {/* Top strand */}
          <path 
            d={topStrand} 
            stroke="#00d4ff" 
            strokeWidth="1.5" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Bottom strand */}
          <path 
            d={bottomStrand} 
            stroke="#00d4ff" 
            strokeWidth="1.5" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Rungs */}
          {rungs.map(({ x1, y1, x2, y2 }, i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#00d4ff"
              strokeWidth="1"
              opacity={0.4}
              strokeLinecap="round"
            />
          ))}
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#dna-pattern)" />
    </svg>
  );
};