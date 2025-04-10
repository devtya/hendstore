import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Tags,
  Sun,
  Moon,
  LogOut
} from "lucide-react";

const Sidebar = ({ isDark, toggleTheme, onClose }) => {
  const menuItems = [
    { label: "Dashboard", to: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Produk", to: "/admin/products", icon: <Package size={18} /> },
    { label: "Kategori", to: "/admin/categories", icon: <Tags size={18} /> },
  ];

  return (
    <aside className="w-60 h-full p-4 flex flex-col justify-between bg-white dark:bg-gray-800 text-black dark:text-white">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold mb-4">HendStore Admin</h2>
        <nav className="flex flex-col gap-2">
          {menuItems.map(({ label, to, icon }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
                  isActive ? "text-blue-500 font-semibold" : "text-inherit"
                }`
              }
              onClick={onClose}
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-2">
        <button
          onClick={toggleTheme}
          className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded flex items-center gap-2 justify-center"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>

        <button
          onClick={() => alert("Logout action here")}
          className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded flex items-center gap-2 justify-center"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
