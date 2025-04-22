import React from 'react';
import MetricCard from './MetricCard';
import AreaChart from '../charts/AreaChart';
import BarChart from '../charts/BarChart';
import DonutChart from '../charts/DonutChart';
import RecentActivityTable from './RecentActivityTable';
import { formatCurrency, formatNumber } from '../../utils/formatters';
import { ActivityItem, User } from '../../types';
import { recentActivity, users } from '../../data/mockData';

const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard 
        title="Total Revenue"
        value={formatCurrency(854200)}
        change={12.5}
        changeTimeframe="from last month"
        icon="dollar"
      />
      <MetricCard 
        title="Active Users"
        value={formatNumber(2845)}
        change={-3.6}
        changeTimeframe="from last month"
        icon="users"
      />
      <MetricCard 
        title="Conversion Rate"
        value="5.6%"
        change={0.8}
        changeTimeframe="from last month"
        icon="percentage"
      />
      <MetricCard 
        title="Avg. Session"
        value="4m 32s"
        change={9.2}
        changeTimeframe="from last month"
        icon="clock"
      />

      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Revenue Overview</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Monthly revenue for the current year</p>
          </div>
          <div className="p-5">
            <AreaChart />
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-1">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden h-full transition-colors duration-300">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Traffic Sources</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Top referrers this month</p>
          </div>
          <div className="p-5 flex justify-center items-center">
            <DonutChart />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Sales by Category</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Performance of top product categories</p>
          </div>
          <div className="p-5">
            <BarChart />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Activity</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Latest transactions and events</p>
          </div>
          <div>
            <RecentActivityTable activity={recentActivity as ActivityItem[]} />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Top Customers</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Most active users this month</p>
            </div>
            <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition-colors duration-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-400">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                <tr>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Spent</th>
                  <th className="px-6 py-3">Conversion</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {users.slice(0, 5).map((user: User, index: number) => (
                  <tr key={index} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium text-sm mr-3">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 dark:text-white">{user.name}</div>
                          <div className="text-gray-500 dark:text-gray-400 text-xs">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        user.status === 'active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium">{formatCurrency(user.spent)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full" 
                            style={{ width: `${user.conversion}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">{user.conversion}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;