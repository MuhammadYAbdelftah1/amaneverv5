import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="256" cy="256" r="240" fill="#4d8080" />
      
      {/* Inner White Ring */}
      <circle cx="256" cy="256" r="190" stroke="white" strokeWidth="10" fill="none" opacity="0.8" />
      <circle cx="256" cy="256" r="175" stroke="white" strokeWidth="4" fill="none" opacity="0.5" />

      {/* Heartbeat / EKG Line */}
      <path
        d="M120 256H180L210 180L250 340L290 220L320 280L340 256H380"
        stroke="white"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* The Circle at the end of the heartbeat line */}
      <circle cx="400" cy="256" r="25" fill="white" />
      <circle cx="400" cy="256" r="15" fill="#4d8080" />

      {/* Arabic Text "إيفر" - Moved up and made larger */}
      <text
        x="256"
        y="420"
        fill="white"
        fontSize="110"
        fontWeight="900"
        textAnchor="middle"
        fontFamily="'Cairo', sans-serif"
        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}
      >
        إيفر
      </text>
    </svg>
  );
};

export default Logo;
