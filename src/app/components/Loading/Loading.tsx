'use client';

import React, { useState, useEffect, useMemo, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { LoadingProps } from './models/Loading.interface';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { adjustOpacity, darkenColor } from '@/app/utils/colorUtils';

// Constants
const LOADING_DISPLAY_NAME = 'Loading';
const LOADING_DEFAULT_SIZE = 'md';
const LOADING_DEFAULT_VARIANT = 'spinner';

// Helper functions for loading styles
const getLoadingSizeStyles = (size: string): { width: string; height: string } => {
  const sizeMap: Record<string, { width: string; height: string }> = {
    sm: { width: '2rem', height: '2rem' },
    md: { width: '3rem', height: '3rem' },
    lg: { width: '4rem', height: '4rem' },
  };
  return sizeMap[size] || sizeMap.md;
};

const getTextSizeStyles = (size: string): { fontSize: string } => {
  const sizeMap: Record<string, { fontSize: string }> = {
    sm: { fontSize: '0.875rem' },
    md: { fontSize: '1rem' },
    lg: { fontSize: '1.125rem' },
  };
  return sizeMap[size] || sizeMap.md;
};

const getDotSizeStyles = (size: string): { width: string; height: string } => {
  const sizeMap: Record<string, { width: string; height: string }> = {
    sm: { width: '0.5rem', height: '0.5rem' },
    md: { width: '0.75rem', height: '0.75rem' },
    lg: { width: '1rem', height: '1rem' },
  };
  return sizeMap[size] || sizeMap.md;
};

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
    const overlayColor =
      customOverlayColor || adjustOpacity(darkenColor(colorConfig.secondary, 80), 0.5);

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

  const sizeStyles = getLoadingSizeStyles(size);
  const textSizeStyles = getTextSizeStyles(size);
  const dotSizeStyles = getDotSizeStyles(size);

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1005,
    backdropFilter: 'blur(4px)',
    backgroundColor: showOverlay ? loadingColors.overlay : undefined,
  };

  const contentContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  };

  const spinnerContainerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const dotsContainerStyle: CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
  };

  const pulseContainerStyle: CSSProperties = {
    position: 'relative',
  };

  const textStyle: CSSProperties = {
    ...textSizeStyles,
    color: 'white',
    fontWeight: 500,
    animation: 'pulse-text 1.5s ease-in-out infinite',
  };

  const renderSpinner = () => (
    <div style={spinnerContainerStyle}>
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
      <div className="modern-spinner" style={sizeStyles} />
    </div>
  );

  const renderDots = () => (
    <div style={dotsContainerStyle}>
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
        className="dot-1"
        style={{ ...dotSizeStyles, borderRadius: '9999px', backgroundColor: loadingColors.spinner }}
      />
      <div
        className="dot-2"
        style={{ ...dotSizeStyles, borderRadius: '9999px', backgroundColor: loadingColors.spinner }}
      />
      <div
        className="dot-3"
        style={{ ...dotSizeStyles, borderRadius: '9999px', backgroundColor: loadingColors.spinner }}
      />
    </div>
  );

  const renderPulse = () => (
    <div style={pulseContainerStyle}>
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
        @keyframes pulse-text {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
      <div style={{ position: 'relative', width: '4rem', height: '4rem' }}>
        <div
          className="pulse-core"
          style={{ ...sizeStyles, backgroundColor: loadingColors.spinner }}
        />
        <div className="pulse-ring" style={{ ...sizeStyles, width: '100%', height: '100%' }} />
      </div>
    </div>
  );

  const loadingContent = (
    <div style={overlayStyle}>
      <div style={contentContainerStyle}>
        {variant === 'spinner' && renderSpinner()}
        {variant === 'dots' && renderDots()}
        {variant === 'pulse' && renderPulse()}
        {text && <p style={textStyle}>{text}</p>}
      </div>
    </div>
  );

  return createPortal(loadingContent, document.body);
};

Loading.displayName = LOADING_DISPLAY_NAME;

export default Loading;
