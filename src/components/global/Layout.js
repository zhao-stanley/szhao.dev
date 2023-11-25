import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { getRandomProverb } from "../../utils";
import siteMetadata from "../../data/siteMetadata";
import Lenis from "@studio-freight/lenis";
import {
  IconHome,
  IconPhotoHeart,
  IconNotebook,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import CurrentlyPlaying from "../home/CurrentlyPlaying";
const Clock = dynamic(() => import("./Clock"), {
  ssr: false,
});
const navLinks = [
  {
    name: "Home",
    icon: <IconHome className="h-4 w-4 sm:h-6 sm:w-6" stroke={1.5} />,
    href: "/",
    external: false,
  },
  {
    name: "Gallery",
    icon: <IconPhotoHeart className="h-4 w-4 sm:h-6 sm:w-6" stroke={1.5} />,
    href: "/gallery",
    external: false,
  },
  {
    name: "Blog",
    icon: <IconNotebook className="h-4 w-4 sm:h-6 sm:w-6" stroke={1.5} />,
    href: "/blog",
    external: false,
  },
  {
    name: "Twitter",
    icon: <IconBrandX className="h-4 w-4 sm:h-6 sm:w-6" stroke={1.5} />,
    href: siteMetadata.twitter,
    external: true,
  },
  {
    name: "GitHub",
    icon: <IconBrandGithub className="h-4 w-4 sm:h-6 sm:w-6" stroke={1.5} />,
    href: siteMetadata.github,
    external: true,
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin className="h-4 w-4 sm:h-6 sm:w-6" stroke={1.5} />,
    href: siteMetadata.linkedin,
    external: true,
  },
  {
    name: "Mail",
    icon: <IconMail className="h-4 w-4 sm:h-6 sm:w-6" stroke={1.5} />,
    href: siteMetadata.email,
    external: true,
  },
];

const variants = {
  home: { x: 0 },
  gallery: { x: "100%" },
  blog: { x: "200%" },
};

const getVariant = () => {
  const router = useRouter();
  if (router.pathname === "/") return "home";
  if (router.pathname.includes("/gallery")) return "gallery";
  if (router.pathname.includes("/blog")) return "blog";
  return "home";
};

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
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let prevScrollpos = window.scrollY;
      window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos || currentScrollPos < 50) {
          document.getElementsByTagName("nav")[0].style.top = "8px";
        } else {
          document.getElementsByTagName("nav")[0].style.top = "-48px";
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }, []);
  const router = useRouter();
  const [proverbCn, setProverbCN] = useState("");
  const [proverbEn, setProverbEn] = useState("");
  useEffect(() => {
    const proverb = getRandomProverb();
    setProverbCN(proverb.chinese);
    setProverbEn(proverb.english);
  }, [router]);
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <motion.nav
        className={
          "fixed top-2 z-10 grid h-8 w-fit grid-cols-7 items-center rounded-full ring-1 ring-neutral-600 drop-shadow backdrop-blur-lg backdrop-brightness-50 transition-[top] duration-500 sm:h-10 lg:top-4"
        }
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: [0, 0.51, 0.3, 1.01],
        }}
      >
        {navLinks.map((link, key) => (
          <Link
            className={`${
              getVariant() === navLinks[key].name.toLowerCase()
                ? "text-white"
                : "text-neutral-400"
            } z-[1] w-full rounded-full px-4 py-2 text-center text-sm font-medium antialiased transition ease-linear hover:text-white focus:text-white focus:outline-none focus:ring-white focus-visible:ring`}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            title={link.name}
            key={key}
            scroll
          >
            {link.icon}
          </Link>
        ))}
        <motion.div
          animate={getVariant()}
          variants={variants}
          className="absolute inset-0 z-0 w-[calc(100%/7)] rounded-full bg-neutral-600/75 shadow-[inset_0_0_12px_#0a0a0aa5]"
        />
      </motion.nav>
      <main className="flex h-full w-full flex-col">{children}</main>
      <footer className="relative z-10 flex w-full flex-col justify-center gap-2 px-4 py-8 lg:px-8">
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="font-ein text-2xl tracking-tighter">szhao.dev</h1>
          <Clock />
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <span className="font-chinese relative cursor-help text-base text-neutral-300 xl:text-lg sm:[&>span]:hover:block">
            &quot;{proverbCn}&quot;
            <span className="absolute bottom-10 left-0 z-10 hidden whitespace-nowrap rounded-md bg-neutral-900/50 px-2 py-1 font-mono text-xs tracking-tighter shadow-lg backdrop-blur backdrop-brightness-50 xl:text-sm">
              &quot;{proverbEn}&quot;
            </span>
          </span>
          <CurrentlyPlaying />
        </div>
      </footer>
    </div>
  );
}
