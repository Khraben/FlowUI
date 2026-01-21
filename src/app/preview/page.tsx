'use client';

import React, { useState, useEffect, useCallback } from 'react';
import ComponentShowcase from './ComponentShowcase';
import { componentRegistry } from './ComponentRegistry';
import { ComponentCategory } from '@/types/component';
import { 
  PREVIEW_CONFIG, 
  PREVIEW_TEXT, 
  FILTER_CATEGORY
} from '@/constants';

export default function PreviewPage() {
  const [displayedComponents, setDisplayedComponents] = useState<number>(PREVIEW_CONFIG.COMPONENTS_PER_PAGE);
  const [selectedCategory, setSelectedCategory] = useState<ComponentCategory | typeof FILTER_CATEGORY.ALL>(FILTER_CATEGORY.ALL);
  const [isLoading, setIsLoading] = useState(false);

  const categories: (ComponentCategory | typeof FILTER_CATEGORY.ALL)[] = [
    FILTER_CATEGORY.ALL,
    ...Array.from(new Set(componentRegistry.map(c => c.category as ComponentCategory))),
  ];

  const filteredComponents = selectedCategory === FILTER_CATEGORY.ALL
    ? componentRegistry 
    : componentRegistry.filter(c => c.category === selectedCategory);

  const componentsToShow = filteredComponents.slice(0, displayedComponents);
  const hasMore = displayedComponents < filteredComponents.length;

  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - PREVIEW_CONFIG.SCROLL_THRESHOLD) {
      setIsLoading(true);
      
      setTimeout(() => {
        setDisplayedComponents(prev => prev + PREVIEW_CONFIG.COMPONENTS_PER_PAGE);
        setIsLoading(false);
      }, PREVIEW_CONFIG.LOADING_DELAY);
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setDisplayedComponents(PREVIEW_CONFIG.COMPONENTS_PER_PAGE);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B2B2B] via-[#313335] to-[#2B2B2B]">
      <header className="sticky top-0 z-50 bg-[#3C3F41]/95 backdrop-blur-md border-b border-[#323232] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center text-center gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#6897BB] to-[#287BDE] bg-clip-text text-transparent">
                {PREVIEW_TEXT.TITLE}
              </h1>
              <p className="text-[#A9B7C6] mt-1">
                {PREVIEW_TEXT.SUBTITLE}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#808080]">{PREVIEW_TEXT.TOTAL_LABEL}</span>
              <span className="font-bold text-[#6897BB]">{filteredComponents.length}</span>
              <span className="text-[#808080]">{PREVIEW_TEXT.COMPONENTS_LABEL}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-[#3C3F41]/95 backdrop-blur-md border-b border-[#323232] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#287BDE] to-[#6897BB] text-white shadow-lg border border-[#323232]'
                    : 'bg-[#2B2B2B] text-[#A9B7C6] hover:bg-[#3C3F41] border border-[#323232]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentsToShow.map((demo) => (
            <ComponentShowcase key={demo.id} demo={demo} />
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#3C3F41] border-t-[#6897BB] rounded-full animate-spin"></div>
              <p className="text-[#A9B7C6] font-medium">{PREVIEW_TEXT.LOADING_MESSAGE}</p>
            </div>
          </div>
        )}

        {!hasMore && componentsToShow.length > 0 && (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#287BDE] to-[#6897BB] rounded-full flex items-center justify-center border border-[#323232]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#A9B7C6] mb-2">{PREVIEW_TEXT.ALL_LOADED_TITLE}</h3>
              <p className="text-[#808080]">
                {PREVIEW_TEXT.ALL_LOADED_MESSAGE(filteredComponents.length, selectedCategory)}
              </p>
            </div>
          </div>
        )}

        {componentsToShow.length === 0 && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#3C3F41] rounded-full flex items-center justify-center border border-[#323232]">
                <svg className="w-12 h-12 text-[#808080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#A9B7C6] mb-2">{PREVIEW_TEXT.NO_COMPONENTS_TITLE}</h3>
              <p className="text-[#808080]">{PREVIEW_TEXT.NO_COMPONENTS_MESSAGE}</p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-[#3C3F41] border-t border-[#323232] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-[#808080]">
            {PREVIEW_TEXT.FOOTER_TEXT}
          </p>
        </div>
      </footer>
    </div>
  );
}
