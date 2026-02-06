import React from 'react';

export const FlagIT = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 496 496" xmlns="http://www.w3.org/2000/svg">
    <rect x="160" y="80" fill="#EBF7F7" width="176" height="336" />
    <path
      fill="#359846"
      d="M160,80H48C21.6,80,0,99.2,0,126.4v243.2C0,396.8,21.6,416,48,416h112V80z"
    />
    <path
      fill="#EF4C4C"
      d="M448,80H336v336h112c26.4,0,48-19.2,48-46.4V126.4C496,99.2,474.4,80,448,80z"
    />
    <path
      fill="#DD4545"
      d="M448,80H336v240.8L446.4,416c26.4,0,49.6-19.2,49.6-46.4V126.4C496,99.2,474.4,80,448,80z"
    />
    <polygon fill="#E2F2F1" points="336,320.8 336,80 160,80 160,175.2" />
    <polygon fill="#258933" points="160,80 48,80 160,175.2" />
    <path fill="#CC3E3E" d="M336,416h112c26.4,0,48-16,48-48H336V416z" />
    <rect x="160" y="368" fill="#D6EAE8" width="176" height="48" />
    <path fill="#15721E" d="M0,368c0,32,21.6,48,48,48h112v-48H0z" />
    <path fill="#CC3E3E" d="M448,80H336v84.8l160,49.6v-88C496,99.2,474.4,80,448,80z" />
    <polygon fill="#D6EAE8" points="336,164.8 336,80 160,80 160,112.8" />
    <polygon fill="#15721E" points="160,80 48,80 160,112.8" />
  </svg>
);
