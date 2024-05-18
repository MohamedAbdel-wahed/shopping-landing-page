"use client";
import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MobileNav from "@/components/mobile-nav";

export default function Navbar() {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  

  return (
    <nav className="py-6 flex items-center justify-between">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="logo" width={130} height={130} />
      </Link>

      <ul className="hidden lg:flex items-center gap-8 lg:gap-14">
        {navItems.map((item, index) => (
          <li key={index} className="">
            <Link
              href="#"
              className="text-sm lg:text-lg font-medium tracking-wide text-black/80  hover:text-black/60 uppercase duration-150"
            >
              {item.title}
            </Link>
          </li>
        ))}

        <li>
          <button className="px-4 py-2 font-medium text-white bg-black hover:bg-black/80 uppercase rounded-lg duration-150">
            sign up
          </button>
        </li>
      </ul>

      {isMobileNavVisible && (
        <>
          <button
            className="w-full h-full fixed inset-0 bg-black/50 z-20"
            onClick={() => setMobileNavVisible(false)}
          ></button>
          <MobileNav isVisible={isMobileNavVisible} />
        </>
      )}

      <button
        onClick={() => setMobileNavVisible(true)}
        className="inline-flex lg:hidden p-2 border border-transparent hover:border-white rounded-lg duration-150"
      >
        <Image src="/assets/menu.svg" alt="menu-icon" width={30} height={30} />
      </button>
    </nav>
  );
}
