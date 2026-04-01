const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-400 py-16 px-6 md:px-10 border-t-4 border-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">DigiTools</h2>
            <p className="text-sm max-w-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a className="hover:text-white transition">Features</a>
              </li>
              <li>
                <a className="hover:text-white transition">Pricing</a>
              </li>
              <li>
                <a className="hover:text-white transition">Templates</a>
              </li>
              <li>
                <a className="hover:text-white transition">Integrations</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a className="hover:text-white transition">About</a>
              </li>
              <li>
                <a className="hover:text-white transition">Blog</a>
              </li>
              <li>
                <a className="hover:text-white transition">Careers</a>
              </li>
              <li>
                <a className="hover:text-white transition">Press</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a className="hover:text-white transition">Documentation</a>
              </li>
              <li>
                <a className="hover:text-white transition">Help Center</a>
              </li>
              <li>
                <a className="hover:text-white transition">Community</a>
              </li>
              <li>
                <a className="hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              Social Links
            </h4>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-sm">
                ▶
              </div>
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-sm">
                f
              </div>
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-sm">
                𝕏
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-500">
            <a className="hover:text-white transition">Privacy Policy</a>
            <a className="hover:text-white transition">Terms of Service</a>
            <a className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
