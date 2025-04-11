import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileSidebar = ({ toggleTheme, isDark }) => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Produk", path: "/admin/products" },
    { name: "Kategori", path: "/admin/categories" },
  ];

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2">
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
  );
};

export default MobileSidebar;
