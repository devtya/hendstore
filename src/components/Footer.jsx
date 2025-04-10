function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t dark:border-gray-700 mt-10">
        <div className="max-w-5xl mx-auto px-4 py-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">HendStore</h4>
            <p className="text-sm">Voucher game termurah & terpercaya.</p>
          </div>
  
          <div>
            <h4 className="text-sm font-semibold mb-2">Menu</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Beranda</a></li>
              <li><a href="#" className="hover:underline">Kategori</a></li>
              <li><a href="#" className="hover:underline">Produk Populer</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-sm font-semibold mb-2">Kontak</h4>
            <p className="text-sm">WhatsApp: 08xxxxxxxx</p>
            <p className="text-sm">Email: admin@hendstore.com</p>
          </div>
        </div>
        <div className="border-t dark:border-gray-700 text-center text-xs py-4">
          &copy; {new Date().getFullYear()} HendStore. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  