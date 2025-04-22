import React from 'react';
import { Link } from 'react-router-dom';


export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">A3 Mart</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:underline">
            <FaHome /> Dashboard
          </Link>
          <Link to="/billing" className="flex items-center gap-2 text-blue-600 hover:underline">
            <FaCashRegister /> Billing
          </Link>
          <Link to="/inventory" className="flex items-center gap-2 text-blue-600 hover:underline">
            <FaBoxes /> Inventory
          </Link>
          <Link to="/customers" className="flex items-center gap-2 text-blue-600 hover:underline">
            <FaUsers /> Customers
          </Link>
          <Link to="/reports" className="flex items-center gap-2 text-blue-600 hover:underline">
            <FaChartBar /> Reports
          </Link>
        </nav>
      </div>

      {/* Main content with topbar */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex justify-end items-center">
          <div className="flex items-center gap-2 text-gray-600">
            <FaUserCircle size={24} />
            <span>Admin</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
