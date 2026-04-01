const tagStyles = {
  popular: "bg-orange-100 text-orange-600",
  new: "bg-green-100 text-green-600",
  bestseller: "bg-blue-100 text-blue-600",
};

const tagLabels = {
  popular: "Popular",
  new: "New",
  bestseller: "Best Seller",
};

const ProductCard = ({ product, onAddToCart, inCart }) => {
  const { name, description, price, period, tagType, features, icon } = product;

  return (
    <div className="card bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col">
      <div className="card-body p-6 flex flex-col gap-3 flex-1">
        {/* Icon + Tag row */}
        <div className="flex justify-between items-start">
          <span className="text-3xl">{icon}</span>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              tagStyles[tagType] || "bg-gray-100 text-gray-600"
            }`}
          >
            {tagLabels[tagType] || tagType}
          </span>
        </div>

        {/* Name & Description */}
        <div>
          <h3 className="font-bold text-gray-900 text-base">{name}</h3>
          <p className="text-gray-500 text-sm mt-1 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-end gap-1">
          <span className="text-2xl font-extrabold text-gray-900">
            ${price}
          </span>
          <span className="text-gray-400 text-xs mb-1">/{period}</span>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-1.5 flex-1">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span className="text-[#6C3AED] font-bold text-base leading-none">
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={() => onAddToCart(product)}
          className={`w-full py-2.5 rounded-full text-sm font-semibold mt-3 transition-all ${
            inCart
              ? "bg-green-500 text-white cursor-default"
              : "bg-[#6C3AED] hover:bg-[#5a2dcc] text-white"
          }`}
        >
          {inCart ? "Added to Cart ✓" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
