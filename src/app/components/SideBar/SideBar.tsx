'use client';

import { useState, useCallback, useMemo } from 'react';
import { SideBarProps, SideBarMenuItem } from './models/SideBar.interface';
import {
  SIDEBAR_DISPLAY_NAME,
  SIDEBAR_WIDTHS,
  SIDEBAR_COLORS,
  SIDEBAR_SECTIONS,
  SIDEBAR_BASE_STYLES,
  SIDEBAR_TOGGLE_BUTTON_STYLES,
  SIDEBAR_MENU_ITEM_STYLES,
  SIDEBAR_ICON_STYLES,
  SIDEBAR_TEXT_STYLES,
  SIDEBAR_BOTTOM_SECTION_STYLES,
  SIDEBAR_RESPONSIVE_WIDTH_STYLES,
  SIDEBAR_RESPONSIVE_PADDING_STYLES,
} from '@/app/constants';

export const SideBar = ({
  menuItems,
  logoutButton,
  isOpen: controlledIsOpen,
  onToggle,
  openWidth = SIDEBAR_WIDTHS.OPEN,
  closedWidth = SIDEBAR_WIDTHS.CLOSED,
  backgroundColor = SIDEBAR_COLORS.BACKGROUND,
  textColor = SIDEBAR_COLORS.TEXT,
  hoverBackgroundColor = SIDEBAR_COLORS.HOVER_BACKGROUND,
  toggleButtonBackgroundColor = SIDEBAR_COLORS.TOGGLE_BUTTON_BG,
  toggleButtonHoverBackgroundColor = SIDEBAR_COLORS.TOGGLE_BUTTON_HOVER_BG,
  logoutTextColor = SIDEBAR_COLORS.LOGOUT_TEXT,
  logoutHoverBackgroundColor = SIDEBAR_COLORS.LOGOUT_HOVER_BG,
  logoutHoverTextColor = SIDEBAR_COLORS.LOGOUT_HOVER_TEXT,
  className = '',
  disableDefaultStyles = false,
}: SideBarProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen ?? internalIsOpen;

  const handleToggle = useCallback(() => {
    const newState = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newState);
    }
    onToggle?.(newState);
  }, [isOpen, controlledIsOpen, onToggle]);

  const { topItems, bottomItems, logoutItem } = useMemo(() => {
    const top: SideBarMenuItem[] = [];
    const bottom: SideBarMenuItem[] = [];
    let logout: SideBarMenuItem | null = null;

    menuItems.forEach((item) => {
      if (item.section === SIDEBAR_SECTIONS.BOTTOM) {
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
        section: SIDEBAR_SECTIONS.TOP,
      };
    }

    return { topItems: top, bottomItems: bottom, logoutItem: logout };
  }, [menuItems, logoutButton]);

  const containerClasses = useMemo(() => {
    if (disableDefaultStyles) {
      return className;
    }

    const widthClass = isOpen ? `w-[${openWidth}]` : `w-[${closedWidth}]`;
    const responsiveWidth = isOpen
      ? `${SIDEBAR_RESPONSIVE_WIDTH_STYLES.TABLET_OPEN} ${SIDEBAR_RESPONSIVE_WIDTH_STYLES.MOBILE_OPEN}`
      : `${SIDEBAR_RESPONSIVE_WIDTH_STYLES.TABLET_CLOSED} ${SIDEBAR_RESPONSIVE_WIDTH_STYLES.MOBILE_CLOSED}`;

    return [
      SIDEBAR_BASE_STYLES.CONTAINER,
      widthClass,
      responsiveWidth,
      SIDEBAR_RESPONSIVE_PADDING_STYLES.TABLET,
      SIDEBAR_RESPONSIVE_PADDING_STYLES.MOBILE,
      className,
    ]
      .filter(Boolean)
      .join(' ');
  }, [isOpen, openWidth, closedWidth, className, disableDefaultStyles]);

  const toggleButtonClasses = useMemo(() => {
    if (disableDefaultStyles) return '';
    const positionClass = isOpen
      ? SIDEBAR_TOGGLE_BUTTON_STYLES.OPEN
      : SIDEBAR_TOGGLE_BUTTON_STYLES.CLOSED;
    return [
      SIDEBAR_TOGGLE_BUTTON_STYLES.BASE,
      positionClass,
      SIDEBAR_TOGGLE_BUTTON_STYLES.TABLET,
      SIDEBAR_TOGGLE_BUTTON_STYLES.MOBILE,
    ].join(' ');
  }, [isOpen, disableDefaultStyles]);

  const getMenuItemClasses = useCallback(() => {
    if (disableDefaultStyles) return '';
    const openState = isOpen
      ? `${SIDEBAR_MENU_ITEM_STYLES.OPEN} ${SIDEBAR_MENU_ITEM_STYLES.TABLET_OPEN} ${SIDEBAR_MENU_ITEM_STYLES.MOBILE_OPEN}`
      : `${SIDEBAR_MENU_ITEM_STYLES.CLOSED} ${SIDEBAR_MENU_ITEM_STYLES.TABLET_CLOSED} ${SIDEBAR_MENU_ITEM_STYLES.MOBILE_CLOSED}`;

    return [
      SIDEBAR_MENU_ITEM_STYLES.BASE,
      openState,
      SIDEBAR_MENU_ITEM_STYLES.TABLET_BASE,
      SIDEBAR_MENU_ITEM_STYLES.MOBILE_BASE,
    ].join(' ');
  }, [isOpen, disableDefaultStyles]);

  const getIconClasses = useCallback(() => {
    if (disableDefaultStyles) return '';
    const marginClass = isOpen ? SIDEBAR_ICON_STYLES.OPEN : SIDEBAR_ICON_STYLES.CLOSED;
    return [
      SIDEBAR_ICON_STYLES.BASE,
      marginClass,
      SIDEBAR_ICON_STYLES.TABLET,
      SIDEBAR_ICON_STYLES.MOBILE,
    ].join(' ');
  }, [isOpen, disableDefaultStyles]);

  const renderMenuItem = useCallback(
    (item: SideBarMenuItem, isLogout = false) => {
      const itemTextColor = isLogout ? logoutTextColor : textColor;
      const itemHoverBg = isLogout ? logoutHoverBackgroundColor : hoverBackgroundColor;
      const itemHoverTextColor = isLogout ? logoutHoverTextColor : itemTextColor;

      return (
        <li key={item.id} className={SIDEBAR_BASE_STYLES.LIST_ITEM}>
          <button
            onClick={item.onClick}
            className={getMenuItemClasses()}
            style={{ color: itemTextColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = itemHoverBg;
              if (isLogout) {
                e.currentTarget.style.color = itemHoverTextColor;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = SIDEBAR_COLORS.TRANSPARENT;
              e.currentTarget.style.color = itemTextColor;
            }}
          >
            <span className={getIconClasses()}>{item.icon}</span>
            {isOpen && <span className={SIDEBAR_TEXT_STYLES.BASE}>{item.label}</span>}
          </button>
        </li>
      );
    },
    [
      isOpen,
      textColor,
      hoverBackgroundColor,
      logoutTextColor,
      logoutHoverBackgroundColor,
      logoutHoverTextColor,
      getMenuItemClasses,
      getIconClasses,
    ],
  );

  return (
    <nav className={containerClasses} style={{ backgroundColor }}>
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className={toggleButtonClasses}
        style={{
          backgroundColor: toggleButtonBackgroundColor,
          color: textColor,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = toggleButtonHoverBackgroundColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = toggleButtonBackgroundColor;
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

      <ul className={SIDEBAR_BASE_STYLES.LIST}>
        {topItems.map((item) => renderMenuItem(item))}

        {logoutItem && renderMenuItem(logoutItem, true)}

        {bottomItems.length > 0 && (
          <li className={`${SIDEBAR_BASE_STYLES.LIST_ITEM} ${SIDEBAR_BOTTOM_SECTION_STYLES.BASE}`}>
            <ul className={SIDEBAR_BASE_STYLES.LIST}>
              {bottomItems.map((item) => renderMenuItem(item))}
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
};

SideBar.displayName = SIDEBAR_DISPLAY_NAME;

export default SideBar;
