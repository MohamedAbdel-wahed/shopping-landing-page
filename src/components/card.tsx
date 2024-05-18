import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  imgPath: string;
  explorePath: string;
  imgSize?: string;
}

export default function Card({
  title,
  imgPath,
  explorePath,
  imgSize = "w-full h-96",
}: CardProps) {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <div className={`relative ${imgSize} rounded-xl overflow-hidden`}>
        <Image
          fill
          loading="lazy"
          src={imgPath}
          alt="arrival"
          className="object-cover"
        />
      </div>
      <Link href={explorePath} className="self-start px-2 flex flex-col">
        <h2 className="text-lg sm:text-xl">{title}</h2>
        <p className="text-sm sm:text-base text-black/60 capitalize">expore now</p>
      </Link>
    </div>
  );
}
