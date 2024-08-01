'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <Link href="/" className="text-white ml-3 text-lg">Globcamp</Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
          <Link href="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            type="button"
            className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block text-white px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/about" className="block text-white px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link href="/contact" className="block text-white px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;