import React, { useState } from 'react';
import Papa from 'papaparse';

interface Product {
  name: string;
  brand: string;
  price: number;
  stock: number;
  expiryDate: string;
}

const Inventory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Product>({
    name: '',
    brand: '',
    price: 0,
    stock: 0,
    expiryDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    setProducts([...products, formData]);
    setFormData({ name: '', brand: '', price: 0, stock: 0, expiryDate: '' });
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setProducts(results.data as Product[]);
        },
      });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>

      {/* Manual Product Entry */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add Product Manually</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="expiryDate"
            placeholder="Expiry Date"
            value={formData.expiryDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Product
        </button>
      </div>

      {/* CSV Upload */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Import from CSV</h2>
        <input type="file" accept=".csv" onChange={handleCSVUpload} className="mb-4" />
      </div>

      {/* Product List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Product List</h2>
        <table className="w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Brand</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Stock</th>
              <th className="border px-4 py-2">Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.brand}</td>
                <td className="border px-4 py-2">₹{product.price}</td>
                <td className="border px-4 py-2">{product.stock}</td>
                <td className="border px-4 py-2">{product.expiryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
