import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">

      <div className="flex justify-between items-center px-6 py-3 border-b border-[#e7c3c3]">

        {/* LOGO */}
        <div className="flex items-center gap-x-3">
          <img
            src="https://traditionbyavisha.com/wp-content/uploads/2026/02/cropped-WhatsApp-Image-2026-02-26-at-10.33.26-PM-80x80.jpeg"
            className="w-10 h-10 rounded-full shadow-sm"
            alt="logo"
          />
          <p className="text-2xl font-bold text-[#5C0B15]">
            Tradition By Avisha
          </p>
        </div>

        {/* MENU */}
        <div className="flex gap-x-8 items-center">

          {["Home", "The Brand", "Blogs", "Login", "WishSuit"].map((item) => (
            <Link
              key={item}
              className="relative text-lg font-medium text-[#5c0B15] group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A61E2C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* COLLECTION WRAPPER (IMPORTANT FIX) */}
          <div className="relative group">

            {/* TRIGGER */}
            <div className="cursor-pointer text-lg font-medium text-[#5c0B15] relative">
              Collection
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A61E2C] transition-all duration-300 group-hover:w-full"></span>
            </div>

            {/* IMPORTANT: hover bridge (prevents flicker) */}
            <div className="absolute left-0 top-full w-64 pt-3">

              {/* MAIN DROPDOWN */}
              <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-lg p-3 flex flex-col gap-2
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition duration-300">

                <Link className="px-3 py-2 rounded-md hover:bg-[#fbe4e6] text-[#A61E2C] hover:text-black">
                  New Arrival
                </Link>

                {/* KUNDAN */}
                <div className="relative group/item">

                  <div className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#fbe4e6] text-[#A61E2C] cursor-pointer">
                    Kundan Jewellery <FaArrowRight />
                  </div>

                  {/* SUBMENU (FIXED POSITIONING) */}
                  <div className="absolute left-full top-0  w-52 bg-white shadow-lg rounded-lg p-2
                    opacity-0 invisible
                    group-hover/item:opacity-100 group-hover/item:visible
                    transition duration-200">

                    <Link className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Necklace
                    </Link>
                    <Link className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Hair Accessories
                    </Link>
                    <Link className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Bracelet
                    </Link>
                    <Link className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Earrings
                    </Link>

                  </div>
                </div>

                {/* AD */}
                <div className="relative group/item">

                  <div className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#fbe4e6] text-[#A61E2C] cursor-pointer">
                    AD Jewellery <FaArrowRight />
                  </div>

                  <div className="absolute left-full top-0 w-52 bg-white shadow-lg rounded-lg p-2
                    opacity-0 invisible
                    group-hover/item:opacity-100 group-hover/item:visible
                    transition duration-200">

                    <Link className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Rings
                    </Link>
                    <Link className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Bracelet
                    </Link>
                    <Link className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Hair Accessories
                    </Link>

                  </div>
                </div>

                <Link className="px-3 py-2 rounded-md hover:bg-[#fbe4e6] text-[#A61E2C] hover:text-black">
                  Best Seller
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 rounded-full border border-[#5c0B15]/40 focus:ring-2 focus:ring-[#A61E2C] outline-none"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#A61E2C] text-white px-4 py-1.5 rounded-full text-sm">
            Search
          </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar;