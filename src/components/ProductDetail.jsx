import { useParams } from "react-router-dom";
import { getById } from "../../jwellery";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "@/store/slices/CartSlice";
import { toggleWishlist } from "@/store/slices/WishListSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getById(id);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [qty, setQty] = useState(1);

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  const cartItem = cart.find((item) => item.id === product.id);

  const isWishlisted = wishlist.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, qty }));
  };

  return (
    <div className="px-6 md:px-12 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <div className="overflow-hidden rounded-xl border">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-100 object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-16 h-16 object-cover rounded border cursor-pointer hover:scale-105"
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-semibold">
              {product.name}
            </h1>

            <button
              onClick={() => dispatch(toggleWishlist(product.id))}
              className="text-2xl hover:scale-110 transition"
            >
              {isWishlisted ? "❤️" : "🤍"}
            </button>
          </div>

          <div className="text-yellow-500">
            ⭐ {product.rating} ({product.reviews} reviews)
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-[#5C0B15]">
              ₹{product.price}
            </span>

            {product.originalPrice && (
              <span className="line-through text-gray-400">
                ₹{product.originalPrice}
              </span>
            )}

            {product.discount > 0 && (
              <span className="text-green-600 font-medium">
                {product.discount}% OFF
              </span>
            )}
          </div>

          <p className="text-gray-600 text-sm">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-gray-100 rounded-full hover:bg-[#5C0B15] hover:text-white transition"
              >
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            {product.stock > 0 ? "In Stock" : "Out of Stock"} : {product.stock}
          </p>

          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>

            <div className="flex items-center border rounded">

              <button
                onClick={() => {
                  if (cartItem) {
                    dispatch(decreaseQty(product.id));
                  } else {
                    setQty((prev) => Math.max(1, prev - 1));
                  }
                }}
                className="px-3 py-1 text-lg"
              >
                -
              </button>

              <span className="px-4">
                {cartItem ? cartItem.qty : qty}
              </span>

              <button
                onClick={() => {
                  if (cartItem) {
                    dispatch(increaseQty(product.id));
                  } else {
                    setQty((prev) =>
                      prev < product.stock ? prev + 1 : prev
                    );
                  }
                }}
                className="px-3 py-1 text-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#5C0B15] text-white px-6 py-2 rounded-lg hover:bg-[#7a0f1f]"
            >
              Add to Cart
            </button>

            <button className="border px-6 py-2 rounded-lg hover:bg-gray-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;