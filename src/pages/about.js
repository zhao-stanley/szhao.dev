import matter from "gray-matter";
import Hero from "../components/home/Hero";
import RecentPosts from "../components/home/RecentPosts";
import Projects from "../components/home/Projects";
import SEO from "../components/global/SEO";
import ContactMe from "../components/home/ContactMe";
import CurrentlyPlaying from "../components/home/CurrentlyPlaying";
import Link from "next/link";
import siteMetadata from "../data/siteMetadata";

export default function About({}) {
  return (
    <>
      <SEO title={"About"} />
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <main className="w-full flex flex-col gap-4">
          <h1 className="font-serif text-3xl lg:text-4xl">About Me</h1>
          <p className="text-neutral-200 text-sm sm:text-base">
            Hello! I&apos;m a computer science major from New York who will be
            attending{" "}
            <span className="bg-gradient-to-br from-red-500 to-[#A31F34] bg-clip-text text-transparent font-semibold inline">
              MIT
            </span>{" "}
            in the fall. My interests in computer science include (but not
            limited to) web development, cybersecurity, and competitive
            programming.
            <br />
            <br /> Outside of computer science, I enjoy performing music,
            dabbling in graphic design, and playing sports like volleyball and
            basketball.
            <br />
            <br />
            You can{" "}
            <Link className="font-bold" href="/resume">
              view my resume here
            </Link>
            .
          </p>
          <br />
          <div className="w-full h-[0.125rem] bg-neutral-700" />
          <br />
          <p className="text-neutral-200 text-sm sm:text-base">
            At{" "}
            <Link
              href="https://scilynk.com/"
              target="_blank"
              rel="opener"
              className="bg-gradient-to-tl from-[#55e0af] to-[#289178] bg-clip-text text-transparent font-semibold inline"
            >
              SciLynk
            </Link>
            , I focus on developing and maintaining the web app so that
            researchers have a smooth and efficient experience. <br />
            <br />I also work on implementing new technologies to ensure
            we&apos;re using the most cutting-edge tech stack.
            <br />
            <br />
            My personal tech stack of choice includes Next.js, TailwindCSS, and
            Node.js. It&apos;s pretty clear I enjoy developing for the web! I
            find the ability to view your code&apos;s output in realtime
            visually satisfying.
            <br />
            <br />
            Feel free to connect/contact me through my socials below!
          </p>
        </main>
        <section className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
          <Link
            className="w-full p-4 border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-md flex flex-row gap-2 items-center justify-between"
            href={siteMetadata.github}
            target="_blank"
          >
            <div className="flex flex-row items-center gap-3 fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-auto"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{" "}
              </svg>
              <span>GitHub</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="w-full p-4 border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-md flex flex-row gap-2 items-center justify-between"
            href={siteMetadata.linkedin}
            target="_blank"
          >
            <div className="flex flex-row items-center gap-3 fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-auto"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="w-full p-4 border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-md flex flex-row gap-2 items-center justify-between"
            href={siteMetadata.gmail}
            target="_blank"
          >
            <div className="flex flex-row items-center gap-3 fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>Gmail</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </section>
      </div>
    </>
  );
}
