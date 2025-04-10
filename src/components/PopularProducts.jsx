import { useState } from "react";
import BuyModal from "./BuyModal";

const products = [
  {
    name: "86 Diamonds MLBB",
    price: 21500,
    image: "https://cdn.hendstore.com/mlbb86.png",
  },
  {
    name: "Weekly Diamond Pass",
    price: 28900,
    image: "https://cdn.hendstore.com/weeklypass.png",
  },
  {
    name: "70 Diamonds Free Fire",
    price: 10000,
    image: "https://cdn.hendstore.com/ff70.png",
  },
  {
    name: "PUBG 60 UC",
    price: 15000,
    image: "https://cdn.hendstore.com/pubg60uc.png",
  },
];

function PopularProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="mt-10">
      <h2 className="text-lg font-bold mb-4">Produk Populer 🔥</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 flex flex-col items-center hover:shadow-lg transition"
          >
            <img src={item.image} alt={item.name} className="w-20 h-20 object-contain mb-2" />
            <p className="text-sm font-semibold text-center">{item.name}</p>
            <p className="text-sm text-blue-600 font-bold mt-1">Rp {item.price.toLocaleString()}</p>
            <button
              onClick={() => openModal(item)}
              className="mt-2 bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
            >
              Beli
            </button>
          </div>
        ))}
      </div>

      {/* Modal harus di dalam return */}
      {selectedProduct && (
        <BuyModal
          isOpen={true}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default PopularProducts;
