import Image from "next/image";
import { Gradient } from "../gradient";
import { getRandomGradient, parseDate } from "../utils";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import pfp from "../../public/static/img/full.jpg";
import { motion } from "framer-motion";

const aboutContainer = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "linear",
      staggerChildren: 0.2,
    },
  },
};

let projects = [
  {
    name: "SciLynk",
    href: "https://scilynk.com",
    img: "scilynk.png",
    date: "8/22",
  },
  {
    name: "ShopBlox",
    href: "https://shopblox.codes",
    img: "shopblox.png",
    date: "8/23",
  },
  {
    name: "WebLFG",
    href: "https://weblfg.com",
    img: "weblfg.png",
    date: "7/22",
  },
  {
    name: "Chroma AI",
    href: "https://chroma.szhao.dev",
    img: "chroma.png",
    date: "3/23",
  },
  {
    name: "Roslyn Code Club",
    href: "https://roslyncode.club",
    img: "roslyncodeclub.png",
    date: "7/22",
  },
  {
    name: "Roslyn Academy",
    href: "https://roslyn.academy",
    img: "roslynacademy.png",
    date: "3/23",
  },
  {
    name: "DiscussMed",
    href: "https://discussmed.szhao.dev",
    img: "discussmed.png",
    date: "6/22",
  },
];

export default function Home({ gallery }) {
  let gradient = new Gradient();
  const canvasRef = useRef(null);
  const [colors, setColors] = useState(getRandomGradient());

  useEffect(() => {
    if (typeof window !== "undefined") {
      gradient.initGradient("#gradient-canvas", colors);
    }
  }, [colors]);

  return (
    <>
      {/* <section className="relative w-screen h-screen blur">
        <canvas
          ref={canvasRef}
          id="gradient-canvas"
          className={`w-full h-full transition ease-linear`}
          data-transition-in
        />
      </section> */}
      <section className="flex h-full min-h-screen w-full flex-col items-center gap-4 px-2 py-24 text-center font-sans sm:px-4">
        <div className="flex flex-col items-center font-ein">
          <h1 className="-mb-1 bg-gradient-to-b from-white/75 to-transparent bg-cover bg-clip-text text-3xl leading-snug tracking-tighter text-transparent lg:-mb-3 lg:text-5xl lg:leading-normal">
            Software Engineer
          </h1>
          <h1 className="text-5xl tracking-tighter drop-shadow-lg lg:text-7xl">
            Stanley Zhao
          </h1>
        </div>
        <p className="animate-gshift text-base tracking-tight text-neutral-400 lg:text-lg">
          Passion for building utilitarian eye-candy on the web. Currently
          studying CS at MIT.
        </p>
        <h1 className="pt-16 font-ein text-2xl tracking-tighter text-neutral-300 drop-shadow-lg lg:text-4xl">
          Experience
        </h1>
        <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2">
          {projects.map((media, key) => (
            <Link
              target="_blank"
              className="relative"
              href={media.href}
              key={key}
            >
              <Image
                className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                src={`/static/projects/${media.img}`}
                width={100}
                height={100}
                sizes="100vw"
                key={key}
                loading="lazy"
              />
              <div className="absolute inset-0 z-[1] h-full w-full rounded-md bg-gradient-to-b from-transparent to-black/75" />
              <span className="absolute bottom-4 left-4 z-[2] font-ein text-sm tracking-tighter">
                {media.name}
              </span>
              <span className="absolute bottom-4 right-4 z-[2] font-ein text-sm tracking-tighter text-neutral-400">
                {parseDate(media.date)}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const fs = require("fs");
//   const shuffled = fisherYates(
//     fs.readdirSync(`${process.cwd()}/public/static/gallery`),
//   );

//   const gallery = splitArray(shuffled, 3);

//   return {
//     props: {
//       gallery,
//     },
//   };
// };
