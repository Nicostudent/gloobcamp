"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";
import BurgerButton from "./BurgerButton";
import { useGloobcamp } from "@/context/GloobcampContext";
import { useLocalStorage } from "@/hooks/useLocalStorage"

const Navbar = () => {

  /* Ejemplo de uso */
  const { name, setName, surname, setSurname } = useGloobcamp();

  useEffect(() => {
    setName('Ligth')
    setSurname('Weigth')
  }, [])

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
    <nav className="z-50 fixed bg-primary p-3 w-full">
      <div className="flex justify-between items-center mx-auto container">
        <Logo />
        <div className="md:flex items-center hidden">
          {pages.map((page) => (
            <Link
              key={page.to}
              href={page.to}
              className="px-3 py-2 rounded-md font-medium text-sm text-white"
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
        <div className="flex flex-col justify-center items-center md:hidden">
          {pages.map((page) => (
            <Link
              onClick={toggleDropdown}
              key={page.to}
              href={page.to}
              className="px-3 py-2 rounded-md font-medium text-sm text-white"
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
