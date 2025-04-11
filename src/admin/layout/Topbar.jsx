import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Topbar = ({ toggleTheme, isDark }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Produk", path: "/admin/products" },
    { name: "Kategori", path: "/admin/categories" },
  ];

  return (
    <header className="w-full h-16 px-6 flex items-center justify-between bg-white dark:bg-gray-900 shadow border-b">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        HendStore Admin
      </h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-medium hover:underline ${
              location.pathname === item.path
                ? "text-primary"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {item.name}
          </Link>
        ))}

        <button onClick={toggleTheme}>{isDark ? "🌞" : "🌙"}</button>

        <button onClick={() => alert("Logout")} className="text-red-500">
          Logout
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <MenuIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="space-y-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded text-sm ${
                    location.pathname === item.path
                      ? "bg-muted text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={toggleTheme}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-muted"
              >
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>

              <button
                onClick={() => alert("Logout")}
                className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-muted"
              >
                Logout
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Topbar;
