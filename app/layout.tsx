"use client";

import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const VARIANTS = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: "0", opacity: 1, transition: { duration: 0.5 } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-[300px,1fr] h-screen">
          <div className="bg-sky-950/50 p-4 space-y-4">
            <Link
              className="block p-2 rounded bg-cyan-950"
              href="/parent-page-one">
              Parent Page One
            </Link>
            <Link
              className="block p-2 rounded bg-cyan-950"
              href="/parent-page-two">
              Parent Page Two
            </Link>
            <Link
              className="block p-2 rounded bg-cyan-950"
              href="/parent-page-three">
              Parent Page Three
            </Link>
            <Link
              className="block p-2 rounded bg-cyan-950"
              href="/parent-page-four">
              Parent Page Four
            </Link>
          </div>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={VARIANTS}>
                <div>{children}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </body>
    </html>
  );
}
