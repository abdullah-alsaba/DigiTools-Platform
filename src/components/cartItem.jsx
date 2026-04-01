const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4">
      <div className="flex items-center gap-4">
        {/* Icon/Image */}
        <div className="w-12 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-2xl shadow-sm">
          {item.icon}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
          <p className="text-gray-500 text-sm mt-0.5">${item.price}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 text-sm font-semibold hover:text-red-700 transition bg-transparent border-none cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
