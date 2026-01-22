'use client';

import React from 'react';
import { ComponentDemo } from '@/types/component';
import { SHOWCASE_STYLES } from '@/app/constants';

interface ComponentShowcaseProps {
  demo: ComponentDemo;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ demo }) => {
  const { name, description, component: Component, props = {} } = demo;

  return (
    <div className={SHOWCASE_STYLES.CONTAINER}>
      <div className="px-4 py-2.5 border-b border-[#3C3F41]">
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-semibold text-[#A9B7C6] truncate">{name}</h2>
          <p className="text-xs text-[#808080] mt-0.5 line-clamp-2 min-h-[2.5rem]">{description}</p>
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
