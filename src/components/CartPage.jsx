import { decreaseQty, increaseQty, removeFromCart } from "@/store/slices/CartSlice";
import { useSelector, useDispatch } from "react-redux";


const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);


  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="px-6 md:px-12 py-10">
      <h1 className="text-3xl font-semibold text-[#5C0B15] mb-8">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT: ITEMS */}
          <div className="lg:col-span-2 space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-white shadow rounded-xl p-4"
              >
                {/* Image */}
                <img
                  src={item.images[0]}
                  className="w-24 h-24 object-cover rounded"
                  alt="no img"
                />

                {/* Info */}
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="text-[#5C0B15] font-bold">
                    ₹{item.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="px-2 border rounded"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="px-2 border rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
                <div className="font-semibold">
                  ₹{item.price * item.qty}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white shadow rounded-xl p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span className="font-bold text-[#5C0B15]">
                ₹{total}
              </span>
            </div>

            <button className="w-full mt-4 bg-[#5C0B15] text-white py-2 rounded-lg hover:bg-[#7a0f1f] transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;