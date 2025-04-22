import React from 'react';
import { trafficSources } from '../../data/mockData';

const DonutChart: React.FC = () => {
  const size = 180;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate total
  const total = trafficSources.reduce((sum, source) => sum + source.value, 0);
  
  // Colors
  const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#10b981'];

  // Calculate segments
  let currentOffset = 0;
  const segments = trafficSources.map((source, index) => {
    const percentage = source.value / total;
    const strokeDasharray = `${circumference * percentage} ${circumference - (circumference * percentage)}`;
    const strokeDashoffset = -currentOffset;
    currentOffset += circumference * percentage;
    
    return {
      ...source,
      strokeDasharray,
      strokeDashoffset,
      percentage,
      color: colors[index % colors.length]
    };
  });

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            className="dark:stroke-gray-700"
          />
          
          {/* Segments */}
          {segments.map((segment, index) => (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={segment.strokeDasharray}
              strokeDashoffset={segment.strokeDashoffset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          ))}
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-bold text-gray-800 dark:text-white">
            {trafficSources[0].value}%
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {trafficSources[0].name}
          </span>
        </div>
      </div>
      
      {/* Legend */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-1"
              style={{ backgroundColor: segment.color }}
            ></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {segment.name} ({Math.round(segment.percentage * 100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;