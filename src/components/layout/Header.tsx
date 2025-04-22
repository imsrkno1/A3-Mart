import React, { useState } from 'react';
import { Bell, Calendar, User, Moon, Sun, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        <div className="flex items-center flex-1">
          <div className="relative md:w-64 lg:w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search dashboard..."
              className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 dark:bg-gray-700 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 dark:text-gray-200 transition-all duration-200"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
            <Calendar size={20} />
          </button>

          <div className="relative">
            <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
              <Bell size={20} />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          <button 
            onClick={toggleTheme}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="border-l h-6 border-gray-200 dark:border-gray-700 mx-2"></div>

          <button className="flex items-center focus:outline-none">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <User size={18} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;