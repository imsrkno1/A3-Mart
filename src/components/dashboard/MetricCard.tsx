import React from 'react';
import { ArrowDownRight, ArrowUpRight, CreditCard, Users, Percent, Clock, DollarSign } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeTimeframe: string;
  icon: 'dollar' | 'users' | 'percentage' | 'clock' | 'card';
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeTimeframe,
  icon 
}) => {
  const isPositive = change >= 0;

  const getIcon = () => {
    switch (icon) {
      case 'dollar':
        return <DollarSign size={20} className="text-blue-500" />;
      case 'users':
        return <Users size={20} className="text-indigo-500" />;
      case 'percentage':
        return <Percent size={20} className="text-green-500" />;
      case 'clock':
        return <Clock size={20} className="text-orange-500" />;
      case 'card':
        return <CreditCard size={20} className="text-purple-500" />;
      default:
        return <DollarSign size={20} className="text-blue-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-800 dark:text-white">{value}</h3>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          {getIcon()}
        </div>
      </div>

      <div className="flex items-center mt-4">
        <span className={`flex items-center text-sm ${
          isPositive 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-red-600 dark:text-red-400'
        }`}>
          {isPositive ? (
            <ArrowUpRight size={16} className="mr-1" />
          ) : (
            <ArrowDownRight size={16} className="mr-1" />
          )}
          {Math.abs(change)}%
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
          {changeTimeframe}
        </span>
      </div>
    </div>
  );
};

export default MetricCard;