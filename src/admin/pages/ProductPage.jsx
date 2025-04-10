import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { getProducts, saveProducts } from "@/utils/localStorage";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = getProducts();
    setProducts(data);
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Yakin ingin menghapus produk ini?");
    if (confirmed) {
      const updated = products.filter((product) => product.id !== id);
      setProducts(updated);
      saveProducts(updated); // Simpan perubahan ke localStorage
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Daftar Produk</h1>
        <button
          onClick={() => navigate("/admin/products/new")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
        >
          + Tambah Produk
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product.id} className="shadow-md rounded-2xl">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-indigo-600">
                    Rp {Number(product.sellingPrice).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    Modal: Rp {Number(product.costPrice).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="text-right flex justify-end gap-2">
                <button
                  onClick={() =>
                    navigate(`/admin/products/edit/${product.id}`, {
                      state: { product },
                    })
                  }
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
