import React from 'react';

export const FlagJA = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 496 496" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#FFFFFF"
      d="M496,369.6c0,27.2-21.6,46.4-48,46.4H48c-26.4,0-48-19.2-48-46.4V126.4C0,99.2,21.6,80,48,80h400c26.4,0,48,19.2,48,46.4V369.6z"
    />
    <path fill="#E9F3F4" d="M48,80h400c26.4,0,48,19.2,48,46.4v243.2c0,27.2-25.6,46.4-52,46.4" />
    <path fill="#D9ECED" d="M496,368.8c0,27.2-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48" />
    <path fill="#D9ECED" d="M48,80h400c26.4,0,48,19.2,48,46.4V216" />
    <circle fill="#EC1C24" cx="248" cy="248" r="103.2" />
    <path fill="#CE0909" d="M175.2,175.2c40-40,105.6-40,146.4,0c40,40,40,105.6,0,146.4" />
  </svg>
);
