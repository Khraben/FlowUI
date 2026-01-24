import { ComponentType, SVGProps } from 'react';

export type SortDirection = 'asc' | 'desc';

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: unknown, item: T) => React.ReactNode;
}

export interface TableActionConfig {
  info?: boolean;
  edit?: boolean;
  delete?: boolean;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  onInfo?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  sortField?: string;
  sortDirection?: SortDirection;
  onSort?: (field: string) => void;
  noDataMessage?: string;
  showActions?: boolean;
  actionConfig?: TableActionConfig;
  actionsLabel?: string;
  infoIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  editIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  deleteIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  // Color customization
  headerBgFrom?: string;
  headerBgTo?: string;
  headerTextColor?: string;
  headerBorderColor?: string;
  headerHoverBg?: string;
  rowBg?: string;
  rowEvenBg?: string;
  rowHoverBg?: string;
  cellTextColor?: string;
  cellBorderColor?: string;
  actionColor?: string;
  actionHoverColor?: string;
  actionDeleteHoverColor?: string;
  noDataBg?: string;
  noDataTextColor?: string;
  noDataBorderColor?: string;
}
