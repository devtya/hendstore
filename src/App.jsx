import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/layout/AdminLayout";
import DashboardPage from "./admin/pages/DashboardPage";
import ProductPage from "./admin/pages/ProductPage";
import CategoryPage from "./admin/pages/CategoryPage";
import Home from "./pages/Home";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Apply/remove dark mode class to <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/admin"
          element={<AdminLayout toggleTheme={toggleTheme} isDark={isDark} />}
        >
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="categories" element={<CategoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
