import { ComponentType, SVGProps } from 'react';
import { ExtendedColorConfig } from '@/app/types/colors';

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

  colors?: ExtendedColorConfig;

  customHeaderBg?: string;
  customRowBg?: string;
}
