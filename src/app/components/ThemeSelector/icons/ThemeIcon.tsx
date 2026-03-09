type ThemeIconProps = {
  mode: 'light' | 'dark';
  size?: number;
  className?: string;
};

export const ThemeIcon = ({ mode, size = 24, className }: ThemeIconProps) => {
  const zoomAnimation = `
      @keyframes zoomInSun {
        0% { 
          transform: scale(0.7) rotate(-90deg); 
          opacity: 0; 
        }
        60% { 
          transform: scale(1.15) rotate(0deg); 
          opacity: 1; 
        }
        100% { 
          transform: scale(1) rotate(0deg); 
          opacity: 1; 
        }
      }

      @keyframes zoomInMoon {
        0% { 
          transform: scale(0.7) rotate(90deg); 
          opacity: 0; 
        }
        60% { 
          transform: scale(1.15) rotate(0deg); 
          opacity: 1; 
        }
        100% { 
          transform: scale(1) rotate(0deg); 
          opacity: 1; 
        }
      }

      @keyframes zoomOutSun {
        0% { 
          transform: scale(1) rotate(0deg); 
          opacity: 1; 
        }
        100% { 
          transform: scale(0.7) rotate(90deg); 
          opacity: 0; 
        }
      }

      @keyframes zoomOutMoon {
        0% { 
          transform: scale(1) rotate(0deg); 
          opacity: 1; 
        }
        100% { 
          transform: scale(0.7) rotate(-90deg); 
          opacity: 0; 
        }
      }
    `;

  return (
    <>
      <style>{zoomAnimation}</style>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g
          style={{
            transformOrigin: 'center',
            animation:
              mode === 'light'
                ? 'zoomInSun 0.5s ease-out forwards'
                : 'zoomOutSun 0.4s ease-in forwards',
          }}
        >
          <circle cx="12" cy="12" r="4" fill="#E6B95C" />
          <path d="M12 2L13.5 6.5L12 5L10.5 6.5L12 2Z" fill="#E6B95C" />
          <path d="M12 22L13.5 17.5L12 19L10.5 17.5L12 22Z" fill="#E6B95C" />
          <path d="M2 12L6.5 10.5L5 12L6.5 13.5L2 12Z" fill="#E6B95C" />
          <path d="M22 12L17.5 10.5L19 12L17.5 13.5L22 12Z" fill="#E6B95C" />
          <path d="M5.6 5.6L9.2 9.2L7.8 7.8L9.2 6.4L5.6 5.6Z" fill="#E6B95C" />
          <path d="M18.4 18.4L14.8 14.8L16.2 16.2L14.8 17.6L18.4 18.4Z" fill="#E6B95C" />
          <path d="M18.4 5.6L14.8 9.2L16.2 7.8L14.8 6.4L18.4 5.6Z" fill="#E6B95C" />
          <path d="M5.6 18.4L9.2 14.8L7.8 16.2L9.2 17.6L5.6 18.4Z" fill="#E6B95C" />
        </g>

        <g
          style={{
            transformOrigin: 'center',
            animation:
              mode === 'dark'
                ? 'zoomInMoon 0.5s ease-out forwards'
                : 'zoomOutMoon 0.4s ease-in forwards',
          }}
        >
          <path
            d="M20 15.31C18.76 16.42 17.11 17.1 15.3 17.1C11.42 17.1 8.28 13.96 8.28 10.08C8.28 8.27 8.96 6.62 10.07 5.38C6.12 6.05 3.18 9.52 3.18 13.68C3.18 18.27 6.91 22 11.5 22C15.66 22 19.13 19.06 19.8 15.11L20 15.31Z"
            fill="#C9D1D9"
          />
          <circle cx="11" cy="9" r="1.2" fill="#C9D1D9" opacity="0.6" />
          <circle cx="14" cy="11" r="0.8" fill="#C9D1D9" opacity="0.5" />
          <circle cx="9.5" cy="13" r="1.5" fill="#C9D1D9" opacity="0.4" />
          <path d="M15 7L15.8 8.5L15 8L14.2 8.5L15 7Z" fill="#C9D1D9" opacity="0.7" />
          <path d="M17.5 11L18.2 12.2L17.5 11.8L16.8 12.2L17.5 11Z" fill="#C9D1D9" opacity="0.6" />
        </g>
      </svg>
    </>
  );
};
