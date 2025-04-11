import React, { useState } from "react";
import { useCategory } from "@/context/CategoryContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const CategoryPage = () => {
  const { categories, addCategory, updateCategory, deleteCategory } = useCategory();

  const [formName, setFormName] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const openAddForm = () => {
    setFormName("");
    setIsEditMode(false);
    setSelectedId(null);
    setShowDialog(true);
  };

  const handleEdit = (cat) => {
    setFormName(cat.name);
    setSelectedId(cat.id);
    setIsEditMode(true);
    setShowDialog(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      updateCategory(selectedId, formName);
    } else {
      addCategory(formName);
    }
    setShowDialog(false);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Daftar Kategori</h1>
        <Button onClick={openAddForm}>+ Tambah Kategori</Button>
      </div>

      <div className="grid gap-4">
        {categories.map((cat) => (
          <Card key={cat.id}>
            <CardContent className="flex justify-between items-center p-4">
              <div className="font-medium">{cat.name}</div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => handleEdit(cat)}>Edit</Button>
                <Button variant="destructive" onClick={() => deleteCategory(cat.id)}>Hapus</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditMode ? "Edit Kategori" : "Tambah Kategori"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Nama Kategori"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              required
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowDialog(false)}>
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

export default CategoryPage;
