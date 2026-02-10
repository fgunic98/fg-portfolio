import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d4ff] via-[#0080ff] to-[#00d4ff] origin-left z-50 shadow-lg shadow-[#00d4ff]/50"
      style={{ scaleX }}
    />
  );
};
