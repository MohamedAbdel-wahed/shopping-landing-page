import Image from "next/image";
import React from "react";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="relative inline-block">
      <h2 className="text-3xl sm:text-4xl font-extrabold">{title}</h2>
      <Image
        src="/assets/vector-1.svg"
        alt="vector"
        width={130}
        height={130}
        className="absolute bottom-0 -right-2 -z-10"
      />
    </div>
  );
}
