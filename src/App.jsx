import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";
import DashboardPage from "./admin/pages/DashboardPage";
import ProductPage from "./admin/pages/ProductPage";
import CategoryPage from "./admin/pages/CategoryPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} /> {/* Default jika akses /admin */}
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="categories" element={<CategoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
