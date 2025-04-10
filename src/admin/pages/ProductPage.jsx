import React, { useState } from "react";
import dummyProducts from "@/data/dummyProducts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const [products, setProducts] = useState(dummyProducts);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Produk</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id} className="flex justify-between items-center p-4">
            <div>
              <div className="font-semibold">{product.name}</div>
              <div className="text-sm text-gray-500">{product.category}</div>
              <div className="text-sm text-green-600">Rp {product.price.toLocaleString()}</div>
              <div className="text-sm">Stok: {product.stock}</div>
            </div>
            <Button variant="destructive" onClick={() => handleDelete(product.id)}>
              Hapus
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
