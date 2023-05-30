import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { getRandomProverb } from "../../utils";
import siteMetadata from "../../data/siteMetadata";
const Clock = dynamic(() => import("./Clock"), {
  ssr: false,
});

const socials = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Mail",
    href: siteMetadata.email,
  },
  {
    name: "GitHub",
    href: siteMetadata.github,
  },
  {
    name: "LinkedIn",
    href: siteMetadata.linkedin,
  },
  {
    name: "Twitter",
    href: siteMetadata.twitter,
  },
];

const linksContainer = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0, 0.71, 0.2, 1.01],
      staggerChildren: 0.2,
    },
  },
};

const link = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Layout({ children }) {
  const router = useRouter();
  const [proverbCn, setProverbCN] = useState("");
  const [proverbEn, setProverbEn] = useState("");
  useEffect(() => {
    const proverb = getRandomProverb();
    setProverbCN(proverb.chinese);
    setProverbEn(proverb.english);
  }, [router]);
  return (
    <div className="relative w-full flex flex-col items-center">
      <main
        className={`w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-32 ${
          router.pathname === "/" ? "sticky top-0" : "relative"
        } px-6 py-8 bg-neutral-800 z-[2]`}
      >
        <motion.nav
          variants={linksContainer}
          initial="hidden"
          animate="show"
          className="w-full flex flex-row items-center justify-between tracking-tight"
        >
          {socials.map((social, key) => (
            <motion.button
              key={key}
              variants={link}
              className="text-xs xl:text-lg flex items-center text-neutral-400 hover:text-white ease-linear transition [&>svg]:hover:rotate-45 [&>svg]:hover:translate-x-1"
              onClick={() => router.push(social.href)}
            >
              {social.name}
              <svg
                className="w-4 xl:w-6 h-auto ease-linear transition duration-200"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          ))}
        </motion.nav>
        <Link href="/" scroll>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-2xl lg:text-lg xl:text-2xl text-white font-semibold"
          >
            Stanley Zhao
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-xl lg:text-base xl:text-2xl whitespace-nowrap text-neutral-400"
          >
            Software Engineer
          </motion.h2>
        </Link>
      </main>
      {children}
      <footer className="w-full px-6 pb-6 flex justify-center relative z-10 bg-neutral-800">
        <div className="w-full max-w-lg border-t pt-2 border-neutral-500 lg:max-w-3xl xl:max-w-6xl flex flex-row justify-between items-center">
          <span className="relative font-chinese text-base xl:text-lg text-neutral-300 sm:[&>span]:hover:block cursor-help">
            &quot;{proverbCn}&quot;
            <span className="font-mono px-2 py-1 bg-neutral-900/50 shadow-lg rounded-md tracking-tighter hidden absolute bottom-10 left-0 text-xs xl:text-sm whitespace-nowrap z-10">
              &quot;{proverbEn}&quot;
            </span>
          </span>
          <div className="flex flex-row items-center gap-2">
            <span className="text-sm xl:text-base text-neutral-300">
              {new Date().getFullYear()}
            </span>
            <Clock />
          </div>
        </div>
      </footer>
    </div>
  );
}
