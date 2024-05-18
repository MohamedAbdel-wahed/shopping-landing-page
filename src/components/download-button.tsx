import Image from "next/image";
import Link from "next/link";
import React from "react";


interface DownloadButtonProps {
    type: "android" | "ios";
    path: string;
}

export default function DownloadButton({type, path}: DownloadButtonProps) {
  return (
    <Link href={path} className="">
      <Image
        src={`/assets/${type}.svg`}
        alt={`${type}-download-button`}
        width={150}
        height={150}
        className="hover:shadow-xl"
      />
    </Link>
  );
}
