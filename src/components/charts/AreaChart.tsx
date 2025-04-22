import React from 'react';
import { revenue } from '../../data/mockData';

const AreaChart: React.FC = () => {
  const chartHeight = 240;
  const chartWidth = 800;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Calculate max value for scaling
  const maxValue = Math.max(...revenue) * 1.1;
  
  // Points for the path
  const points = revenue.map((value, index) => {
    const x = (index / (revenue.length - 1)) * chartWidth;
    const y = chartHeight - (value / maxValue) * chartHeight;
    return `${x},${y}`;
  }).join(' ');
  
  // Area under the curve
  const area = `
    M0,${chartHeight}
    L${points}
    L${chartWidth},${chartHeight}
    Z
  `;

  // Grid lines
  const gridLines = Array.from({ length: 5 }, (_, i) => {
    const y = chartHeight - (chartHeight * (i + 1)) / 5;
    return (
      <line 
        key={i}
        x1="0" 
        y1={y} 
        x2={chartWidth} 
        y2={y} 
        stroke="#e5e7eb" 
        strokeDasharray="4" 
        className="dark:stroke-gray-700"
      />
    );
  });

  return (
    <div className="relative h-[300px] w-full">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors duration-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-400">
            Monthly
          </button>
          <button className="px-3 py-1 text-sm hover:bg-gray-100 text-gray-600 rounded-lg font-medium transition-colors duration-200 dark:hover:bg-gray-700 dark:text-gray-300">
            Quarterly
          </button>
          <button className="px-3 py-1 text-sm hover:bg-gray-100 text-gray-600 rounded-lg font-medium transition-colors duration-200 dark:hover:bg-gray-700 dark:text-gray-300">
            Yearly
          </button>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-800 dark:text-white">Total Revenue: </span>
          $854,200
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg 
          viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
          className="w-full h-[240px] overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {gridLines}
          
          {/* Area under the curve */}
          <path 
            d={area} 
            fill="url(#blue-gradient)" 
            fillOpacity="0.2" 
          />
          
          {/* Line */}
          <polyline 
            points={points} 
            fill="none" 
            stroke="#3b82f6" 
            strokeWidth="2"
            className="dark:stroke-blue-400"
          />
          
          {/* Data points */}
          {revenue.map((value, index) => {
            const x = (index / (revenue.length - 1)) * chartWidth;
            const y = chartHeight - (value / maxValue) * chartHeight;
            return (
              <circle 
                key={index} 
                cx={x} 
                cy={y} 
                r="4" 
                fill="white" 
                stroke="#3b82f6" 
                strokeWidth="2"
                className="dark:stroke-blue-400"
              />
            );
          })}
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" className="dark:stop-color-blue-400" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" className="dark:stop-color-blue-900" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* X-axis labels */}
      <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400 px-2">
        {months.map((month, index) => (
          <div key={index}>{month}</div>
        ))}
      </div>
    </div>
  );
};

export default AreaChart;