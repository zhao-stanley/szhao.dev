import Link from "next/link";
import nav from "../../data/nav";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex items-center justify-center px-8 fixed z-10 sm:relative bg-gray-100 dark:bg-gray-900 sm:bg-transparent dark:sm:bg-transparent sm:shadow-none">
        <div className="w-full h-24 flex flex-row items-center gap-x-12 md:max-w-2xl lg:max-w-4xl">
          {nav.map((e, key) => (
            <Link
              className={`${
                router.pathname == e.href ||
                (router.pathname.includes("blog") && e.href == "/blog")
                  ? "text-black dark:text-white font-semibold"
                  : "text-gray-600 dark:text-gray-400 font-medium"
              } w-fit hidden sm:block rounded-2xl px-4 py-3 select-none hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 ease-linear`}
              href={e.href}
              key={key}
            >
              {e.title}
            </Link>
          ))}
          <MobileNav router={router} />
        </div>
      </div>
    </>
  );
}
