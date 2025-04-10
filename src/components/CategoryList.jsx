const categories = [
    { name: "Mobile Legends", image: "https://cdn.hendstore.com/mlbb.png" },
    { name: "Free Fire", image: "https://cdn.hendstore.com/freefire.png" },
    { name: "PUBG Mobile", image: "https://cdn.hendstore.com/pubg.png" },
    { name: "Valorant", image: "https://cdn.hendstore.com/valorant.png" },
  ];
  
  function CategoryList() {
    return (
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Kategori Game</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition"
            >
              <img src={cat.image} alt={cat.name} className="w-12 h-12 object-contain mb-2" />
              <span className="text-sm font-medium text-gray-700 text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CategoryList;
  