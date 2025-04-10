import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Auto close sidebar on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 relative">
      {/* Overlay saat sidebar terbuka di mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-white dark:bg-gray-800 shadow-lg z-40
          fixed top-0 left-0 h-screen w-64 transition-transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative
          flex flex-col justify-between
        `}
      >
        {/* Header + Nav */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-blue-600 mb-6 hidden md:block">
            Admin Panel
          </h2>
          <nav className="space-y-2">
            <Link
              to="/admin/dashboard"
              className={`block px-2 py-1 rounded ${
                isActive("/admin/dashboard")
                  ? "bg-gray-200 dark:bg-gray-700 font-semibold"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/admin/products"
              className={`block px-2 py-1 rounded ${
                isActive("/admin/products")
                  ? "bg-gray-200 dark:bg-gray-700 font-semibold"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Produk
            </Link>
            <Link
              to="/admin/categories"
              className={`block px-2 py-1 rounded ${
                isActive("/admin/categories")
                  ? "bg-gray-200 dark:bg-gray-700 font-semibold"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Kategori
            </Link>
          </nav>
        </div>

        {/* Logout (footer) */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => alert("Logout clicked")}
            className="text-red-600 dark:text-red-400 hover:underline"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 flex items-center gap-2 p-4 bg-white dark:bg-gray-800 shadow z-20">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-800 dark:text-white"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h2 className="text-xl font-bold text-blue-600">Admin Panel</h2>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 mt-16 md:mt-0 w-full z-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
