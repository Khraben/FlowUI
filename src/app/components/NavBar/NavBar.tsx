'use client';

import { useState, useCallback, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { NavBarProps, NavBarAction } from './models/NavBar.interface';
import {
  NAVBAR_DISPLAY_NAME,
  NAVBAR_HEIGHTS,
  NAVBAR_COLORS,
  NAVBAR_BASE_STYLES,
  NAVBAR_ACTION_STYLES,
} from '@/app/constants';
import { adjustOpacity, getContrastColor } from '@/app/utils/colorUtils';

export const NavBar = ({
  logo,
  menuItems = [],
  actions = [],
  backgroundColor = NAVBAR_COLORS.BACKGROUND,
  textColor = NAVBAR_COLORS.TEXT,
  activeTextColor = NAVBAR_COLORS.ACTIVE_TEXT,
  hoverTextColor = NAVBAR_COLORS.HOVER_TEXT,
  height = NAVBAR_HEIGHTS.DEFAULT,
  className = '',
  disableDefaultStyles = false,
  showMobileMenu: controlledMobileMenu,
  onMobileMenuToggle,
}: NavBarProps) => {
  const [internalMobileMenu, setInternalMobileMenu] = useState(false);
  const isMobileMenuOpen = controlledMobileMenu ?? internalMobileMenu;

  const dynamicColors = useMemo(
    () => ({
      hoverBg: adjustOpacity(textColor, 0.05),
      hoverBgActive: adjustOpacity(textColor, 0.1),
      secondaryBg: adjustOpacity(textColor, 0.05),
      activeItemBg: adjustOpacity(activeTextColor, 0.1),
      outlineHoverText: getContrastColor(activeTextColor),
    }),
    [textColor, activeTextColor],
  );

  const handleMobileMenuToggle = useCallback(() => {
    const newState = !isMobileMenuOpen;
    if (controlledMobileMenu === undefined) {
      setInternalMobileMenu(newState);
    }
    onMobileMenuToggle?.(newState);
  }, [isMobileMenuOpen, controlledMobileMenu, onMobileMenuToggle]);

  const containerClasses = useMemo(() => {
    if (disableDefaultStyles) return className;
    return `${NAVBAR_BASE_STYLES.CONTAINER} ${className}`;
  }, [disableDefaultStyles, className]);

  const getActionButtonStyles = useCallback(
    (action: NavBarAction) => {
      const baseStyles = NAVBAR_ACTION_STYLES.BASE;
      let variantStyles = '';
      let customStyles: React.CSSProperties = {};

      if (action.variant === 'primary') {
        variantStyles = NAVBAR_ACTION_STYLES.PRIMARY;
        customStyles = {
          backgroundColor: activeTextColor,
          borderColor: 'transparent',
        };
      } else if (action.variant === 'outline') {
        variantStyles = NAVBAR_ACTION_STYLES.OUTLINE;
        customStyles = {
          color: activeTextColor,
          borderColor: activeTextColor,
          backgroundColor: 'transparent',
        };
      } else {
        variantStyles = NAVBAR_ACTION_STYLES.SECONDARY;
        customStyles = {
          backgroundColor: dynamicColors.secondaryBg,
          color: textColor,
          borderColor: 'transparent',
        };
      }

      return { className: `${baseStyles} ${variantStyles}`, style: customStyles };
    },
    [activeTextColor, textColor, dynamicColors],
  );

  const handleLogoClick = useCallback(() => {
    if (logo?.onClick) {
      logo.onClick();
    } else if (logo?.href) {
      window.location.href = logo.href;
    }
  }, [logo]);

  const handleMenuItemClick = useCallback((item: (typeof menuItems)[0]) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      window.location.href = item.href;
    }
  }, []);

  return (
    <>
      <nav
        className={containerClasses}
        style={{
          backgroundColor,
          borderColor: NAVBAR_COLORS.BORDER,
          height,
        }}
      >
        <div className={NAVBAR_BASE_STYLES.CONTENT}>
          {logo && (
            <div className={NAVBAR_BASE_STYLES.LOGO_CONTAINER}>
              <div className={NAVBAR_BASE_STYLES.LOGO_LINK} onClick={handleLogoClick}>
                {logo.src && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.src}
                    alt={logo.alt || 'Logo'}
                    className={NAVBAR_BASE_STYLES.LOGO_IMAGE}
                  />
                )}
                {logo.text && (
                  <span className={NAVBAR_BASE_STYLES.LOGO_TEXT} style={{ color: textColor }}>
                    {logo.text}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className={NAVBAR_BASE_STYLES.MENU_CONTAINER}>
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={NAVBAR_BASE_STYLES.MENU_ITEM}
                onClick={() => handleMenuItemClick(item)}
                style={{
                  color: item.isActive ? activeTextColor : textColor,
                  borderBottom: item.isActive
                    ? `2px solid ${activeTextColor}`
                    : '2px solid transparent',
                  paddingBottom: '0.25rem',
                }}
                onMouseEnter={(e) => {
                  if (!item.isActive) {
                    e.currentTarget.style.color = hoverTextColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.isActive) {
                    e.currentTarget.style.color = textColor;
                  }
                }}
              >
                {item.label}
              </div>
            ))}
          </div>

          <div className={NAVBAR_BASE_STYLES.ACTIONS_CONTAINER}>
            {actions.map((action) => {
              const { className: btnClassName, style: btnStyle } = getActionButtonStyles(action);
              return (
                <button
                  key={action.id}
                  className={btnClassName}
                  style={btnStyle}
                  onClick={action.onClick}
                  onMouseEnter={(e) => {
                    if (action.variant === 'primary') {
                      e.currentTarget.style.opacity = '0.9';
                    } else if (action.variant === 'outline') {
                      e.currentTarget.style.backgroundColor = activeTextColor;
                      e.currentTarget.style.color = dynamicColors.outlineHoverText;
                    } else {
                      e.currentTarget.style.backgroundColor = dynamicColors.hoverBgActive;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (action.variant === 'primary') {
                      e.currentTarget.style.opacity = '1';
                    } else if (action.variant === 'outline') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = activeTextColor;
                    } else {
                      e.currentTarget.style.backgroundColor = dynamicColors.secondaryBg;
                    }
                  }}
                >
                  {action.icon && <span className="mr-2">{action.icon}</span>}
                  {action.label}
                </button>
              );
            })}
          </div>

          <div
            className={NAVBAR_BASE_STYLES.MOBILE_TOGGLE}
            onClick={handleMobileMenuToggle}
            style={{ color: textColor }}
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
        <div className={NAVBAR_BASE_STYLES.MOBILE_MENU}>
          <div
            className={NAVBAR_BASE_STYLES.MOBILE_OVERLAY}
            style={{ backgroundColor: NAVBAR_COLORS.MOBILE_OVERLAY }}
            onClick={handleMobileMenuToggle}
          />
          <div
            className={NAVBAR_BASE_STYLES.MOBILE_PANEL}
            style={{
              backgroundColor: NAVBAR_COLORS.MOBILE_MENU_BG,
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
          >
            <div
              className={NAVBAR_BASE_STYLES.MOBILE_HEADER}
              style={{ borderColor: NAVBAR_COLORS.BORDER }}
            >
              {logo?.text && (
                <span className="text-lg font-bold" style={{ color: textColor }}>
                  {logo.text}
                </span>
              )}
              <div
                className={NAVBAR_BASE_STYLES.MOBILE_CLOSE}
                onClick={handleMobileMenuToggle}
                style={{ color: textColor }}
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

            <div className={NAVBAR_BASE_STYLES.MOBILE_NAV}>
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={NAVBAR_BASE_STYLES.MOBILE_MENU_ITEM}
                  onClick={() => {
                    handleMenuItemClick(item);
                    handleMobileMenuToggle();
                  }}
                  style={{
                    color: item.isActive ? activeTextColor : textColor,
                    backgroundColor: item.isActive ? dynamicColors.activeItemBg : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = dynamicColors.hoverBg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = item.isActive
                      ? dynamicColors.activeItemBg
                      : 'transparent';
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>

            <div
              className={NAVBAR_BASE_STYLES.MOBILE_ACTIONS}
              style={{ borderColor: NAVBAR_COLORS.BORDER }}
            >
              {actions.map((action) => {
                const { className: btnClassName, style: btnStyle } = getActionButtonStyles(action);
                return (
                  <button
                    key={action.id}
                    className={btnClassName}
                    style={btnStyle}
                    onClick={() => {
                      action.onClick();
                      handleMobileMenuToggle();
                    }}
                  >
                    {action.icon && <span className="mr-2">{action.icon}</span>}
                    {action.label}
                  </button>
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
