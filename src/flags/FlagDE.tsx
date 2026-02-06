import React from 'react';

export const FlagDE = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 496 496" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#F8D12E"
      d="M0,304v65.6C0,396.8,21.6,416,48,416h400c26.4,0,48-19.2,48-46.4V304H0z"
    />
    <path
      fill="#333333"
      d="M448,80H48C21.6,80,0,99.2,0,126.4V192h496v-65.6C496,99.2,474.4,80,448,80z"
    />
    <rect y="192" fill="#DB2727" width="496" height="112" />
    <path fill="#DBB30F" d="M446.4,416c26.4,0,49.6-19.2,49.6-46.4V304H315.2L446.4,416z" />
    <path fill="#202121" d="M448,80H48l132.8,112H496v-65.6C496,99.2,474.4,80,448,80z" />
    <polygon fill="#C10E0E" points="316,304 496,304 496,192 180,192" />
    <path d="M448,80H48l370.4,112H496v-65.6C496,99.2,474.4,80,448,80z" />
    <polygon fill="#A00808" points="496,214.4 496,192 414.4,192" />
    <path fill="#D89F12" d="M496,368.8c0,29.6-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48" />
  </svg>
);
