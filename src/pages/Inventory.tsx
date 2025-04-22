import React, { useState } from 'react';
import Papa from 'papaparse';

interface Product {
  name: string;
  brand: string;
  price: number;
  expiryDate: string;
}

export default function Inventory() {
  const [inventory, setInventory] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>({ name: '', brand: '', price: 0, expiryDate: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) : value }));
  };

  const handleAdd = () => {
    setInventory(prev => [...prev, form]);
    setForm({ name: '', brand: '', price: 0, expiryDate: '' });
  };

  const handleCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = results.data as Product[];
        setInventory(prev => [...prev, ...parsed]);
      },
    });
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Inventory Management</h2>
      <div className="space-y-2">
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="border p-2 w-full" />
        <input name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} className="border p-2 w-full" />
        <input name="price" placeholder="Price" type="number" value={form.price} onChange={handleChange} className="border p-2 w-full" />
        <input name="expiryDate" type="date" value={form.expiryDate} onChange={handleChange} className="border p-2 w-full" />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded">Add Product</button>
      </div>
      <div>
        <input type="file" accept=".csv" onChange={handleCSV} className="border p-2" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Inventory List</h3>
        <ul className="space-y-1">
          {inventory.map((item, idx) => (
            <li key={idx} className="border p-2 rounded shadow">
              <strong>{item.name}</strong> | Brand: {item.brand} | ₹{item.price} | Exp: {item.expiryDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
