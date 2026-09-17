import React from 'react';
import { CATEGORIES } from '../data/categories';
import { CategoryItem } from '../types';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-white">
          Chagua Aina ya Simulizi Unayoipenda
        </h3>
        <p className="text-xs sm:text-sm text-pink-200/70 mt-1">
          Kuanzia maumivu ya heartbreak hadi mahaba mazito ya ndoa
        </p>
      </div>

      {/* Categories Scrollable Pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none no-scrollbar justify-start lg:justify-center">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                isSelected
                  ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white border-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.4)] scale-105'
                  : 'bg-[#15072a]/90 text-slate-300 border-pink-500/20 hover:border-pink-400/50 hover:bg-pink-900/20'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
