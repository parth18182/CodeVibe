import React, { useRef } from "react";
import { getNewArrivals } from "../../jwellery";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/CartSlice";

const NewProductCard = () => {
  const newProducts = getNewArrivals();
  const scrollRef = useRef(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const scroll = (dir) => {
    if (!scrollRef.current) return;


    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative ">

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
      >
        ◀
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
      >
        ▶
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5  h-100 items-center   overflow-x-auto scroll-smooth px-8"
      >
        {newProducts.map((item) => (
          <div
            key={item.id}
            className="min-w-57.5 cursor-pointer h-85 border-2 flex flex-col justify-center border-[#7A0F1F] rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-1  shrink-0"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={item.images[0]}
                alt={item.name}
                onClick={() => navigate(`/product/${item.id}`)}
                className="w-full h-52 object-cover transition duration-300 hover:scale-110"
              />
              {item.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-1 rounded-full">
                  NEW
                </span>
              )}

              {item.discount > 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
                  {item.discount}% OFF
                </span>
              )}
            </div>
            <div className="mt-3">
              <h3 className="text-sm font-semibold leading-tight">
                {item.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#5C0B15] font-bold text-sm">
                  ₹{item.price}
                </span>

                {item.originalPrice && (
                  <span className="text-gray-400 line-through text-xs">
                    ₹{item.originalPrice}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => dispatch(addToCart({id:item.id,qty:1}))}
              className="mt-3 w-full bg-[#5C0B15] text-white text-sm py-1.5 rounded-lg hover:bg-[#7a0f1f] transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProductCard;