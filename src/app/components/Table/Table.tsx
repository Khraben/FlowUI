'use client';

import React from 'react';
import { TableProps } from './models/Table.interface';
import ActionIcon from '../ActionIcon/ActionIcon';
import {
  TABLE_CONTAINER_CLASS,
  TABLE_HEADER_CELL_BASE,
  TABLE_HEADER_CELL_SORTABLE,
  TABLE_HEADER_CELL_RESPONSIVE,
  TABLE_ACTIONS_HEADER_CLASS,
  TABLE_ACTIONS_CELL_CLASS,
  TABLE_SORT_ICON_CLASS,
  TABLE_SORT_ICON_SIZE,
  TABLE_DEFAULT_NO_DATA_MESSAGE,
  TABLE_DEFAULT_ACTIONS_LABEL,
  TABLE_DEFAULT_HEADER_BG_FROM,
  TABLE_DEFAULT_HEADER_BG_TO,
  TABLE_DEFAULT_HEADER_TEXT_COLOR,
  TABLE_DEFAULT_HEADER_BORDER_COLOR,
  TABLE_DEFAULT_HEADER_HOVER_BG,
  TABLE_DEFAULT_ROW_BG,
  TABLE_DEFAULT_ROW_EVEN_BG,
  TABLE_DEFAULT_ROW_HOVER_BG,
  TABLE_DEFAULT_CELL_TEXT_COLOR,
  TABLE_DEFAULT_CELL_BORDER_COLOR,
  TABLE_DEFAULT_ACTION_COLOR,
  TABLE_DEFAULT_ACTION_HOVER_COLOR,
  TABLE_DEFAULT_ACTION_DELETE_HOVER_COLOR,
  TABLE_DEFAULT_NO_DATA_BG,
  TABLE_DEFAULT_NO_DATA_TEXT_COLOR,
  TABLE_DEFAULT_NO_DATA_BORDER_COLOR,
  TABLE_DISPLAY_NAME,
} from '@/app/constants/components/table/styles.constants';

// Default icons (SVG components)
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
  headerBgFrom = TABLE_DEFAULT_HEADER_BG_FROM,
  headerBgTo = TABLE_DEFAULT_HEADER_BG_TO,
  headerTextColor = TABLE_DEFAULT_HEADER_TEXT_COLOR,
  headerBorderColor = TABLE_DEFAULT_HEADER_BORDER_COLOR,
  headerHoverBg = TABLE_DEFAULT_HEADER_HOVER_BG,
  rowBg = TABLE_DEFAULT_ROW_BG,
  rowEvenBg = TABLE_DEFAULT_ROW_EVEN_BG,
  rowHoverBg = TABLE_DEFAULT_ROW_HOVER_BG,
  cellTextColor = TABLE_DEFAULT_CELL_TEXT_COLOR,
  cellBorderColor = TABLE_DEFAULT_CELL_BORDER_COLOR,
  actionColor = TABLE_DEFAULT_ACTION_COLOR,
  actionHoverColor = TABLE_DEFAULT_ACTION_HOVER_COLOR,
  actionDeleteHoverColor = TABLE_DEFAULT_ACTION_DELETE_HOVER_COLOR,
  noDataBg = TABLE_DEFAULT_NO_DATA_BG,
  noDataTextColor = TABLE_DEFAULT_NO_DATA_TEXT_COLOR,
  noDataBorderColor = TABLE_DEFAULT_NO_DATA_BORDER_COLOR,
}: TableProps<T>) => {
  const getSortIcon = (field: string) => {
    if (sortField !== field) {
      return <ArrowUpDown className={TABLE_SORT_ICON_SIZE} />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className={TABLE_SORT_ICON_SIZE} />
    ) : (
      <ArrowDown className={TABLE_SORT_ICON_SIZE} />
    );
  };

  const handleSort = (field: string) => {
    if (onSort && field) {
      onSort(field);
    }
  };

  if (data.length === 0) {
    return (
      <div
        className="text-center py-[3.75rem] px-5 text-base font-medium rounded-xl border-2 border-dashed max-w-[75rem] w-full max-xs:py-10 max-xs:px-[0.9375rem] max-xs:text-sm"
        style={{
          background: noDataBg,
          color: noDataTextColor,
          borderColor: noDataBorderColor,
        }}
      >
        {noDataMessage}
      </div>
    );
  }

  return (
    <table className={TABLE_CONTAINER_CLASS}>
      <thead
        className="sticky top-0 z-10"
        style={{
          background: `linear-gradient(to right, ${headerBgFrom}, ${headerBgTo})`,
          color: headerTextColor,
        }}
      >
        <tr>
          {columns.map((column, index) =>
            column.sortable ? (
              <th
                key={column.key || index}
                onClick={() => handleSort(column.key)}
                className={`${TABLE_HEADER_CELL_BASE} ${TABLE_HEADER_CELL_SORTABLE} ${TABLE_HEADER_CELL_RESPONSIVE}`}
                style={{
                  borderBottomColor: headerBorderColor,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = headerHoverBg)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {column.label}{' '}
                <span className={TABLE_SORT_ICON_CLASS}>{getSortIcon(column.key)}</span>
              </th>
            ) : (
              <th
                key={column.key || index}
                className={`${TABLE_HEADER_CELL_BASE} ${TABLE_HEADER_CELL_RESPONSIVE}`}
                style={{
                  borderBottomColor: headerBorderColor,
                }}
              >
                {column.label}
              </th>
            ),
          )}
          {showActions && (
            <th
              className={`${TABLE_HEADER_CELL_BASE} ${TABLE_ACTIONS_HEADER_CLASS} ${TABLE_HEADER_CELL_RESPONSIVE}`}
              style={{
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
            className="transition-all duration-200 hover:-translate-y-[0.0625rem] hover:shadow-[0_0.125rem_0.5rem_rgba(0,0,0,0.06)] last:border-b-0"
            style={{
              backgroundColor: rowIndex % 2 === 0 ? rowBg : rowEvenBg,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = rowHoverBg)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = rowIndex % 2 === 0 ? rowBg : rowEvenBg)
            }
          >
            {columns.map((column, colIndex) => (
              <td
                key={column.key || colIndex}
                className="p-4 px-5 text-left text-sm font-medium border-b md:text-xs md:p-3 md:px-[0.9375rem] max-xs:text-[0.6875rem] max-xs:p-2.5 max-xs:px-3"
                style={{
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
                className={`p-4 px-5 text-left text-sm font-medium border-b md:text-xs md:p-3 md:px-[0.9375rem] max-xs:text-[0.6875rem] max-xs:p-2.5 max-xs:px-3 ${TABLE_ACTIONS_CELL_CLASS}`}
                style={{
                  color: cellTextColor,
                  borderBottomColor: cellBorderColor,
                }}
              >
                {actionConfig.info && onInfo && (
                  <ActionIcon
                    icon={infoIcon}
                    onClick={() => onInfo(item)}
                    color={actionColor}
                    hoverColor={actionHoverColor}
                  />
                )}
                {actionConfig.edit && onEdit && (
                  <ActionIcon
                    icon={editIcon}
                    onClick={() => onEdit(item)}
                    color={actionColor}
                    hoverColor={actionHoverColor}
                  />
                )}
                {actionConfig.delete && onDelete && (
                  <ActionIcon
                    icon={deleteIcon}
                    onClick={() => onDelete(item)}
                    color={actionColor}
                    hoverColor={actionDeleteHoverColor}
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
