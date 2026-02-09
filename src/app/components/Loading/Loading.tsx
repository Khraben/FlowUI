'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { LoadingProps } from './models/Loading.interface';
import {
  LOADING_OVERLAY_BASE,
  LOADING_SIZES,
  LOADING_TEXT_SIZES,
  LOADING_DOT_SIZES,
  LOADING_DEFAULT_SIZE,
  LOADING_DEFAULT_VARIANT,
  LOADING_DISPLAY_NAME,
} from '@/app/constants/components/loading/styles.constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { adjustOpacity, darkenColor } from '@/app/utils/colorUtils';

export const Loading: React.FC<LoadingProps> = ({
  text,
  size = LOADING_DEFAULT_SIZE,
  variant = LOADING_DEFAULT_VARIANT,
  colors,
  customOverlayColor,
  customSpinnerColor,
  showOverlay = true,
}) => {
  // Use default colors if not provided
  const colorConfig = colors || DEFAULT_COLOR_CONFIG;

  // Calculate dynamic colors
  const loadingColors = useMemo(() => {
    const spinnerColor = customSpinnerColor || colorConfig.primary;
    const overlayColor = customOverlayColor || adjustOpacity(darkenColor(colorConfig.secondary, 80), 0.5);

    return {
      spinner: spinnerColor,
      overlay: overlayColor,
    };
  }, [colorConfig, customSpinnerColor, customOverlayColor]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous state update
    const timer = setTimeout(() => setMounted(true), 0);
    return () => {
      clearTimeout(timer);
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  const sizeClass = LOADING_SIZES[size];
  const textSizeClass = LOADING_TEXT_SIZES[size];
  const dotSizeClass = LOADING_DOT_SIZES[size];

  const renderSpinner = () => (
    <div className="flex items-center justify-center">
      <style>{`
        @keyframes spin-modern {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.8; }
          50% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(0.8); opacity: 0.8; }
        }
        .modern-spinner {
          border: 3px solid transparent;
          border-top-color: ${loadingColors.spinner};
          border-right-color: ${loadingColors.spinner};
          border-radius: 50%;
          animation: spin-modern 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          position: relative;
        }
        .modern-spinner::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border: 3px solid ${loadingColors.spinner}20;
          border-radius: 50%;
          animation: pulse-ring 1.5s ease-in-out infinite;
        }
      `}</style>
      <div className={`modern-spinner ${sizeClass}`} />
    </div>
  );

  const renderDots = () => (
    <div className="flex gap-2">
      <style>{`
        @keyframes bounce-dot {
          0%, 80%, 100% { transform: translateY(0) scale(1); }
          40% { transform: translateY(-10px) scale(1.1); }
        }
        .dot-1 { animation: bounce-dot 1.4s infinite ease-in-out; }
        .dot-2 { animation: bounce-dot 1.4s infinite ease-in-out 0.2s; }
        .dot-3 { animation: bounce-dot 1.4s infinite ease-in-out 0.4s; }
      `}</style>
      <div
        className={`${dotSizeClass} rounded-full dot-1`}
        style={{ backgroundColor: loadingColors.spinner }}
      />
      <div
        className={`${dotSizeClass} rounded-full dot-2`}
        style={{ backgroundColor: loadingColors.spinner }}
      />
      <div
        className={`${dotSizeClass} rounded-full dot-3`}
        style={{ backgroundColor: loadingColors.spinner }}
      />
    </div>
  );

  const renderPulse = () => (
    <div className="relative">
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(0.8); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        @keyframes pulse-outer {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .pulse-core {
          border-radius: 50%;
          animation: pulse-scale 1.5s ease-in-out infinite;
        }
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px solid ${loadingColors.spinner};
          animation: pulse-outer 1.5s ease-out infinite;
        }
      `}</style>
      <div className="relative" style={{ width: '4rem', height: '4rem' }}>
        <div
          className={`pulse-core ${sizeClass}`}
          style={{ backgroundColor: loadingColors.spinner }}
        />
        <div className={`pulse-ring ${sizeClass}`} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );

  const loadingContent = (
    <div
      className={LOADING_OVERLAY_BASE}
      style={showOverlay ? { backgroundColor: loadingColors.overlay } : undefined}
    >
      <div className="flex flex-col items-center gap-4">
        {variant === 'spinner' && renderSpinner()}
        {variant === 'dots' && renderDots()}
        {variant === 'pulse' && renderPulse()}
        {text && <p className={`${textSizeClass} text-white font-medium animate-pulse`}>{text}</p>}
      </div>
    </div>
  );

  return createPortal(loadingContent, document.body);
};

Loading.displayName = LOADING_DISPLAY_NAME;

export default Loading;
