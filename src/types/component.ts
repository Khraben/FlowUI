import { ComponentCategory } from '@/constants';

export interface ComponentDemo {
  id: string;
  name: string;
  description: string;
  category: ComponentCategory;
  component: React.ComponentType<any>;
  code?: string;
  props?: Record<string, any>;
}

export type { ComponentCategory };
