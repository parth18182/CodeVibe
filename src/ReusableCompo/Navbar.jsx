import { CarTaxiFront, ShoppingCart } from "lucide-react";
import React from "react";
import { BsBasket } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">

      <div className="flex justify-between items-center px-6 py-3 border-b border-[#e7c3c3]">

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

        <div className="flex gap-x-8 items-center">

          <Link
            to={'/'}
            className="relative text-lg font-medium text-[#5c0B15] group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A61E2C] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to={'/brand'}
            className="relative text-lg font-medium text-[#5c0B15] group"
          >
            Brands
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A61E2C] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to={'/blogs'}
            className="relative text-lg font-medium text-[#5c0B15] group"
          >
            Blogs
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A61E2C] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to={'/wishlist'}
            className="relative text-lg font-medium text-[#5c0B15] group"
          >
            WishList
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A61E2C] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="relative group">

            <div className="cursor-pointer text-lg font-medium text-[#5c0B15] relative">
              Collection
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A61E2C] transition-all duration-300 group-hover:w-full"></span>
            </div>


            <div className="absolute left-0 top-full mt-0 w-64 z-50
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition duration-200"
            >
              <div className="bg-white shadow-xl rounded-lg p-3 flex flex-col gap-2">

                <Link className="px-3 py-2 rounded-md hover:bg-[#fbe4e6] text-[#A61E2C]">
                  New Arrival
                </Link>


                <div className="relative group/item">
                  <div className="px-3 flex items-center justify-between py-2 rounded-md hover:bg-[#fbe4e6] text-[#A61E2C]">
                    Kundan Jewellery <FaArrowRight className="" />
                  </div>

                  <div className="absolute left-full top-0 w-52 bg-white shadow-lg rounded-lg p-2
          opacity-0 invisible
          group-hover/item:opacity-100 group-hover/item:visible
          transition duration-200">

                    <Link to="/category/Necklace" className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Necklace
                    </Link>
                    <Link to="/category/Hair Accessories" className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Hair Accessories
                    </Link>
                    <Link to="/category/Bracelet" className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Bracelet
                    </Link>
                    <Link to="/category/Earrings" className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Earrings
                    </Link>
                  </div>
                </div>


                <div className="relative group/item">
                  <div className="px-3 flex items-center justify-between py-2 rounded-md hover:bg-[#fbe4e6] text-[#A61E2C]">
                    AD Jewellery <FaArrowRight />
                  </div>

                  <div className="absolute left-full top-0 w-52 bg-white shadow-lg rounded-lg p-2
          opacity-0 invisible
          group-hover/item:opacity-100 group-hover/item:visible
          transition duration-200">

                    <Link to="/category/Rings" className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Rings
                    </Link>
                    <Link to="/category/Bracelet" className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Bracelet
                    </Link>
                    <Link to="/category/Hair Accessories" className="block px-3 py-2 hover:bg-[#fbe4e6]">
                      Hair Accessories
                    </Link>
                  </div>
                </div>

                <Link className="px-3 py-2 rounded-md hover:bg-[#fbe4e6] text-[#A61E2C]">
                  Best Seller
                </Link>

              </div>
            </div>
          </div>
        </div>


        <div className="relative flex items-center gap-x-3  w-[400px]">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 rounded-full border border-[#5c0B15]/40 focus:ring-2 focus:ring-[#A61E2C] outline-none"
            />
            <button className="absolute right-38 top-1 bg-[#A61E2C] text-white px-4 py-1.5 rounded-full text-sm">
              Search
            </button>
          </div>
          <div>
            <Link to={'/cart'}><ShoppingCart className="cursor-pointer size-8" /></Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;