// src/admin/pages/ProductFormPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getProducts, saveProducts } from "@/utils/localStorage";


export default function ProductFormPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const productToEdit = location.state?.product || null;

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    costPrice: "",
    sellingPrice: "",
  });

  const isEditMode = !!productToEdit;

  useEffect(() => {
    if (isEditMode) {
      setFormData(productToEdit);
    }
  }, [isEditMode, productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = getProducts();
  
    if (isEditMode) {
      const updated = products.map((p) =>
        p.id === productToEdit.id ? { ...formData, id: productToEdit.id } : p
      );
      saveProducts(updated);
    } else {
      const newProduct = {
        ...formData,
        id: Date.now(), // ID unik
      };
      saveProducts([...products, newProduct]);
    }
  
    navigate("/admin/products");
  };
  

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">
        {isEditMode ? "Edit Produk" : "Tambah Produk"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nama Produk</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-xl bg-gray-800 text-white placeholder:text-gray-400 border border-gray-600"
            placeholder="Contoh: Mobile Legends 86 Diamonds"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-xl bg-gray-800 text-white placeholder:text-gray-400 border border-gray-600"

            placeholder="Contoh: Mobile Legends"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Harga Modal</label>
          <input
            type="number"
            name="costPrice"
            value={formData.costPrice}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-xl bg-gray-800 text-white placeholder:text-gray-400 border border-gray-600"

          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Harga Jual</label>
          <input
            type="number"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-xl bg-gray-800 text-white placeholder:text-gray-400 border border-gray-600"

          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-xl"
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
