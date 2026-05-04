import { useNavigate, useParams } from "react-router-dom";
import { getByCategory } from "../../jwellery";
import { addToCart } from "@/store/slices/CartSlice";
import { toggleWishlist } from "@/store/slices/WishListSlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const products = getByCategory(categoryName);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <div className="px-10 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#5C0B15] mb-8">
        {categoryName} Collection
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => {
          const isWishlisted = wishlist.find((item) => item.id === p.id);

          return (
            <div
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)} 
              className="bg-white cursor-pointer rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    dispatch(toggleWishlist(p.id));
                  }}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:scale-110 transition"
                >
                  {isWishlisted ? "❤️" : "🤍"}
                </button>

                {p.discount > 0 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {p.discount}% OFF
                  </span>
                )}

                {p.isNew && (
                  <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}

                <div className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/20 transition duration-300" />
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold line-clamp-1">
                  {p.name}
                </h3>

                <div className="flex items-center text-yellow-500 text-xs">
                  ⭐ {p.rating} ({p.reviews})
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#5C0B15] font-bold text-lg">
                    ₹{p.price}
                  </span>

                  {p.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{p.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    dispatch(addToCart({ id: p.id, qty: 1 }));
                  }}
                  className="w-full mt-2 bg-[#5C0B15] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#7a0f1f] transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty */}
      {products.length === 0 && (
        <p className="text-gray-500 mt-10">No products found</p>
      )}
    </div>
  );
};

export default CategoryPage;