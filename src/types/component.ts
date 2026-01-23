import { ComponentCategory } from '@/app/constants';

export interface ComponentDemo {
  id: string;
  name: string;
  description: string;
  category: ComponentCategory;
  component: React.ComponentType<Record<string, unknown>>;
  code?: string;
  props?: Record<string, unknown>;
}

export type { ComponentCategory };
