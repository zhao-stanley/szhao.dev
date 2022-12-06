import projects from "../../data/projects";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
    opacity: 1,
  },
};

export default function FavoriteProjects({ children }) {
  const sorted = projects.sort((a, b) => b.year - a.year);
  const sortedProjects = sorted.slice(0, 4);
  return (
    <>
      <section className="w-full h-full flex flex-col gap-y-6 pt-4 pb-16 md:max-w-2xl lg:max-w-4xl">
        {children}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedProjects.map((p, key) => (
            <motion.li
              className="w-full h-full p-6 rounded-2xl flex flex-col gap-y-8 border-2 border-gray-700 border-opacity-100 dark:border-opacity-25 justify-between"
              style={{
                backgroundColor: `#${p.theme}d0`,
                boxShadow: `0 10px 15px -1px #${p.theme}a0`,
              }}
              variants={variants}
              whileHover={{ translateY: -5 }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              key={key}
            >
              <div className="flex flex-col w-full h-full gap-y-2 justify-start">
                <div className="flex flex-col gap-y-1 w-full h-fit">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col">
                      <h2 className="text-xl md:text-2xl tracking-tight font-extrabold text-white">
                        {p.name}
                      </h2>
                      <h3 className="text-sm md:text-base tracking-tight font-semibold text-gray-50">
                        {p.year}
                      </h3>
                    </div>
                    <section className="flex flex-row gap-x-4 items-center">
                      <Link href={p.link} target="_blank" rel="opener">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-6 h-6 stroke-white hover:brightness-[80%] transition duration-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </Link>
                      {p.github ? (
                        <Link
                          href={`https://github.com/${p.github}`}
                          target="_blank"
                          rel="opener"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-auto fill-white hover:brightness-75 transition duration-300"
                            fill="currentColor"
                            viewBox="0 0 1024 1024"
                          >
                            <path d="M692.907 938.667A42.667 42.667 0 01650.24 896V785.067a91.733 91.733 0 00-23.04-70.827 42.667 42.667 0 0126.027-71.253c104.106-12.374 200.106-45.654 200.106-226.134a170.667 170.667 0 00-28.586-94.72 117.333 117.333 0 01-17.494-87.893 158.293 158.293 0 000-60.16 326.4 326.4 0 00-89.173 46.507 42.667 42.667 0 01-35.84 6.4 433.067 433.067 0 00-235.52 0 42.667 42.667 0 01-35.84-6.4 315.733 315.733 0 00-90.027-46.507 150.187 150.187 0 000 60.16 121.173 121.173 0 01-18.346 88.747 173.653 173.653 0 00-28.587 95.146c0 165.974 80.213 210.347 200.533 225.707A42.667 42.667 0 01509.44 672a42.667 42.667 0 01-8.96 42.667 87.893 87.893 0 00-23.467 66.56V896a42.667 42.667 0 01-85.333 0v-24.32a256 256 0 01-224.853-89.173 166.4 166.4 0 00-49.494-37.547 42.667 42.667 0 1121.334-82.773A210.347 210.347 0 01224 720.213c42.667 42.667 85.333 80.214 166.4 64.854a165.973 165.973 0 019.813-67.414C312.32 695.467 186.88 632.32 186.88 418.987a256 256 0 0142.667-142.08 36.267 36.267 0 005.546-26.454 242.773 242.773 0 0114.08-136.96 42.667 42.667 0 0126.88-24.32c14.507-4.266 66.56-12.8 165.12 51.2a518.827 518.827 0 01242.774 0c98.56-64 150.613-55.893 164.693-51.2a42.667 42.667 0 0126.88 24.32A243.627 243.627 0 01889.6 250.88a32 32 0 004.693 24.32 256 256 0 0142.667 142.507c0 216.32-124.587 279.04-213.333 298.666a182.613 182.613 0 019.386 71.254V896a42.667 42.667 0 01-40.106 42.667z"></path>
                          </svg>
                        </Link>
                      ) : null}
                    </section>
                  </div>
                  <hr
                    className="border-[1px]"
                    style={{ borderColor: `#${p.theme}cf` }}
                  />
                </div>
                <p className="text-sm md:text-base tracking-tight text-gray-100 font-medium">
                  {p.desc}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t, key) => (
                  <Link href={`/projects?tag=${t.toLowerCase()}`}>
                    <li
                      style={{ backgroundColor: `#${p.theme}cf` }}
                      className="px-3 py-2 rounded-lg text-xs font-bold text-white shadow-md hover:brightness-[90%] transition duration-300 tracking-tight"
                      key={key}
                    >
                      {t}
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
        <div className="w-full flex flex-col items-center pt-8">
          <Link
            href="/projects"
            className="w-[75%] cursor-pointer px-4 py-3 font-semibold rounded-3xl text-center border-2 dark:text-gray-200 dark:border-gray-200 text-gray-800 border-gray-800 transition duration-300 ease-linear hover:text-white hover:bg-gray-800 dark:hover:text-black dark:hover:bg-gray-200"
          >
            View all projects
          </Link>
        </div>
      </section>
    </>
  );
}
