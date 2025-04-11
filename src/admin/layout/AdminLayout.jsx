import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

const AdminLayout = ({ toggleTheme, isDark }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar toggleTheme={toggleTheme} isDark={isDark} />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
