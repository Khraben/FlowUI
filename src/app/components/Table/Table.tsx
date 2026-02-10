'use client';

import React, { CSSProperties } from 'react';
import { TableProps } from './models/Table.interface';
import ActionIcon from '../ActionIcon/ActionIcon';
import {
  TABLE_DEFAULT_NO_DATA_MESSAGE,
  TABLE_DEFAULT_ACTIONS_LABEL,
  TABLE_DISPLAY_NAME,
} from '@/app/constants/components/table/styles.constants';
import { DEFAULT_COLOR_CONFIG } from '@/app/types/colors';
import { darkenColor, lightenColor, getContrastColor, adjustOpacity } from '@/app/utils/colorUtils';

// Helper functions for Table styles
const getTableContainerStyles = (): CSSProperties => ({
  width: '100%',
  maxWidth: '75rem',
  borderCollapse: 'separate' as const,
  borderSpacing: 0,
  borderRadius: '0.75rem',
  overflow: 'hidden',
  boxShadow: '0 0.25rem 0.75rem rgba(0, 0, 0, 0.08)',
});

const getNoDataStyles = (): CSSProperties => ({
  textAlign: 'center' as const,
  padding: '2rem 1.25rem',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: '0.75rem',
  border: '2px dashed',
  maxWidth: '75rem',
  width: '100%',
});

const getHeaderCellBaseStyles = (): CSSProperties => ({
  padding: '0.625rem 1.25rem',
  textAlign: 'left' as const,
  textTransform: 'uppercase' as const,
  fontSize: '0.8125rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  borderBottom: '2px solid',
  userSelect: 'none' as const,
  whiteSpace: 'nowrap' as const,
});

const getHeaderCellSortableStyles = (): CSSProperties => ({
  cursor: 'pointer',
  transition: 'all 200ms',
  position: 'relative' as const,
});

const getTheadStyles = (): CSSProperties => ({
  position: 'sticky' as const,
  top: 0,
  zIndex: 10,
});

const getActionsHeaderStyles = (): CSSProperties => ({
  textAlign: 'center' as const,
  width: '9.375rem',
});

const getSortIconContainerStyles = (): CSSProperties => ({
  marginLeft: '0.375rem',
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  opacity: 0.8,
  transition: 'opacity 200ms',
});

const getSortIconStyles = (): CSSProperties => ({
  width: '0.875rem',
  height: '0.875rem',
});

const getBodyCellStyles = (): CSSProperties => ({
  padding: '0.625rem 1.25rem',
  textAlign: 'left' as const,
  fontSize: '0.875rem',
  fontWeight: 500,
  borderBottom: '1px solid',
});

const getActionsCellStyles = (): CSSProperties => ({
  textAlign: 'center' as const,
  whiteSpace: 'nowrap' as const,
});

const getRowStyles = (): CSSProperties => ({
  transition: 'all 200ms',
});

const ArrowUpDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m21 16-4 4-4-4" />
    <path d="M17 20V4" />
    <path d="m3 8 4-4 4 4" />
    <path d="M7 4v16" />
  </svg>
);

const ArrowUp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
);

const ArrowDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

export const Table = <T extends Record<string, unknown>>({
  columns = [],
  data = [],
  onInfo,
  onEdit,
  onDelete,
  sortField,
  sortDirection = 'asc',
  onSort,
  noDataMessage = TABLE_DEFAULT_NO_DATA_MESSAGE,
  showActions = true,
  actionConfig = { info: true, edit: true, delete: true },
  actionsLabel = TABLE_DEFAULT_ACTIONS_LABEL,
  infoIcon = InfoIcon,
  editIcon = EditIcon,
  deleteIcon = TrashIcon,
  colors = DEFAULT_COLOR_CONFIG,
  customHeaderBg,
  customRowBg,
}: TableProps<T>) => {
  // Compute colors dynamically from the color config
  const headerBgFrom = customHeaderBg || colors.primary;
  const headerBgTo = customHeaderBg || colors.secondary;
  const headerTextColor = getContrastColor(headerBgFrom);
  const headerBorderColor = adjustOpacity(headerTextColor, 0.1);
  const headerHoverBg = adjustOpacity(headerTextColor, 0.1);

  // Row backgrounds calculated from secondary color
  const rowBg = customRowBg || darkenColor(colors.secondary, 60);
  const rowEvenBg = customRowBg || darkenColor(colors.secondary, 55);
  const rowHoverBg = lightenColor(rowBg, 8);

  const cellTextColor = getContrastColor(rowBg);
  const cellBorderColor = adjustOpacity(cellTextColor, 0.1);

  const actionDeleteHoverColor = colors.danger || darkenColor(colors.accent, 20);

  const noDataBg = rowBg;
  const noDataTextColor = adjustOpacity(cellTextColor, 0.6);
  const noDataBorderColor = adjustOpacity(cellTextColor, 0.1);

  const noDataStyle: CSSProperties = {
    ...getNoDataStyles(),
    background: noDataBg,
    color: noDataTextColor,
    borderColor: noDataBorderColor,
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) {
      return <ArrowUpDown style={getSortIconStyles()} />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp style={getSortIconStyles()} />
    ) : (
      <ArrowDown style={getSortIconStyles()} />
    );
  };

  const handleSort = (field: string) => {
    if (onSort && field) {
      onSort(field);
    }
  };

  if (data.length === 0) {
    return <div style={noDataStyle}>{noDataMessage}</div>;
  }

  return (
    <table style={getTableContainerStyles()}>
      <thead style={getTheadStyles()}>
        <tr
          style={{
            background: `linear-gradient(to right, ${headerBgFrom}, ${headerBgTo})`,
            color: headerTextColor,
          }}
        >
          {columns.map((column, index) =>
            column.sortable ? (
              <th
                key={column.key || index}
                onClick={() => handleSort(column.key)}
                style={{
                  ...getHeaderCellBaseStyles(),
                  ...getHeaderCellSortableStyles(),
                  borderBottomColor: headerBorderColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = headerHoverBg;
                  const icon = e.currentTarget.querySelector('.sort-icon') as HTMLElement;
                  if (icon) icon.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  const icon = e.currentTarget.querySelector('.sort-icon') as HTMLElement;
                  if (icon) icon.style.opacity = '0.8';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'scale(0.98)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {column.label}{' '}
                <span className="sort-icon" style={getSortIconContainerStyles()}>
                  {getSortIcon(column.key)}
                </span>
              </th>
            ) : (
              <th
                key={column.key || index}
                style={{
                  ...getHeaderCellBaseStyles(),
                  borderBottomColor: headerBorderColor,
                }}
              >
                {column.label}
              </th>
            ),
          )}
          {showActions && (
            <th
              style={{
                ...getHeaderCellBaseStyles(),
                ...getActionsHeaderStyles(),
                borderBottomColor: headerBorderColor,
              }}
            >
              {actionsLabel}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr
            key={(item as { id?: string | number }).id || rowIndex}
            style={{
              ...getRowStyles(),
              backgroundColor: rowIndex % 2 === 0 ? rowBg : rowEvenBg,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = rowHoverBg;
              e.currentTarget.style.transform = 'translateY(-0.0625rem)';
              e.currentTarget.style.boxShadow = '0 0.125rem 0.5rem rgba(0, 0, 0, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = rowIndex % 2 === 0 ? rowBg : rowEvenBg;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {columns.map((column, colIndex) => (
              <td
                key={column.key || colIndex}
                style={{
                  ...getBodyCellStyles(),
                  color: cellTextColor,
                  borderBottomColor: cellBorderColor,
                }}
              >
                {column.render
                  ? column.render(item[column.key], item)
                  : (String(item[column.key] ?? '-') as React.ReactNode)}
              </td>
            ))}
            {showActions && (
              <td
                style={{
                  ...getBodyCellStyles(),
                  ...getActionsCellStyles(),
                  color: cellTextColor,
                  borderBottomColor: cellBorderColor,
                }}
              >
                {actionConfig.info && onInfo && (
                  <ActionIcon icon={infoIcon} onClick={() => onInfo(item)} colors={colors} />
                )}
                {actionConfig.edit && onEdit && (
                  <ActionIcon icon={editIcon} onClick={() => onEdit(item)} colors={colors} />
                )}
                {actionConfig.delete && onDelete && (
                  <ActionIcon
                    icon={deleteIcon}
                    onClick={() => onDelete(item)}
                    colors={colors}
                    customColor={actionDeleteHoverColor}
                  />
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.displayName = TABLE_DISPLAY_NAME;

export default Table;
