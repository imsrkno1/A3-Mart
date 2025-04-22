import React, { useState } from 'react';
import { Calendar, Download, Filter } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Reports & Analytics</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2">
            <Calendar size={20} />
            <span>Date Range</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
            <Download size={20} />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <div className="h-[200px] flex items-center justify-center text-gray-500">
            Sales chart will be implemented here
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Category Performance</h2>
          <div className="h-[200px] flex items-center justify-center text-gray-500">
            Category chart will be implemented here
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>
          <div className="h-[200px] flex items-center justify-center text-gray-500">
            Products chart will be implemented here
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold">Detailed Reports</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-left">
              <h3 className="font-semibold mb-1">Sales Report</h3>
              <p className="text-sm text-gray-500">Detailed sales analysis with trends</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-left">
              <h3 className="font-semibold mb-1">Inventory Report</h3>
              <p className="text-sm text-gray-500">Stock levels and movement</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-left">
              <h3 className="font-semibold mb-1">Customer Report</h3>
              <p className="text-sm text-gray-500">Customer behavior and loyalty</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;