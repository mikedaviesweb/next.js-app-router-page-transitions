"use client";

import { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  return <div className="p-8 border-4 border-cyan-400">{children}</div>;
};

export default Template;
