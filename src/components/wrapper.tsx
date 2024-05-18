import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function Wrapper({
  children,
  className,
  noPadding = false,
}: WrapperProps) {
  return (
    <main
      className={`${
        noPadding ? "" : "px-7 sm:px-10 xl:px-20 2xl:px-56"
      } ${className}`}
    >
      {children}
    </main>
  );
}
