import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">HendStore</h1>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex items-center">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Beranda</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Kategori</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Produk</a>
          {/* Toggle Dark Mode */}
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-2 flex flex-col space-y-2 px-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Beranda</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Kategori</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Produk</a>
            <button
              onClick={toggleTheme}
              className="w-fit text-gray-600 dark:text-gray-300 hover:text-blue-500 transition mt-2"
            >
              {darkMode ? "☀️ Mode Terang" : "🌙 Mode Gelap"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
