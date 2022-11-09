import { useState } from "react";
import nav from "../../data/nav";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileNav({ router }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navVar = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="fixed w-8 h-8 z-20 block sm:hidden text-gray-900 dark:text-gray-100 opacity-100"
        transition={{ type: "spring", duration: 0.8 }}
        animate={menuOpen == false ? "closed" : "open"}
        whileTap={{ scale: 0.8, opacity: 0.5 }}
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        <path
          className={menuOpen == true ? "hidden" : "block"}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
        <path
          className={menuOpen == true ? "block" : "hidden"}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </motion.svg>

      <motion.nav
        transition={{ type: "tween", duration: 0.8 }}
        animate={menuOpen == false ? "closed" : "open"}
        initial={false}
        variants={navVar}
        className="fixed z-10 w-full h-screen inset-0 bg-gray-100 dark:bg-gray-900 overflow-hidden px-8 pt-24 pb-48 flex flex-col justify-around items-center"
      >
        {nav.map((e, key) => (
          <Link
            href={e.href}
            key={key}
            onClick={() => setMenuOpen(false)}
            className={`${
              router.pathname == e.href
                ? "text-gray-900 dark:text-gray-100"
                : "text-gray-600 dark:text-gray-400"
            } text-4xl tracking-tight hover:text-gray-900 dark:hover:text-gray-100 font-bold uppercase transition ease-in-out`}
          >
            {e.title}
          </Link>
        ))}
      </motion.nav>
    </>
  );
}
