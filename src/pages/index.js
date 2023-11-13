import SEO from "../components/global/SEO";
import Body from "../components/home/Body";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Gradient } from "../gradient";
import { getRandomGradient } from "../utils";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import CurrentlyPlaying from "../components/home/CurrentlyPlaying";
import Link from "next/link";
import Image from "next/image";
import pfp from "../../public/static/img/full.jpg";
import { getGithubRepos, scrollToTop } from "../utils";
import { getGithubStars, getGithubForks } from "../utils";
import closedSourceRepos from "../data/closedSourceRepos";
import { motion } from "framer-motion";
import siteMetadata from "../data/siteMetadata";
import scilynk from "../../public/static/img/scilynk.png";
import mit from "../../public/static/img/mit.png";

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

export default function Home({ numberPosts, githubFollowers, viewCount }) {
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
      <div className="w-full h-full min-h-screen flex flex-row gap-24 px-36">
        <section className="relative w-1/2 h-screen flex flex-col justify-center py-12">
          <div className="absolute px-8">
            <h1 className="text-6xl font-bold drop-shadow-lg">Stanley Zhao</h1>
            <h3 className="text-gray-200 font-medium text-4xl tracking-tighter drop-shadow-lg">
              SWE \ Entrepreneur \ @MIT
            </h3>
          </div>
          <canvas
            // ref={canvasRef}
            id="gradient-canvas"
            className={`w-full h-full rounded-2xl transition ease-linear`}
            data-transition-in
          />
        </section>
        <section className="relative w-1/2 flex flex-col py-12">
          <p className="text-neutral-200 text-sm sm:text-base">
            Hello! I&apos;m a computer science major from New York who will be
            attending{" "}
            <span
              title="Massachusetts Institute of Technology"
              className="bg-gradient-to-br from-red-500 to-[#A31F34] bg-clip-text text-transparent font-black inline"
            >
              MIT
            </span>{" "}
            in the fall. My interests in computer science include (but are not
            limited to) web development, artificial intelligence, and
            cybersecurity.
            <br />
            <br /> Outside of computer science, I enjoy performing music,
            dabbling in graphic design, and playing sports like volleyball,
            basketball, and badminton.
            <br />
            <br />
            You can{" "}
            <Link
              className="font-bold"
              href="/resume"
              title="Click to view resume"
            >
              view my resume here
            </Link>
            .
          </p>
          <br />
          <div className="w-full h-[0.125rem] bg-neutral-700" />
          <br />
          <p className="text-neutral-200 text-sm sm:text-base">
            Currently, I&apos;m the Chief Technology Officer @{" "}
            <Link
              href="https://scilynk.com/"
              target="_blank"
              rel="opener"
              title="SciLynk"
              className="bg-gradient-to-br from-[#55e0af] to-[#289178] bg-clip-text text-transparent font-bold inline"
            >
              SciLynk
            </Link>
            , where I lead full-stack development to deliver a beautiful and
            efficient experience for researchers to help accelerate their
            workflow. <br />
            <br />
            I&apos;m also a{" "}
            <Link
              title="Bug Hunter @ Discord"
              target="_blank"
              href="https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs#h_01F2HKTD57FVC60P8B8JW6FTKX"
            >
              Bug Hunter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3ba55c"
                  d="M16.582 2.638s7.672 5.236 4.757 12.589c-2.915 7.352-8.714 5.313-6.547 3.165 2.167-2.149-2.557-3.606-5.581-6.394l7.365-9.36"
                ></path>
                <path
                  fill="#b4e1cd"
                  d="M16.116 9.837c-1.618 2.059-3.9 3.088-5.665 2.717L4.294 20.4a1.279 1.279 0 01-1.796.218 1.279 1.279 0 01-.224-1.803l6.125-7.832c-.812-1.624-.365-4.111 1.278-6.19 2.04-2.582 5.115-3.548 6.899-2.154 1.784 1.394 1.566 4.616-.46 7.2z"
                ></path>
              </svg>{" "}
              @ <span className="text-[#5865F2] font-bold">Discord</span>
            </Link>
            , where I help identify, reproduce, and provide high quality bug
            reports to the engineering team.
            <br />
            <br />I enjoy developing for the web the most, as I find the ability
            to view your code&apos;s output in real-time extremely satisfying.
            <br />
            <br />
            My go-to tech stack includes{" "}
            <strong>Next.js, TailwindCSS, Node.js, and MongoDB</strong>.
            <br />
            <br />
            Feel free to connect/contact me through my socials below!
          </p>
        </section>
      </div>
      <div className="flex flex-row w-full gap-8">
        <div className="w-full flex flex-col">
          <div className="relative w-full h-full">
            <Image
              className="object-center object-cover"
              src="https://images.unsplash.com/photo-1682685797795-5640f369a70a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"
              draggable="false"
              fill
              sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="relative w-full h-full">
            <Image
              className="object-center object-cover"
              src="https://images.unsplash.com/photo-1684072108336-40bb8228888e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              draggable="false"
              fill
              sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
            />
          </div>
        </div>
      </div>
      {/* <SEO />
      <div className="w-full h-full min-h-screen py-24 sm:py-0 px-8 flex flex-col items-center">
        <div className="w-full h-full flex flex-col gap-y-4 items-center">
          <Hero />
          <RecentPosts recentPosts={recentPosts} />
          <FavoriteProjects>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Some of my favorite projects...
            </h2>
          </FavoriteProjects>
          <ContactMe />
        </div>
      </div> */}
    </>
  );
}

export const getStaticProps = async () => {
  const stars = await getGithubStars("zhao-stanley");
  const forks = await getGithubForks("zhao-stanley");
  const data = await getGithubRepos("zhao-stanley");

  let repos = data.filter((repo) => !repo.fork);
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);

  return {
    props: {
      stars,
      forks,
      repos,
    },
    revalidate: 30,
  };
};
