import React, { useState } from 'react';
import { Search, Plus, User, ShoppingCart } from 'lucide-react';
import { FaCashRegister } from 'react-icons/fa';

const Billing = () => {
  const [barcode, setBarcode] = useState('');

  return (
    <div className="h-full flex">
      {/* Left side - Product scanning and cart */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Scan barcode or search product..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 overflow-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-400">
                <th className="pb-3">Product</th>
                <th className="pb-3">Qty</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Discount</th>
                <th className="pb-3">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              {/* Placeholder row */}
              <tr className="border-t dark:border-gray-700">
                <td className="py-3">Scan products to add them here</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right side - Bill summary */}
      <div className="w-96 ml-4 flex flex-col">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-4">
          <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors duration-200">
            <User size={20} />
            <span>Add Customer</span>
          </button>
        </div>

        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-4">Bill Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Subtotal</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Discount</span>
              <span>-₹0.00</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Tax (GST)</span>
              <span>₹0.00</span>
            </div>
            <div className="pt-3 border-t dark:border-gray-700">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹0.00</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <ShoppingCart size={20} />
              <span>Complete Sale</span>
            </button>
            <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              Hold Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
