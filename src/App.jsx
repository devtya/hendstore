import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";
import DashboardPage from "./admin/pages/DashBoardPage";
import ProductPage from "./admin/pages/ProductPage";
import ProductFormPage from "./admin/pages/ProductFormPage"; // <-- import ini
import Home from "./pages/Home";
import CategoryPage from "./admin/pages/CategoryPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama toko */}
        <Route path="/" element={<Home />} />

        {/* Halaman admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/new" element={<ProductFormPage />} />{" "}
          {/* Tambah produk */}
          <Route path="products/edit/:id" element={<ProductFormPage />} />{" "}
          {/* Edit produk */}
          <Route path="categories" element={<CategoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
