import { Menu } from "lucide-react";

const Topbar = ({ onMenuClick, isDark, toggleTheme }) => {
  return (
    <div className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 shadow relative">
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={onMenuClick}>
          <Menu className="text-black dark:text-white" />
        </button>
      </div>

      {/* Title */}
      <h1 className="font-bold text-lg absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto">
        Admin Panel
      </h1>

      {/* Right actions (desktop only) */}
      <div className="hidden md:flex items-center gap-4">
        <button onClick={toggleTheme}>
          {isDark ? "🌞" : "🌙"}
        </button>
        <button onClick={() => alert("Logout")} className="text-red-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
