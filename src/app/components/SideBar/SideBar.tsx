'use client';

import { useState, useCallback, useMemo, CSSProperties, useEffect } from 'react';
import { SideBarProps, SideBarMenuItem } from './models/SideBar.interface';
import { DEFAULT_COLOR_CONFIG, hasExtendedColors } from '@/app/types/colors';
import { adjustOpacity, getContrastColor, lightenColor } from '@/app/utils/colorUtils';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';

const SIDEBAR_DISPLAY_NAME = 'SideBar';

const getContainerStyles = (
  isOpen: boolean,
  openWidth: string,
  closedWidth: string,
  backgroundColor: string,
): CSSProperties => ({
  position: 'fixed' as const,
  top: 0,
  left: 0,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  boxShadow: `0.125rem 0 0.3125rem ${adjustOpacity('#000', 0.2)}`,
  transition: 'width 300ms ease-in-out',
  zIndex: 100,
  overflowY: 'auto' as const,
  overflowX: 'visible' as const,
  paddingTop: '3.75rem',
  paddingBottom: '1.25rem',
  paddingLeft: 0,
  paddingRight: 0,
  width: isOpen ? openWidth : closedWidth,
  backgroundColor,
});

const getListStyles = (): CSSProperties => ({
  listStyle: 'none',
  width: '100%',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column' as const,
  flex: 1,
});

const getListItemStyles = (): CSSProperties => ({
  width: '100%',
  position: 'relative' as const,
});

const getToggleButtonStyles = (toggleBtnBg: string, textColor: string): CSSProperties => ({
  position: 'absolute' as const,
  top: '0.75rem',
  left: '0.75rem',
  border: 'none',
  padding: '0.5rem',
  cursor: 'pointer',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,
  width: '2.5rem',
  height: '2.5rem',
  transition: 'background-color 300ms',
  backgroundColor: toggleBtnBg,
  color: textColor,
});

const getMenuItemButtonStyles = (isOpen: boolean, textColor: string): CSSProperties => ({
  backgroundColor: 'transparent',
  border: 'none',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: 0,
  transition:
    'padding 300ms ease-in-out, justify-content 300ms ease-in-out, background-color 300ms ease-in-out, color 300ms ease-in-out',
  cursor: 'pointer',
  fontSize: '1rem',
  minHeight: '3rem',
  position: 'relative' as const,
  padding: isOpen ? '0.75rem 1.25rem' : '0.75rem',
  justifyContent: isOpen ? 'flex-start' : 'center',
  color: textColor,
});

const getIconStyles = (isOpen: boolean): CSSProperties => ({
  fontSize: '1.25rem',
  flexShrink: 0,
  marginRight: isOpen ? '0.75rem' : 0,
  transition: 'margin-right 300ms ease-in-out',
});

const getTextStyles = (): CSSProperties => ({
  whiteSpace: 'nowrap' as const,
  overflow: 'hidden',
  transition: 'opacity 300ms ease-in-out',
});

const getBottomSectionStyles = (): CSSProperties => ({
  marginTop: 'auto',
});

export const SideBar = ({
  menuItems,
  logoutButton,
  isOpen: controlledIsOpen,
  onToggle,
  openWidth = '17.5rem',
  closedWidth = '4.375rem',
  colors = DEFAULT_COLOR_CONFIG,
  customBg,
  customTextColor,
  customHoverBg,
  customToggleBtnBg,
  customToggleBtnHoverBg,
  customLogoutTextColor,
  customLogoutHoverBg,
  customLogoutHoverTextColor,
  languageSelector,
}: SideBarProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [currentPathname, setCurrentPathname] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/',
  );
  const isOpen = controlledIsOpen ?? internalIsOpen;

  // Listen for route changes (works with Next.js router and browser navigation)
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    // Also listen for Next.js route changes if available
    window.addEventListener('pushstate', handleRouteChange);
    window.addEventListener('replacestate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushstate', handleRouteChange);
      window.removeEventListener('replacestate', handleRouteChange);
    };
  }, []);

  const backgroundColor = customBg || colors.secondary;
  const textColor = customTextColor || getContrastColor(backgroundColor);
  const hoverBackgroundColor = customHoverBg || adjustOpacity(colors.primary, 0.8);
  const toggleBtnBg = customToggleBtnBg || adjustOpacity(textColor, 0.2);
  const toggleBtnHoverBg = customToggleBtnHoverBg || adjustOpacity(textColor, 0.3);

  const dangerColor = hasExtendedColors(colors) ? colors.danger : lightenColor(colors.accent, 10);
  const logoutTextColor = customLogoutTextColor || dangerColor;
  const logoutHoverBg = customLogoutHoverBg || adjustOpacity(dangerColor, 0.2);
  const logoutHoverTextColor = customLogoutHoverTextColor || dangerColor;

  const handleToggle = useCallback(() => {
    const newState = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newState);
    }
    onToggle?.(newState);
  }, [isOpen, controlledIsOpen, onToggle]);

  const isMenuItemActive = useCallback(
    (item: SideBarMenuItem) => {
      if (item.isActive !== undefined) {
        return item.isActive;
      }
      if (item.href) {
        return (
          currentPathname === item.href ||
          (item.href !== '/' && currentPathname.startsWith(item.href + '/'))
        );
      }
      return false;
    },
    [currentPathname],
  );

  const { topItems, bottomItems, logoutItem } = useMemo(() => {
    const top: SideBarMenuItem[] = [];
    const bottom: SideBarMenuItem[] = [];
    let logout: SideBarMenuItem | null = null;

    menuItems.forEach((item) => {
      if (item.section === 'bottom') {
        bottom.push(item);
      } else {
        top.push(item);
      }
    });

    if (logoutButton) {
      logout = {
        id: 'logout',
        label: logoutButton.label,
        icon: logoutButton.icon,
        onClick: logoutButton.onClick,
        section: 'top',
      };
    }

    return { topItems: top, bottomItems: bottom, logoutItem: logout };
  }, [menuItems, logoutButton]);

  const renderMenuItem = useCallback(
    (item: SideBarMenuItem, isLogout = false) => {
      const isActive = isMenuItemActive(item);
      const itemTextColor = isActive ? colors.accent : isLogout ? logoutTextColor : textColor;
      const itemHoverBg = isLogout ? logoutHoverBg : hoverBackgroundColor;
      const itemHoverTextColor = isLogout ? logoutHoverTextColor : itemTextColor;
      const itemId = item.id || item.href || item.label.toLowerCase().replace(/\s+/g, '-');

      return (
        <li key={itemId} style={getListItemStyles()}>
          <button
            onClick={
              isActive
                ? undefined
                : () => {
                    if (item.onClick) {
                      item.onClick();
                    }
                    if (item.href && typeof window !== 'undefined') {
                      window.location.href = item.href;
                    }
                  }
            }
            className="sidebar-menu-item"
            style={{
              ...getMenuItemButtonStyles(isOpen, itemTextColor),
              cursor: isActive ? 'default' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (isActive) return;
              e.currentTarget.style.backgroundColor = itemHoverBg;
              if (isLogout) {
                e.currentTarget.style.color = itemHoverTextColor;
              }
            }}
            onMouseLeave={(e) => {
              if (isActive) return;
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = itemTextColor;
            }}
          >
            <span className="sidebar-icon" style={getIconStyles(isOpen)}>
              {item.icon}
            </span>
            {isOpen && <span style={getTextStyles()}>{item.label}</span>}
          </button>
        </li>
      );
    },
    [
      isOpen,
      colors.accent,
      textColor,
      hoverBackgroundColor,
      logoutTextColor,
      logoutHoverBg,
      logoutHoverTextColor,
      isMenuItemActive,
    ],
  );

  return (
    <>
      <style>{`
        @media (max-width: 48rem) {
          .sidebar-container {
            width: ${isOpen ? '20rem' : '3.75rem'} !important;
            padding-top: 3.4375rem !important;
          }
          .sidebar-toggle-btn {
            top: 0.625rem !important;
            width: 2.25rem !important;
            height: 2.25rem !important;
          }
          .sidebar-menu-item {
            font-size: 0.9375rem !important;
            min-height: 3.125rem !important;
            padding: ${isOpen ? '0.9375rem 1.5625rem' : '0.9375rem'} !important;
          }
          .sidebar-icon {
            font-size: 1.125rem !important;
          }
        }
        @media (max-width: 30rem) {
          .sidebar-container {
            width: ${isOpen ? '100vw' : '3.125rem'} !important;
            padding-top: 3.125rem !important;
            padding-bottom: 0.9375rem !important;
          }
          .sidebar-toggle-btn {
            top: 0.5rem !important;
            width: 2rem !important;
            height: 2rem !important;
          }
          .sidebar-menu-item {
            font-size: 0.875rem !important;
            min-height: 3.25rem !important;
            padding: ${isOpen ? '1.125rem 1.25rem' : '1.125rem'} !important;
          }
          .sidebar-icon {
            font-size: 1rem !important;
          }
        }
      `}</style>
      <nav
        className="sidebar-container"
        style={getContainerStyles(isOpen, openWidth, closedWidth, backgroundColor)}
      >
        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="sidebar-toggle-btn"
          style={getToggleButtonStyles(toggleBtnBg, textColor)}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = toggleBtnHoverBg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = toggleBtnBg;
          }}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <ul style={getListStyles()}>
          {topItems.map((item) => renderMenuItem(item))}

          {logoutItem && renderMenuItem(logoutItem, true)}

          {bottomItems.length > 0 && (
            <li style={{ ...getListItemStyles(), ...getBottomSectionStyles() }}>
              <ul style={getListStyles()}>
                {bottomItems.map((item) => renderMenuItem(item))}
                {languageSelector && (
                  <li style={getListItemStyles()}>
                    <div
                      style={{
                        padding: isOpen ? '0.75rem 1.25rem' : '0.75rem',
                        display: 'flex',
                        justifyContent: isOpen ? 'flex-start' : 'center',
                      }}
                    >
                      <LanguageSelector
                        selectedLanguage={languageSelector.selectedLanguage}
                        onLanguageChange={languageSelector.onLanguageChange}
                        availableLanguages={languageSelector.availableLanguages}
                        size="sm"
                        colors={colors}
                        customBgColor={backgroundColor}
                        customTextColor={textColor}
                      />
                    </div>
                  </li>
                )}
              </ul>
            </li>
          )}
          {bottomItems.length === 0 && languageSelector && (
            <li style={{ ...getListItemStyles(), ...getBottomSectionStyles() }}>
              <div
                style={{
                  padding: isOpen ? '0.75rem 1.25rem' : '0.75rem',
                  display: 'flex',
                  justifyContent: isOpen ? 'flex-start' : 'center',
                }}
              >
                <LanguageSelector
                  selectedLanguage={languageSelector.selectedLanguage}
                  onLanguageChange={languageSelector.onLanguageChange}
                  availableLanguages={languageSelector.availableLanguages}
                  size="sm"
                  colors={colors}
                  customBgColor={backgroundColor}
                  customTextColor={textColor}
                />
              </div>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

SideBar.displayName = SIDEBAR_DISPLAY_NAME;

export default SideBar;
