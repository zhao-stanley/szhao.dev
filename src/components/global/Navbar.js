import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import nav from "../../data/nav";
import { useRouter } from "next/router";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex items-center justify-center px-8">
        <div className="w-full h-24 flex flex-row items-center gap-x-12 max-w-7xl">
          {nav.map((e, key) => (
            <Link
              className={`${
                router.pathname == e.href
                  ? "text-black dark:text-white font-semibold"
                  : "text-gray-600 dark:text-gray-400 font-medium"
              } w-fit hidden sm:block rounded-xl px-4 py-3 select-none hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 ease-linear`}
              href={e.href}
              key={key}
            >
              {e.title}
            </Link>
          ))}
          <MobileNav router={router} />
        </div>
        <div className="w-fit h-fit">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}
