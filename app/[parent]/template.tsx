"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const VARIANTS = {
  initial: { x: "-100%" },
  animate: { x: "0", transition: { duration: 0.5 } },
  exit: { x: "100%", transition: { duration: 0.5 } },
};

const Template = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");
  const parent = segments[0];

  return (
    <div className="overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={parent}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={VARIANTS}
          className="p-8 border-4 border-cyan-400 h-screen space-y-8">
          <div className="p-4 border-4 border-cyan-400 flex gap-x-4">
            <Link
              className="flex-1 p-2 rounded bg-cyan-950 flex items-start gap-2 flex-col"
              href={`/${parent}/child-page-one`}>
              <pre className="block p-1 border border-white/20 text-mono text-[8px] rounded">
                {parent}
              </pre>
              Child Page One
            </Link>
            <Link
              className="flex-1 p-2 rounded bg-cyan-950 flex items-start gap-2 flex-col"
              href={`/${parent}/child-page-two`}>
              <pre className="block p-1 border border-white/20 text-mono text-[8px] rounded">
                {parent}
              </pre>
              Child Page Two
            </Link>
            <Link
              className="flex-1 p-2 rounded bg-cyan-950 flex items-start gap-2 flex-col"
              href={`/${parent}/child-page-three`}>
              <pre className="block p-1 border border-white/20 text-mono text-[8px] rounded">
                {parent}
              </pre>
              Child Page Three
            </Link>
          </div>
          <div className="p-8 border-4 border-cyan-400">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Template;
