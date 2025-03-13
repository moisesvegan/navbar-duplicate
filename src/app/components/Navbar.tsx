"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el MegaMenu si el usuario hace clic fuera del Navbar (en desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".navbar-container")) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-black fixed top-0 shadow-md z-50 navbar-container">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Botón de menú para móviles */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 18 14" fill="none">
            <path stroke="currentColor" d="M0 1h17.571M0 7h17.571M0 13h17.571" />
          </svg>
        </button>

        {/* Menú Desktop */}
        <div className="hidden lg:flex justify-center space-x-6 py-2">
          <MegaMenu title="SHOP" openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <MegaMenu title="SCIENCE" openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <MegaMenu title="IN THE LAB" openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>

        {/* Logo */}
        <div className="text-center">
          <Link href="#">
            <Image src="/assets/pasive.webp" alt="Pavise Logo" width={100} height={30} />
          </Link>
        </div>

        {/* Links de cuenta y carrito */}
        <div className="hidden lg:flex space-x-4">
          <Link className="text-white" href="#">Account</Link>
          <Link className="text-white" href="#">Cart</Link>
        </div>

        {/* Links de carrito en móvil */}
        <div className="lg:hidden p-2">
          <Link href="#" className="block text-center text-white">Cart</Link>
        </div>
      </nav>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="lg:hidden fixed w-[80%] top-[70px] left-0 bg-black shadow-md p-6 pb-15 flex flex-col justify-between h-[93%]">
          <div className="flex flex-col">
            {/* 🟢 SHOP siempre abierto en mobile */}
            <div className="flex flex-col justify-between items-center gap-8">
                <div className="flex flex-row justify-between gap-5 max-w-[300px] w-full">
                <p className="text-lg font-semibold">
                    SHOP
                </p>
                <Link href="#" className="btn-base w-fit text-blue-500 hover:underline">
                    SHOP ALL
                </Link>
                </div>
                <div className="flex gap-5">
                <div className="w-[180px]">
                    <Link href="#">
                    <img src="//pavise.com/cdn/shop/files/DAD-with-AwardSeals-updated.png?v=1738341533&width=600" alt="DYNAMIC AGE DEFENSE" className="w-full h-auto object-cover rounded-md" />
                    <p className="text-left mt-2 font-medium">DYNAMIC AGE DEFENSE</p>
                    </Link>
                </div>
                </div>
            </div>
          </div>

          {/* Links adicionales en móvil */}
          <div className="mt-4 flex flex-col space-y-2">
            <Link className="text-white text-center py-2" href="#">SCIENCE</Link>
            <Link className="text-white text-center py-2" href="#">IN THE LAB</Link>
            <Link href="#" className="block text-center text-white">Account</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
