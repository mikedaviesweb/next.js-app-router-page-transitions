"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  exit: { opacity: 0, transition: { duration: 1 } },
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
        className="p-8 border-4 border-green-400">
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Template;
