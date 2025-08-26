"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Add Products", path: "/addProducts" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-amber-400 sticky top-0 shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            NextShop
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`text-white font-medium transition hover:text-gray-100 ${
                  isActive(link.path) ? "underline underline-offset-4" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <Link
              href="/signin"
              className="px-4 py-2 bg-white text-amber-600 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-400 shadow-md">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`block text-white font-medium transition hover:text-gray-100 ${
                  isActive(link.path) ? "underline underline-offset-4" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/signin"
              className="block px-4 py-2 bg-white text-amber-600 rounded-lg hover:bg-gray-100 transition text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
