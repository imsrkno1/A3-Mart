import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  expanded: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ icon, label, active = false, expanded }) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center p-2 rounded-lg transition-colors duration-200 relative group ${
          active 
            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        <div className="flex-shrink-0">
          <span className={`${active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'}`}>
            {icon}
          </span>
        </div>
        {expanded && (
          <span className="ml-3 font-medium">{label}</span>
        )}
        {!expanded && (
          <span className="fixed left-20 bg-gray-800 text-white px-2 py-1 ml-6 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm pointer-events-none z-50 whitespace-nowrap">
            {label}
          </span>
        )}
        {active && expanded && (
          <span className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-md rounded-br-md" />
        )}
      </a>
    </li>
  );
};