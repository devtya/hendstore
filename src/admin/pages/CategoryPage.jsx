import React from "react";

export default function CategoryPage() {
  // Nanti bisa diganti jadi dinamis
  const categories = ["Mobile Legends", "Free Fire", "PUBG Mobile"];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Kategori</h1>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
