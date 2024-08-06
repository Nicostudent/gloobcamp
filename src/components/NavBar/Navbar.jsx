"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";
import BurgerButton from "./BurgerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const pages = [
    { to: "/", label: "Home" },
    {
      to: "/aboutus",
      label: "About",
    },
    {
      to: "/contact-us",
      label: "Contact us",
    },
  ];

  return (
    <nav className="fixed w-full bg-primary p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
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
          <BurgerButton isOpen={isOpen} toggleDropdown={toggleDropdown} />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col justify-center items-center">
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
