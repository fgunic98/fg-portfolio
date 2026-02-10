

export const NetworkPattern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, opacity: 0.04 }}
    >
      <defs>
        <pattern id="network-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
          {/* Network nodes */}
          <circle cx="25" cy="25" r="2.5" fill="#00d4ff" opacity="0.6" />
          <circle cx="75" cy="50" r="2.5" fill="#00d4ff" opacity="0.6" />
          <circle cx="125" cy="25" r="2.5" fill="#00d4ff" opacity="0.6" />
          <circle cx="50" cy="100" r="2.5" fill="#00d4ff" opacity="0.6" />
          <circle cx="100" cy="125" r="2.5" fill="#00d4ff" opacity="0.6" />
          <circle cx="125" cy="100" r="2.5" fill="#00d4ff" opacity="0.6" />
          
          {/* Network connections */}
          <line x1="25" y1="25" x2="75" y2="50" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="75" y1="50" x2="125" y2="25" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="75" y1="50" x2="50" y2="100" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="50" y1="100" x2="100" y2="125" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="100" y1="125" x2="125" y2="100" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="125" y1="25" x2="125" y2="100" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#network-pattern)" />
    </svg>
  );
};
