import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function SideNav() {
  const router = useRouter();
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ];
  return (
    <nav className="w-fit h-fit flex flex-col gap-4 md:sticky top-6 md:top-12 lg:top-24">
      <Link href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 sm:w-12 lg:w-14 fill-white hover:fill-gray-300 ease-linear transition-all hover:scale-95"
          version="1.2"
          viewBox="0 0 500 500"
        >
          <motion.path
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            d="M226.313 86.673l-10.764-1.794C204.623 71.723 192.69 62.564 179.753 57.4c-12.938-5.165-25.088-7.747-36.449-7.747-14.732 0-26.773 2.773-36.123 8.317-9.133 5.599-15.9 12.476-20.304 20.63-4.186 7.937-6.278 15.71-6.278 23.321 0 12.503 4.484 23.239 13.454 32.209 9.133 8.969 20.765 17.124 34.9 24.462 14.351 7.393 29.49 14.868 45.418 22.424 15.927 7.556 30.958 16.227 45.092 26.012 14.352 9.73 26.012 21.472 34.982 35.226 9.132 13.535 13.698 30.142 13.698 49.821 0 13.373-2.69 27.126-8.072 41.26-5.382 14.134-13.645 27.262-24.789 39.385-10.926 12.176-24.761 22.043-41.504 29.599-16.526 7.556-36.041 11.334-58.547 11.334-13.101 0-28.213-2.582-45.337-7.746-17.123-5.382-32.752-12.558-46.886-21.527-1.414-.815-2.528-4.105-3.343-9.867-.599-5.98-.897-13.046-.897-21.2 0-8.372.298-16.635.897-24.789.815-8.372 1.929-15.248 3.343-20.63l12.231 1.55c9.133 23.483 22.478 40.797 40.037 51.941 17.504 10.927 36.394 16.39 56.671 16.39 11.959 0 23.729-3.18 35.308-9.54 11.741-6.36 21.39-14.814 28.947-25.36 7.773-10.763 11.66-22.423 11.66-34.981 0-16.091-4.485-29.409-13.454-39.955-8.97-10.763-20.522-19.924-34.655-27.479-14.135-7.557-29.165-14.732-45.093-21.527-15.71-6.959-30.632-14.705-44.766-23.239-14.134-8.59-25.685-19.163-34.655-31.72-8.969-12.72-13.454-28.73-13.454-48.028 0-9.35 2.092-19.516 6.279-30.496 4.403-11.144 11.279-21.69 20.63-31.638 9.349-10.166 21.58-18.428 36.693-24.789 15.112-6.36 33.622-9.54 55.53-9.54 18.156 0 35.579 2.582 52.268 7.746 16.906 5.164 29.055 11.742 36.449 19.733 2.01 1.577 1.603 5.056-1.224 10.438-2.555 5.164-6.034 10.627-10.437 16.389-4.349 5.599-8.235 9.894-11.66 12.884z"
          />
          <motion.path
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            d="M444.843 388.865l16.39 4.158a20551.78 20551.78 0 00-2.038 44.522c-.599 16.906-1.115 31.23-1.55 42.972H191.576l-8.643-13.454L395.266 134.13H258.195c-6.36 0-13.535 4.675-21.526 14.025-7.775 9.186-13.836 24.109-18.184 44.766l-17.042-3.588 8.643-89.858c10.98 2.392 20.249 3.778 27.806 4.159 7.773.434 17.422.652 28.947.652h183.957l7.502 12.802-210.54 333.585H403.91c8.534 0 15.601-4.186 21.2-12.557 5.599-8.372 12.177-24.789 19.733-49.251z"
          />
        </svg>
      </Link>
      <div className="w-fit flex flex-row md:flex-col items-start gap-2">
        {navLinks.map((l, key) => (
          <motion.span
            onClick={() => router.push(l.href)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1 * key,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            key={key}
            aria-selected={
              l.href === router.pathname ||
              (router.pathname.includes("/blog/[post]") && l.href === "/blog")
            }
            className="w-fit cursor-pointer text-sm sm:text-base lg:text-lg font-serif text-[#6f6f6f] hover:text-white transition-all ease-linear px-3 py-2 aria-selected:bg-[#282626] rounded-lg aria-selected:text-white"
            href={l.href}
          >
            {l.title.toLowerCase()}
          </motion.span>
        ))}
      </div>
    </nav>
  );
}
