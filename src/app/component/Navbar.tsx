"use client"; // This is required for client-side JavaScript

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white shadow-xl fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500 hover:scale-105 transform transition-all duration-300 ease-in-out font-['Roboto']"
            >
              BRITSOLS
            </Link>
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-8 mx-auto">
            <Link
              href="#home"
              className="text-lg font-medium text-gray-300 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium text-gray-300 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-lg font-medium text-gray-300 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-lg font-medium text-gray-300 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-gray-300 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* "Let's Connect" Button */}
          <div className="hidden md:flex ml-auto">
            <Link
              href="#contact"
              className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-xl hover:bg-teal-600 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 font-bold text-lg"
            >
              Let&apos;s Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white space-y-4 p-6">
          <Link
            href="#home"
            className="block text-lg font-medium py-3 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block text-lg font-medium py-3 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>
          <Link
            href="#services"
            className="block text-lg font-medium py-3 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="block text-lg font-medium py-3 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block text-lg font-medium py-3 hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="block text-lg font-medium py-3 mt-4 text-center bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Let&apos;s Connect
          </Link>
        </div>
      )}
    </nav>
  );
}
