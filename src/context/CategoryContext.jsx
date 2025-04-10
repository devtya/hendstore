import React, { createContext, useContext, useState } from "react";
import dummyCategories from "@/data/dummyCategories";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(dummyCategories);

  const addCategory = (name) => {
    const newCategory = {
      id: Date.now(), // pakai timestamp unik
      name,
    };
    setCategories((prev) => [...prev, newCategory]);
  };
  

  const updateCategory = (updatedCategory) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === updatedCategory.id ? { ...cat, ...updatedCategory } : cat
      )
    );
  };

  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  return (
    <CategoryContext.Provider
      value={{ categories, addCategory, updateCategory, deleteCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

// Hook biar gampang dipakai
export const useCategory = () => useContext(CategoryContext);
