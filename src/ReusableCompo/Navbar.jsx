import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="mt-2">
      <div className="flex justify-between  border-2 border-b-[#C48A8A] border-t-[#C48A8A] p-2  items-center">
        <div className="flex items-center gap-x-2">
          <img
            src="https://traditionbyavisha.com/wp-content/uploads/2026/02/cropped-WhatsApp-Image-2026-02-26-at-10.33.26-PM-80x80.jpeg"
            alt=""
            className="size-8"
          />
          <p className="text-2xl font-semibold text-[#5C0B15]">
            Tradition By Avisha
          </p>
        </div>
        <div className="flex gap-x-4">
          <Link
            className="text-xl text-[#5c0B15] transform hover:scale-110 duration-150 ease-in-out hover:text-[#A61E2C] font-semibold"
            to={"/"}
          >
            Home
          </Link>
          <Link className="text-xl text-[#5c0B15] transform hover:scale-110 duration-150 ease-in-out hover:text-[#A61E2C] font-semibold">
            The Brand
          </Link>
          <div className="relative">
            <Link className="peer text-xl text-[#5c0B15] transform hover:scale-110 duration-150 ease-in-out hover:text-[#A61E2C] font-semibold">
              Collection
            </Link>

            <div
              className="absolute top-full mt-2 h-20 w-20 bg-purple-500 
                  opacity-0 peer-hover:opacity-100 
                  transition duration-300"
            ></div>
          </div>
          <Link className="text-xl text-[#5c0B15] transform hover:scale-110 duration-150 ease-in-out hover:text-[#A61E2C] font-semibold">
            Blogs
          </Link>
          <Link className="text-xl text-[#5c0B15] transform hover:scale-110 duration-150 ease-in-out hover:text-[#A61E2C] font-semibold">
            Login
          </Link>
          <Link className="text-xl text-[#5c0B15] transform hover:scale-110 duration-150 ease-in-out hover:text-[#A61E2C] font-semibold">
            WishSuit
          </Link>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-70.5 p-1.5 rounded-2xl border-2 border-[#5c0B15] focus:outline-none focus:ring-1 focus:ring-[#5c0B15]"
          />
          <div className="absolute w-fit h-fit top-0 right-0">
            <button className=" border-2 border-[#5c0B15] p-1.5 rounded-2xl bg-[#A61E2C] text-white hover:text-[#A61E2C] hover:bg-white transform duration-500 ease-in-out">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
