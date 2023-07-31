"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const VARIANTS = {
  initial: { y: "-100%" },
  animate: { y: "0", transition: { duration: 0.5 } },
  exit: { y: "100%", transition: { duration: 0.5 } },
};

const Template = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");
  const child = segments[1];

  return (
    <AnimatePresence>
      <motion.div
        key={child}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={VARIANTS}
        className="p-8 border-4 border-cyan-400">
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Template;
