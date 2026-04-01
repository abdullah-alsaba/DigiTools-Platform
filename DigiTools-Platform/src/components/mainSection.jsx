import { useState } from "react";
import ProductCard from "./productCard";
import CartItem from "./cartItem";
import products from "../data/products.json";
import { toast } from "react-toastify";

const MainSection = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (alreadyInCart) {
      toast.info(`${product.name} is already in your cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart! 🛒`);
  };

  const handleRemove = (id) => {
    const item = cart.find((i) => i.id === id);
    setCart(cart.filter((item) => item.id !== id));
    toast.error(`${item?.name} removed from cart.`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warn("Your cart is already empty!");
      return;
    }
    setCart([]);
    toast.success("Checkout successful! Your cart has been cleared. 🎉");
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="py-14 px-6 md:px-10 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("products")}
            className={`btn rounded-full px-8 text-sm font-semibold border-none transition-all ${
              activeTab === "products"
                ? "bg-[#6C3AED] text-white shadow-md"
                : "bg-transparent text-gray-500 hover:text-[#6C3AED]"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`btn rounded-full px-8 text-sm font-semibold border-none transition-all ${
              activeTab === "cart"
                ? "bg-[#6C3AED] text-white shadow-md"
                : "bg-transparent text-gray-500 hover:text-[#6C3AED]"
            }`}
          >
            Cart {cart.length > 0 && `(${cart.length})`}
          </button>
        </div>

        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                inCart={!!cart.find((item) => item.id === product.id)}
              />
            ))}
          </div>
        )}

        {activeTab === "cart" && (
          <div className="max-w-3xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center gap-4">
                <span className="text-7xl">🛒</span>
                <p className="text-gray-400 text-lg font-medium">
                  Your cart is empty
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-extrabold text-gray-900 mb-6">
                  Your Cart
                </h3>

                <div className="flex flex-col gap-3">
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-gray-500 text-sm font-medium">
                      Total:
                    </span>
                    <span className="font-extrabold text-gray-900 text-2xl">
                      ${total}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-full bg-linear-to-r from-[#6C3AED] to-[#9B59F5] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
