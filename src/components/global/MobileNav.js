import { useState } from "react";
import nav from "../../data/nav";
import Link from "next/link";

export default function MobileNav({ router }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-9 z-20 transition active:scale-90 block sm:hidden text-gray-900 dark:text-gray-100"
        onClick={() => setMenuOpen(menuOpen == true ? false : true)}
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
      </svg>
      {menuOpen == true ? (
        <div className="absolute z-10 w-full h-screen inset-0 bg-gray-100 dark:bg-gray-900 overflow-hidden px-8 py-48 flex flex-col justify-around items-center">
          {nav.map((e, key) => (
            <Link
              href={e.href}
              key={key}
              onClick={() => setMenuOpen(false)}
              className={`${
                router.pathname == e.href
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-600 dark:text-gray-400"
              } text-4xl tracking-tight hover:text-gray-900 dark:hover:text-gray-100 font-bold transition ease-in-out`}
            >
              {e.title}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
