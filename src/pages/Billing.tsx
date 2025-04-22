import React, { useState, useEffect } from 'react';

interface Product {
  name: string;
  brand: string;
  price: number;
  stock: number;
  expiryDate: string;
  barcode: string;
}

interface CartItem extends Product {
  quantity: number;
}

const BillingPage = () => {
  const [barcodeInput, setBarcodeInput] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]); // This should ideally come from global state or backend

  // Simulated fetch of inventory
  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  const handleBarcodeScan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBarcodeInput(e.target.value);
    const foundProduct = products.find(p => p.barcode === e.target.value);
    if (foundProduct) {
      setCart(prev => {
        const existing = prev.find(item => item.barcode === foundProduct.barcode);
        if (existing) {
          return prev.map(item =>
            item.barcode === foundProduct.barcode ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prev, { ...foundProduct, quantity: 1 }];
        }
      });
      setBarcodeInput('');
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Billing</h1>

      <input
        autoFocus
        type="text"
        placeholder="Scan barcode"
        value={barcodeInput}
        onChange={handleBarcodeScan}
        className="border p-2 w-full max-w-sm rounded mb-4"
      />

      <table className="w-full table-auto border border-gray-200 print:text-xs print:leading-tight">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">Price</th>
            <th className="border px-2 py-1">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{item.name}</td>
              <td className="border px-2 py-1">{item.quantity}</td>
              <td className="border px-2 py-1">₹{item.price}</td>
              <td className="border px-2 py-1">₹{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right font-bold text-lg">
        Total: ₹{total.toFixed(2)}
      </div>

      <div className="mt-2">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Print Bill
        </button>
      </div>
    </div>
  );
};

export default BillingPage;
