import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import PopularProducts from "../components/PopularProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
      <Navbar />
      <main className="p-4 max-w-5xl mx-auto pt-16">
        <Banner />
        <CategoryList />
        <PopularProducts />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
