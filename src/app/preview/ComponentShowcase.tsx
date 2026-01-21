'use client';

import React from 'react';
import { ComponentDemo } from '@/types/component';
import { SHOWCASE_STYLES } from '@/constants';

interface ComponentShowcaseProps {
  demo: ComponentDemo;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ demo }) => {
  const { name, description, category, component: Component, props = {} } = demo;

  return (
    <div className={SHOWCASE_STYLES.CONTAINER}>
      <div className="px-4 py-2.5 border-b border-[#3C3F41]">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h2 className="text-base font-semibold text-[#A9B7C6] truncate">{name}</h2>
            <p className="text-xs text-[#808080] mt-0.5 line-clamp-1">{description}</p>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-[#3C3F41] text-[#A9B7C6] whitespace-nowrap">
            {category}
          </span>
        </div>
      </div>

      <div className={SHOWCASE_STYLES.PREVIEW.BASE}>
        <div className={SHOWCASE_STYLES.PREVIEW.STAGE}>
          <Component {...props} />
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
