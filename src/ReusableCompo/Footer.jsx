import React from "react"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-[#5C0B15] text-white mt-10">

      <div className="px-40 py-10 flex justify-between">

        <div className="flex flex-col gap-3">

          <div className="flex items-center gap-3">
            <img
              src="https://traditionbyavisha.com/wp-content/uploads/2026/02/cropped-WhatsApp-Image-2026-02-26-at-10.33.26-PM-80x80.jpeg"
              alt="logo"
              className="w-12 h-12 rounded-full bg-white p-1"
            />
            <h1 className="text-xl font-bold tracking-wide">
              Tradition By Avisha
            </h1>
          </div>

          <p className="text-sm text-white/80">
            Elegant traditional and modern jewelry crafted with love.
          </p>

        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

          <div className="flex flex-col gap-2 text-white/80">

            <Link className="hover:text-white transition">Contact Us</Link>
            <Link className="hover:text-white transition">Refund Policy</Link>
            <Link className="hover:text-white transition">Privacy Policy</Link>
            <Link className="hover:text-white transition">Terms And Conditions</Link>
            <Link className="hover:text-white transition">Shipping & Delivery Policy</Link>
            <Link className="hover:text-white transition">
              Refund, Return & Exchange Policy
            </Link>

          </div>
        </div>

        <div>

          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>

          <div className="flex flex-col gap-3 text-white/80 text-sm">

            <div className="flex items-center gap-2">
              <FaPhone />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>support@traditionbyavinashi.com</span>
            </div>

          </div>

          <h2 className="text-lg font-semibold mt-6 mb-3">Follow Us</h2>

          <div className="flex gap-4 text-xl">

            <a href="#" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-green-400 transition">
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © 2026 Tradition By Avisha. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer