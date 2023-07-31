"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");
  const parent = segments[0];

  return (
    <div className="overflow-hidden h-screen">
      <div className="p-8 border-4 border-cyan-400 h-full">{children}</div>
    </div>
  );
};

export default Template;
