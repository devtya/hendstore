import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminLayout = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  useEffect(() => {
    const darkClass = document.documentElement.classList.contains("dark");
    setIsDark(darkClass);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <aside className="w-60 bg-white dark:bg-gray-800 text-black dark:text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-4">HendStore Admin</h2>
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400"
              }
            >
              Produk
            </NavLink>
            <NavLink
              to="/admin/categories"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400"
              }
            >
              Kategori
            </NavLink>
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-2">
          <button
            onClick={toggleTheme}
            className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded flex items-center gap-2 justify-center"
          >
            {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>

          <button
            onClick={() => alert("Logout action here")}
            className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded flex items-center gap-2 justify-center"
          >
            🔒 Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
