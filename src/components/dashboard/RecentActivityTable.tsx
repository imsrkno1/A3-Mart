import React from 'react';
import { formatDateTime } from '../../utils/formatters';
import { ActivityItem } from '../../types';
import { CheckCircle, XCircle, AlertCircle, ArrowRightCircle } from 'lucide-react';

interface RecentActivityTableProps {
  activity: ActivityItem[];
}

const RecentActivityTable: React.FC<RecentActivityTableProps> = ({ activity }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'error':
        return <XCircle size={16} className="text-red-500" />;
      case 'warning':
        return <AlertCircle size={16} className="text-yellow-500" />;
      default:
        return <ArrowRightCircle size={16} className="text-blue-500" />;
    }
  };

  return (
    <div className="overflow-y-auto max-h-[300px]">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {activity.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="mr-3">{getIcon(item.type)}</div>
                  <div>
                    <div className="text-sm font-medium text-gray-800 dark:text-white">{item.description}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.details}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="text-gray-500 dark:text-gray-400">{formatDateTime(item.timestamp)}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivityTable;