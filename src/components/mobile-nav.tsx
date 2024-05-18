import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navItems } from "@/constants";
import Link from "next/link";

interface MobileNavProps {
  isVisible: boolean;
}

export default function MobileNav({ isVisible }: MobileNavProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
      className={`${
        isVisible ? "block" : "hidden"
      } w-[70%] h-screen py-20 fixed top-0 right-0 bg-white z-30`}
    >
      <ul className="flex flex-col items-center gap-14">
        <li>
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" width={130} height={130} />
          </Link>
        </li>
        {navItems.map((item, index) => (
          <li key={index} className="">
            <Link
              href="#"
              className="text-lg font-medium tracking-wide text-black/80  hover:text-black/60 uppercase duration-150"
            >
              {item.title}
            </Link>
          </li>
        ))}

        <li>
          <button
            title="sign up"
            aria-label="sign-up"
            className="px-8 py-2.5 font-medium text-white bg-black hover:bg-black/80 uppercase rounded-lg duration-150"
          >
            sign up
          </button>
        </li>
      </ul>
    </motion.div>
  );
}
