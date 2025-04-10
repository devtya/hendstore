import React, { useState } from "react";
import dummyProducts from "@/data/dummyProducts";
import { useCategory } from "@/context/CategoryContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const [products, setProducts] = useState(dummyProducts);
  const { categories } = useCategory();
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const openAddModal = () => {
    setFormData({ name: "", category: "", price: "", stock: "" });
    setIsEditMode(false);
    setSelectedProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setFormData(product);
    setSelectedProduct(product);
    setIsEditMode(true);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      price: parseInt(formData.price),
      stock: parseInt(formData.stock),
    };

    if (isEditMode && selectedProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === selectedProduct.id ? { ...p, ...data } : p))
      );
    } else {
      setProducts((prev) => [...prev, { ...data, id: Date.now() }]);
    }

    setShowForm(false);
    setFormData({ name: "", category: "", price: "", stock: "" });
    setIsEditMode(false);
    setSelectedProduct(null);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Daftar Produk</h1>
        <Button onClick={openAddModal}>+ Tambah Produk</Button>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex justify-between items-center p-4"
          >
            <div>
              <div className="font-semibold">{product.name}</div>
              <div className="text-sm text-gray-500">{product.category}</div>
              <div className="text-sm text-green-600">
                Rp {product.price.toLocaleString()}
              </div>
              <div className="text-sm">Stok: {product.stock}</div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleEdit(product)}>
                Edit
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleDelete(product.id)}
              >
                Hapus
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold">
              {isEditMode ? "Edit Produk" : "Tambah Produk"}
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Nama Produk"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 border rounded dark:bg-gray-700"
                required
              />
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full p-2 border rounded dark:bg-gray-700"
                required
              >
                <option value="">Pilih Kategori</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Harga"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full p-2 border rounded dark:bg-gray-700"
                required
              />
              <input
                type="number"
                placeholder="Stok"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
                className="w-full p-2 border rounded dark:bg-gray-700"
                required
              />
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Batal
                </Button>
                <Button type="submit">Simpan</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
