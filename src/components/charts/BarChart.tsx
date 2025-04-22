import React from 'react';
import { categories } from '../../data/mockData';

const BarChart: React.FC = () => {
  const chartHeight = 200;
  const barColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#10b981'];
  
  // Find max value for scaling
  const maxValue = Math.max(...categories.map(c => c.value));
  
  return (
    <div className="h-[260px] w-full">
      <div className="flex h-[200px] items-end">
        {categories.map((category, index) => {
          const height = (category.value / maxValue) * chartHeight;
          return (
            <div 
              key={index} 
              className="flex-1 flex flex-col items-center mx-1"
            >
              <div 
                className="w-full max-w-[50px] rounded-t relative group"
                style={{ 
                  height: `${height}px`,
                  backgroundColor: barColors[index % barColors.length]
                }}
              >
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                  ${category.value.toLocaleString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Labels */}
      <div className="flex mt-2">
        {categories.map((category, index) => (
          <div key={index} className="flex-1 text-center">
            <div className="text-xs text-gray-600 dark:text-gray-400 truncate px-1">
              {category.name}
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap mt-4 justify-center gap-3">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-1"
              style={{ backgroundColor: barColors[index % barColors.length] }}
            ></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;