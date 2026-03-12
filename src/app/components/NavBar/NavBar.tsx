'use client';

import { useState, useCallback, useMemo, CSSProperties } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NavBarProps } from './models/NavBar.interface';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { adjustOpacity, getContrastColor } from '@/app/utils/colorUtils';
import Button from '../Button/Button';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';

const NAVBAR_DISPLAY_NAME = 'NavBar';

const getContainerStyles = (backgroundColor: string, height: string): CSSProperties => ({
  position: 'fixed' as const,
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  width: '100%',
  borderBottom: `1px solid ${adjustOpacity('#000', 0.1)}`,
  transition: 'all 300ms',
  backgroundColor,
  height,
});

const getContentStyles = (): CSSProperties => ({
  maxWidth: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
});

const getLogoContainerStyles = (): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  flexShrink: 0,
});

const getLogoLinkStyles = (): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'opacity 300ms',
});

const getLogoImageStyles = (): CSSProperties => ({
  height: '2rem',
  width: 'auto',
});

const getLogoTextStyles = (textColor: string): CSSProperties => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: textColor,
});

const getMenuContainerStyles = (): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});

const getMenuItemStyles = (
  textColor: string,
  isActive: boolean,
  activeColor: string,
): CSSProperties => ({
  fontWeight: 500,
  transition: 'all 300ms',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '0.875rem',
  color: isActive ? activeColor : textColor,
  borderBottom: isActive ? `2px solid ${activeColor}` : '2px solid transparent',
  paddingBottom: '0.25rem',
});

const getActionsContainerStyles = (): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

const getMobileToggleStyles = (textColor: string): CSSProperties => ({
  padding: '0.5rem',
  cursor: 'pointer',
  transition: 'all 300ms',
  borderRadius: '0.5rem',
  color: textColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const getMobileMenuStyles = (): CSSProperties => ({
  position: 'fixed' as const,
  inset: 0,
  zIndex: 50,
  transition: 'all 300ms',
});

const getMobileOverlayStyles = (): CSSProperties => ({
  position: 'absolute' as const,
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

const getMobilePanelStyles = (isOpen: boolean, bgColor: string): CSSProperties => ({
  position: 'absolute' as const,
  top: 0,
  right: 0,
  height: '100%',
  width: '20rem',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  transition: 'transform 300ms',
  backgroundColor: bgColor,
  transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
  display: 'flex',
  flexDirection: 'column' as const,
});

const getMobileHeaderStyles = (): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  borderBottom: `1px solid ${adjustOpacity('#000', 0.1)}`,
});

const getMobileCloseStyles = (textColor: string): CSSProperties => ({
  padding: '0.5rem',
  cursor: 'pointer',
  transition: 'all 300ms',
  borderRadius: '0.5rem',
  color: textColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const getMobileNavStyles = (): CSSProperties => ({
  display: 'flex',
  flexDirection: 'column' as const,
  padding: '1rem',
  gap: '0.5rem',
  flex: 1,
  overflowY: 'auto' as const,
});

const getMobileMenuItemStyles = (
  textColor: string,
  isActive: boolean,
  activeBg: string,
  activeColor: string,
): CSSProperties => ({
  fontWeight: 500,
  transition: 'all 300ms',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '0.75rem',
  paddingBottom: '0.75rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  cursor: 'pointer',
  color: isActive ? activeColor : textColor,
  backgroundColor: isActive ? activeBg : 'transparent',
});

const getMobileActionsStyles = (): CSSProperties => ({
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.5rem',
  padding: '1rem',
  borderTop: `1px solid ${adjustOpacity('#000', 0.1)}`,
  marginTop: 'auto',
});

export const NavBar = ({
  logo,
  menuItems = [],
  actions = [],
  colors = DEFAULT_COLOR_CONFIG,
  customBgColor,
  customTextColor,
  customActiveColor,
  customHoverColor,
  height = '4rem',
  showMobileMenu: controlledMobileMenu,
  onMobileMenuToggle,
  languageSelector,
}: NavBarProps) => {
  const [internalMobileMenu, setInternalMobileMenu] = useState(false);
  const currentPathname = usePathname();
  const router = useRouter();
  const isMobileMenuOpen = controlledMobileMenu ?? internalMobileMenu;

  const backgroundColor = customBgColor || colors.secondary;
  const textColor = customTextColor || getContrastColor(backgroundColor);
  const activeColor = customActiveColor || colors.accent;
  const hoverColor = customHoverColor || colors.primary;

  const dynamicColors = useMemo(
    () => ({
      hoverBg: adjustOpacity(textColor, 0.05),
      hoverBgActive: adjustOpacity(textColor, 0.1),
      secondaryBg: adjustOpacity(textColor, 0.05),
      activeItemBg: adjustOpacity(activeColor, 0.1),
      outlineHoverText: getContrastColor(activeColor),
    }),
    [textColor, activeColor],
  );

  const handleMobileMenuToggle = useCallback(() => {
    const newState = !isMobileMenuOpen;
    if (controlledMobileMenu === undefined) {
      setInternalMobileMenu(newState);
    }
    onMobileMenuToggle?.(newState);
  }, [isMobileMenuOpen, controlledMobileMenu, onMobileMenuToggle]);

  const handleLogoClick = useCallback(() => {
    if (logo?.onClick) {
      logo.onClick();
    } else if (logo?.href) {
      router.push(logo.href);
    }
  }, [logo, router]);

  const handleMenuItemClick = useCallback(
    (item: (typeof menuItems)[0]) => {
      if (item.onClick) {
        item.onClick();
      } else if (item.href) {
        router.push(item.href);
      }
    },
    [router],
  );

  const isMenuItemActive = useCallback(
    (item: (typeof menuItems)[0]) => {
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

  return (
    <>
      <style>{`
        @media (max-width: 64rem) {
          .navbar-menu-container,
          .navbar-actions-container {
            display: none !important;
          }
          .navbar-mobile-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 64rem) {
          .navbar-menu-container,
          .navbar-actions-container {
            display: flex !important;
          }
          .navbar-mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 48rem) {
          .navbar-content {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .navbar-menu-container {
            gap: 1.5rem !important;
          }
          .navbar-actions-container {
            gap: 0.5rem !important;
          }
          .navbar-action-button {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
            padding-top: 0.375rem !important;
            padding-bottom: 0.375rem !important;
            font-size: 0.75rem !important;
          }
        }
        @media (max-width: 40rem) {
          .navbar-content {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          .navbar-logo-image {
            height: 1.5rem !important;
          }
          .navbar-logo-text {
            font-size: 1rem !important;
          }
          .navbar-mobile-panel {
            width: 18rem !important;
          }
        }
      `}</style>
      <nav style={getContainerStyles(backgroundColor, height)}>
        <div className="navbar-content" style={getContentStyles()}>
          {logo && (
            <div style={getLogoContainerStyles()}>
              <div
                style={getLogoLinkStyles()}
                onClick={(e) => {
                  e.currentTarget.style.opacity = '1';
                  handleLogoClick();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {logo.src && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.src}
                    alt={logo.alt || 'Logo'}
                    className="navbar-logo-image"
                    style={getLogoImageStyles()}
                  />
                )}
                {logo.text && (
                  <span className="navbar-logo-text" style={getLogoTextStyles(textColor)}>
                    {logo.text}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="navbar-menu-container" style={getMenuContainerStyles()}>
            {menuItems.map((item, index) => {
              const isActive = isMenuItemActive(item);
              const itemId = item.id || item.href || `menu-item-${index}`;
              return (
                <div
                  key={itemId}
                  onClick={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = textColor;
                    }
                    handleMenuItemClick(item);
                  }}
                  style={getMenuItemStyles(textColor, isActive, activeColor)}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = hoverColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = textColor;
                    }
                  }}
                >
                  {item.label}
                </div>
              );
            })}
          </div>

          <div className="navbar-actions-container" style={getActionsContainerStyles()}>
            {languageSelector && (
              <LanguageSelector
                selectedLanguage={languageSelector.selectedLanguage}
                onLanguageChange={languageSelector.onLanguageChange}
                availableLanguages={languageSelector.availableLanguages}
                size="sm"
                colors={colors}
                customBgColor={backgroundColor}
                customTextColor={textColor}
              />
            )}
            {actions.map((action, index) => {
              const variant = action.variant === 'primary' ? 'primary' : 'secondary';
              const actionId = action.id || `action-${index}`;
              return (
                <Button
                  key={actionId}
                  variant={variant}
                  size="sm"
                  onClick={action.onClick}
                  icon={action.icon}
                  iconPosition="left"
                  colors={{
                    primary: activeColor,
                    secondary: textColor,
                    accent: activeColor,
                  }}
                  customBg={variant === 'secondary' ? dynamicColors.secondaryBg : undefined}
                  customTextColor={variant === 'secondary' ? textColor : undefined}
                  customBorderColor={action.variant === 'outline' ? activeColor : undefined}
                >
                  {action.label}
                </Button>
              );
            })}
          </div>

          <div
            className="navbar-mobile-toggle"
            style={getMobileToggleStyles(textColor)}
            onClick={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              handleMobileMenuToggle();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = dynamicColors.hoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Menu size={24} />
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div style={getMobileMenuStyles()}>
          <div style={getMobileOverlayStyles()} onClick={handleMobileMenuToggle} />
          <div
            className="navbar-mobile-panel"
            style={getMobilePanelStyles(isMobileMenuOpen, backgroundColor)}
          >
            <div style={getMobileHeaderStyles()}>
              {logo?.text && (
                <span style={{ fontSize: '1.125rem', fontWeight: 'bold', color: textColor }}>
                  {logo.text}
                </span>
              )}
              <div
                style={getMobileCloseStyles(textColor)}
                onClick={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  handleMobileMenuToggle();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = dynamicColors.hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <X size={24} />
              </div>
            </div>

            <div style={getMobileNavStyles()}>
              {menuItems.map((item, index) => {
                const isActive = isMenuItemActive(item);
                const itemId = item.id || item.href || `menu-item-${index}`;
                return (
                  <div
                    key={itemId}
                    style={getMobileMenuItemStyles(
                      textColor,
                      isActive,
                      dynamicColors.activeItemBg,
                      activeColor,
                    )}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = isActive
                        ? dynamicColors.activeItemBg
                        : 'transparent';
                      handleMenuItemClick(item);
                      handleMobileMenuToggle();
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = dynamicColors.hoverBg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = isActive
                        ? dynamicColors.activeItemBg
                        : 'transparent';
                    }}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>

            {languageSelector && (
              <div
                style={{
                  padding: '1rem',
                  borderTop: `1px solid ${adjustOpacity('#000', 0.1)}`,
                  display: 'flex',
                  justifyContent: 'center',
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
            )}

            <div style={getMobileActionsStyles()}>
              {actions.map((action, index) => {
                const variant = action.variant === 'primary' ? 'primary' : 'secondary';
                const actionId = action.id || `action-${index}`;
                return (
                  <Button
                    key={actionId}
                    variant={variant}
                    size="sm"
                    onClick={() => {
                      action.onClick();
                      handleMobileMenuToggle();
                    }}
                    icon={action.icon}
                    iconPosition="left"
                    colors={{
                      primary: activeColor,
                      secondary: textColor,
                      accent: activeColor,
                    }}
                    customBg={variant === 'secondary' ? dynamicColors.secondaryBg : undefined}
                    customTextColor={variant === 'secondary' ? textColor : undefined}
                    customBorderColor={action.variant === 'outline' ? activeColor : undefined}
                    style={{ width: '100%' }}
                  >
                    {action.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

NavBar.displayName = NAVBAR_DISPLAY_NAME;
