import { ShoppingCart } from "lucide-react";

const Navbar = ({ cartCount }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3 text-gray-800">
        
        <div className="text-xl font-extrabold">
          <span className="text-[#6C3AED] text-4xl">DigiTools</span>
        </div>

        
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600 font-medium">
          <a className="hover:text-[#6C3AED] transition font-bold">Products</a>
          <a className="hover:text-[#6C3AED] transition font-bold">Features</a>
          <a className="hover:text-[#6C3AED] transition font-bold">Pricing</a>
          <a className="hover:text-[#6C3AED] transition font-bold">
            Testimonials
          </a>
          <a className="hover:text-[#6C3AED] transition font-bold mr-6">FAQ</a>
        </div>

        
        <div className="flex items-center gap-5">
         
          <div className="relative text-gray-700 cursor-pointer mr-2">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#6C3AED] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>

        
          <button className="text-sm font-medium text-gray-700 hover:text-[#6C3AED] transition">
            Login
          </button>

          
          <button className="btn btn-sm rounded-full px-5 bg-[#6C3AED] border-none text-white hover:bg-[#5a2dcc] text-sm font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
