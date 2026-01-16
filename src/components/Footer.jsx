import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2f4356] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Biomake Pharmaceuticals
          </h3>
          <p className="text-sm leading-relaxed mb-6">
            Transforming healthcare by making high-quality, affordable medicines
            accessible to all. Founded in 2024.
          </p>

          <div className="flex gap-4 text-white">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-green-400 transition" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-green-400 transition" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-green-400 transition" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-green-400 transition" />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm flex flex-col gap-2 ">
            <li>
              <Link href="/" className="hover:text-green-400 ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400 ">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products/#services" className="hover:text-green-400">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm flex flex-col gap-2">
            <li className="hover:text-green-400 cursor-pointer">
              <Link href="/products/#services"> Medicine Trading</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Distribution Network
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Weekly Newsletter</h4>
          <p className="text-sm mb-4">
            Stay updated with our latest news and product launches.
          </p>

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-white text-gray-800 mb-3 focus:outline-none"
          />

          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-semibold transition">
            Subscribe
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © 2024 Biomake Pharmaceuticals. All rights reserved.
      </div>
    </footer>
  );
}
