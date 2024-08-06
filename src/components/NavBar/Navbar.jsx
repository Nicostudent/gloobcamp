"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const pages = [
      {  to:"/",
        label:"Home"
      },
      {
        to:"/aboutus",
        label:"About"
      },
      {
        to:"/contact-us",
        label:"Contact us"
      },    
    ];

  return (
    <nav className="fixed w-full bg-primary p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Logo/>
        <div className="hidden md:flex items-center">
          {pages.map((page) => (
            <Link
              key={page.to}
              href={page.to}
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {page.label}
            </Link>
          ))}        
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            type="button"
            className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
               {pages.map((page) => (
            <Link
              onClick={toggleDropdown}
              key={page.to}
              href={page.to}
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {page.label}
            </Link>
          ))}    
        </div>
      )}
    </nav>
  );
};

export default Navbar;
