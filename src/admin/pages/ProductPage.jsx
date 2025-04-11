import React, { useState } from "react";
import dummyProducts from "@/data/dummyProducts";
import { useCategory } from "@/context/CategoryContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil, Trash2, Search } from "lucide-react";

const ProductPage = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const { categories } = useCategory();
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({ name: "", category: "", price: "", stock: "" });
  const [showForm, setShowForm] = useState(false);

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
    const data = { ...formData, price: parseInt(formData.price), stock: parseInt(formData.stock) };

    if (isEditMode && selectedProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === selectedProduct.id ? { ...p, ...data } : p))
      );
    } else {
      setProducts((prev) => [...prev, { ...data, id: Date.now() }]);
    }

    setShowForm(false);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Daftar Produk</h1>
        <Button onClick={openAddModal}>+ Tambah Produk</Button>
      </div>

      <div className="flex items-center gap-2">
        <Search size={18} className="text-gray-500" />
        <Input
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <div className="font-semibold">{product.name}</div>
                <div className="text-sm text-muted-foreground">{product.category}</div>
                <div className="text-sm text-green-600">Rp {product.price.toLocaleString()}</div>
                <div className="text-sm">Stok: {product.stock}</div>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" onClick={() => handleEdit(product)}>
                  <Pencil size={16} />
                </Button>
                <Button size="icon" variant="destructive" onClick={() => handleDelete(product.id)}>
                  <Trash2 size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditMode ? "Edit Produk" : "Tambah Produk"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <Input
              placeholder="Nama Produk"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.name}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="Harga"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
            <Input
              type="number"
              placeholder="Stok"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              required
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                Batal
              </Button>
              <Button type="submit">Simpan</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductPage;
