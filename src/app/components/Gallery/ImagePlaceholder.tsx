import React from 'react';

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = 400,
  height = 300,
  backgroundColor = '#2a2d31',
}) => {
  const iconColor = '#4a4d51';
  const iconSize = Math.min(width, height) * 0.15;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Background */}
      <rect width={width} height={height} fill={backgroundColor} />

      {/* Animated gradient overlay */}
      <defs>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={backgroundColor} stopOpacity="1">
            <animate attributeName="offset" values="-1; 1" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#3a3d41" stopOpacity="1">
            <animate attributeName="offset" values="-0.5; 1.5" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={backgroundColor} stopOpacity="1">
            <animate attributeName="offset" values="0; 2" dur="2s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>

      <rect width={width} height={height} fill="url(#shimmer)" opacity="0.3" />

      {/* Image icon */}
      <g transform={`translate(${centerX - iconSize / 2}, ${centerY - iconSize / 2})`}>
        {/* Mountain/landscape icon */}
        <path
          d={`
            M ${iconSize * 0.1} ${iconSize * 0.8}
            L ${iconSize * 0.35} ${iconSize * 0.4}
            L ${iconSize * 0.55} ${iconSize * 0.6}
            L ${iconSize * 0.75} ${iconSize * 0.25}
            L ${iconSize * 0.9} ${iconSize * 0.8}
            Z
          `}
          fill={iconColor}
        />

        {/* Sun/moon circle */}
        <circle
          cx={iconSize * 0.25}
          cy={iconSize * 0.3}
          r={iconSize * 0.12}
          fill={iconColor}
          opacity="0.7"
        />
      </g>
    </svg>
  );
};
