"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products & Services", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* TOP HEADER */}
      <div className="hidden md:block bg-[#0d3b66] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-green-400" />
              <span className="hidden sm:block">
                Open Hours: Mon - Sat 9.00 - 18.00
              </span>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-green-400" />
              <span className="hidden sm:block">+91 9979444111</span>
            </div>

            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-4 w-4 text-green-400" />
              <span className="hidden md:block">
                biomakepharma2024@gmail.com
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl static mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Image
            src="/blogo.webp"
            alt="Biomake Pharmaceuticals"
            width={140}
            height={50}
            className="object-contain"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`pb-1 transition ${
                    isActive(link.href)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? (
              <XMarkIcon className="h-6 w-6 text-black" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow">
            <ul className="flex flex-col gap-4 p-4 font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block pb-1 ${
                      isActive(link.href)
                        ? "text-blue-600 border-b-2 inline border-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
