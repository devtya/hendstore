import React, { useState } from "react";
import { useCategory } from "@/context/CategoryContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { categories, addCategory, updateCategory, deleteCategory } = useCategory();

  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openAddForm = () => {
    setFormName("");
    setIsEditMode(false);
    setSelectedId(null);
    setShowForm(true);
  };

  const handleEdit = (cat) => {
    setFormName(cat.name);
    setSelectedId(cat.id);
    setIsEditMode(true);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      updateCategory(selectedId, formName);
    } else {
      addCategory(formName);
    }
    setShowForm(false);
    setFormName("");
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Daftar Kategori</h1>
        <Button onClick={openAddForm}>+ Tambah Kategori</Button>
      </div>

      <div className="grid gap-4">
        {categories.map((cat) => (
          <Card key={cat.id} className="flex justify-between items-center p-4">
            <div className="font-medium">{cat.name}</div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleEdit(cat)}>
                Edit
              </Button>
              <Button variant="destructive" onClick={() => deleteCategory(cat.id)}>
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
              {isEditMode ? "Edit Kategori" : "Tambah Kategori"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Nama Kategori"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full p-2 border rounded dark:bg-gray-700"
                required
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
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

export default CategoryPage;
