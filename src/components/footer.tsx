import { footerColumns } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 place-items-center">
      <div className="w-full md:w-1/3 max-w-sm flex flex-col gap-6">
        <h2 className="text-4xl font-extrabold uppercase">fashion</h2>
        <p className="text-white/60">
          Complete your style with awesome clothes from us.
        </p>
        <div className="self-center sm:self-start flex items-center gap-5">
          {["facebook", "instagram", "twiiter", "linkedin"].map(
            (item, index) => (
              <Link
                href="#"
                key={index}
                className="w-fit p-1.5 bg-[#EBD96B] hover:bg-[#EBD96B]/80 rounded-lg"
              >
                <div className="relative w-6 h-6">
                  <Image
                    fill
                    src={`/assets/${item}.svg`}
                    alt={`${item}-icon`}
                    className=" object-contain"
                  />
                </div>
              </Link>
            )
          )}
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-5">
        {footerColumns.map((column, index) => (
          <FooterColumn key={index} {...column} />
        ))}
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  headTitle: string;
  links: { title: string; path: string }[];
}

const FooterColumn = ({ headTitle, links }: FooterColumnProps) => {
  return (
    <div className="col-span-1 mx-auto flex flex-col gap-4">
      <h2 className="text-base sm:text-lg font-medium capitalize">
        {headTitle}
      </h2>
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className="text-sm sm:text-base text-white/60 capitalize"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
