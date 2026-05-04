import { removeFromWishlist } from '@/store/slices/WishListSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FavouritePage = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="px-6 md:px-12 py-10">
      <h1 className="text-3xl font-semibold text-[#5C0B15] mb-8">
        Your Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              <div
                onClick={() => navigate(`/product/${item.id}`)}
                className="cursor-pointer overflow-hidden"
              >
                <img
                  src={item.images[0]}
                  className="w-full h-56 object-cover group-hover:scale-110 transition"
                />
              </div>

              <div className="p-3 space-y-2">
                <h3 className="text-sm font-semibold">
                  {item.name}
                </h3>

                <p className="text-[#5C0B15] font-bold">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavouritePage
