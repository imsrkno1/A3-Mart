import React, { useState } from 'react';
import { Home, BarChart2, Clock, Users, Settings, CreditCard, HelpCircle, ChevronRight, Menu } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={toggleMobile}
        ></div>
      )}

      {/* Mobile menu button */}
      <button 
        onClick={toggleMobile}
        className="fixed z-30 bottom-4 right-4 p-3 rounded-full bg-blue-600 text-white shadow-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-700"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-20 transition-all duration-300 ${
          expanded ? 'w-64' : 'w-20'
        } ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className={`flex items-center ${expanded ? 'justify-between' : 'justify-center'} py-5 px-4`}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BarChart2 size={20} className="text-white" />
              </div>
              {expanded && <span className="text-xl font-semibold dark:text-white">Analytics</span>}
            </div>
            <button 
              onClick={toggleSidebar}
              className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 lg:block hidden"
            >
              <ChevronRight size={20} className={`transform transition-transform duration-200 ${expanded ? '' : 'rotate-180'}`} />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 pt-2 pb-4 overflow-y-auto">
            <ul className="space-y-1 px-3">
              <NavLink icon={<Home size={20} />} label="Dashboard" active expanded={expanded} />
              <NavLink icon={<BarChart2 size={20} />} label="Analytics" expanded={expanded} />
              <NavLink icon={<Clock size={20} />} label="History" expanded={expanded} />
              <NavLink icon={<Users size={20} />} label="Users" expanded={expanded} />
              <NavLink icon={<CreditCard size={20} />} label="Transactions" expanded={expanded} />
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <ul className="space-y-1 px-3">
                <NavLink icon={<Settings size={20} />} label="Settings" expanded={expanded} />
                <NavLink icon={<HelpCircle size={20} />} label="Help" expanded={expanded} />
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;