import React from 'react';
import { BarChart2, ShoppingCart, Users, Package, TrendingUp } from 'lucide-react';
import MetricCard from '../components/dashboard/MetricCard';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">A3 Mart Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition-colors duration-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-400">
            Today's Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Today's Sales"
          value="₹24,500"
          change={12.5}
          changeTimeframe="vs yesterday"
          icon="dollar"
        />
        <MetricCard
          title="Total Customers"
          value="156"
          change={8.2}
          changeTimeframe="this week"
          icon="users"
        />
        <MetricCard
          title="Low Stock Items"
          value="12"
          change={-4.5}
          changeTimeframe="since last week"
          icon="percentage"
        />
        <MetricCard
          title="Expiring Soon"
          value="8"
          change={2}
          changeTimeframe="items this month"
          icon="clock"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
          <div className="h-[300px] flex items-center justify-center text-gray-500">
            Sales chart will be implemented here
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
          <div className="h-[300px] flex items-center justify-center text-gray-500">
            Products chart will be implemented here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
