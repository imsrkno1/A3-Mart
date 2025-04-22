import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">A3 Mart</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
          <Link to="/billing" className="text-blue-600 hover:underline">Billing</Link>
          <Link to="/inventory" className="text-blue-600 hover:underline">Inventory</Link>
          <Link to="/customers" className="text-blue-600 hover:underline">Customers</Link>
          <Link to="/reports" className="text-blue-600 hover:underline">Reports</Link>
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
