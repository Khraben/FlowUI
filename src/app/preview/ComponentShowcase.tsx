'use client';

import React from 'react';
import { ComponentDemo } from '@/types/component';
import { SHOWCASE_STYLES, PREVIEW_TEXT } from '@/constants';

interface ComponentShowcaseProps {
  demo: ComponentDemo;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ demo }) => {
  const { name, description, category, component: Component, props = {} } = demo;

  return (
    <div className={SHOWCASE_STYLES.CONTAINER}>
      <div className={SHOWCASE_STYLES.HEADER.BASE}>
        <div className={SHOWCASE_STYLES.HEADER.WRAPPER}>
          <div>
            <h2 className={SHOWCASE_STYLES.HEADER.TITLE}>{name}</h2>
            <p className={SHOWCASE_STYLES.HEADER.DESCRIPTION}>{description}</p>
          </div>
          <span className={SHOWCASE_STYLES.HEADER.CATEGORY}>{category}</span>
        </div>
      </div>

      <div className={SHOWCASE_STYLES.PREVIEW.BASE}>
        <div className={SHOWCASE_STYLES.PREVIEW.STAGE}>
          <Component {...props} />
        </div>
      </div>

      <div className={SHOWCASE_STYLES.FOOTER.BASE}>
        <div className={SHOWCASE_STYLES.FOOTER.WRAPPER}>
          <span>
            {PREVIEW_TEXT.COMPONENT_ID_LABEL} {demo.id}
          </span>
          <button className={SHOWCASE_STYLES.FOOTER.BUTTON}>{PREVIEW_TEXT.VIEW_CODE_BUTTON}</button>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
