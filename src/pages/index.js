import SEO from "../components/global/SEO";
import CurrentlyPlaying from "../components/home/CurrentlyPlaying";
import Link from "next/link";
import Image from "next/image";
import pfp from "../../public/static/img/full.jpg";
import { getGithubRepos, scrollToTop } from "../utils";
import { getGithubStars, getGithubForks } from "../utils";
import closedSourceRepos from "../data/closedSourceRepos";
import { motion } from "framer-motion";
import siteMetadata from "../data/siteMetadata";

const aboutContainer = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "linear",
      staggerChildren: 0.3,
    },
  },
};

const aboutChild = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Home({ stars, forks, repos }) {
  return (
    <>
      <SEO title={`Stanley Zhao | ${siteMetadata.title}`} />
      <section className="w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col justify-center lg:flex-row gap-8 px-6 pb-8 z-[1]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative w-full h-[18vh] lg:w-[250px] lg:h-[250px] xl:w-[450px] xl:h-[450px] flex-shrink-0 shadow-lg shadow-neutral-700 overflow-hidden rounded-lg select-none ease-linear transition [&>.shine]:hover:block"
        >
          <Image
            className="object-cover object-center"
            placeholder="blur"
            fill
            draggable="false"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              25vw"
            alt="Stanley Zhao"
            title="Stanley Zhao"
            src={pfp}
          />
          <div className="shine" />
        </motion.div>
        <motion.div
          variants={aboutContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          <motion.h3
            variants={aboutChild}
            className="text-xl xl:text-4xl font-medium"
          >
            I&apos;m a student and software engineer from New York building eye
            candy for the web.
          </motion.h3>
          <motion.p
            variants={aboutChild}
            className="text-base xl:text-xl text-neutral-400"
          >
            Currently CTO @{" "}
            <Link
              href="https://scilynk.com/"
              target="_blank"
              rel="opener"
              className="bg-gradient-to-br from-[#55e0af] to-[#289178] bg-clip-text text-transparent font-semibold inline"
            >
              SciLynk
            </Link>
            , the best way to accelerate your research workflow.
          </motion.p>
          <motion.p
            variants={aboutChild}
            className="text-sm xl:text-lg text-neutral-300"
          >
            I&apos;m a computer science major from New York attending{" "}
            <span
              title="Massachusetts Institute of Technology"
              className="bg-gradient-to-br from-red-500 to-[#A31F34] bg-clip-text text-transparent font-semibold inline"
            >
              MIT
            </span>{" "}
            in the fall. My interests in the field include web development,
            artificial intelligence, and cybersecurity. To date, my open source
            projects have accumulated a total of{" "}
            <span
              className="font-semibold inline-flex flex-row items-center"
              title={`${stars} stars`}
            >
              {stars}
              ⭐️
            </span>{" "}
            and{" "}
            <span
              className="font-semibold inline-flex flex-row items-center"
              title={`${forks} forks`}
            >
              {forks}
              <svg className="mr-1 w-4 h-auto fill-white" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
            </span>
            on GitHub.
          </motion.p>
        </motion.div>
      </section>
      <section
        id="projects"
        className="w-full h-full flex flex-col items-center gap-1"
      >
        {closedSourceRepos.map((repo, key) => (
          <Link
            key={key}
            href={repo.href}
            target="_blank"
            className="sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl"
            style={{ boxShadow: "0 0 5px 1px #a3a3a33d" }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-xl xl:text-2xl 2xl:text-3xl text-black">
                {repo.name}
              </h3>
              <p className="text-base xl:text-lg 2xl:text-xl text-neutral-700">
                {repo.description}
              </p>
            </div>
            <div className="relative w-full h-[30vh] lg:h-[50vh] max-h-[400px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500">
              <Image
                className="object-cover object-center"
                fill
                draggable="false"
                sizes="100vw"
                alt={repo.name}
                title={repo.name}
                src={`/static/img/projects/${repo.img.toLowerCase()}`}
              />
              <div className="w-full h-full shine" />
            </div>
          </Link>
        ))}
        {repos.map((repo, key) => (
          <Link
            key={key}
            href={repo.html_url}
            target="_blank"
            className="sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl"
            style={{ boxShadow: "0 0 5px 1px #a3a3a33d" }}
          >
            <div className="w-full flex flex-col gap-4">
              <h3 className="font-medium text-xl xl:text-2xl 2xl:text-3xl text-black">
                {repo.name}
              </h3>
              <p className="text-base xl:text-lg 2xl:text-xl text-neutral-700">
                {repo.description}
              </p>
            </div>
            <div className="relative w-full h-[30vh] lg:h-[50vh] max-h-[400px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500">
              <Image
                className="object-cover object-center"
                fill
                draggable="false"
                sizes="100vw"
                alt={repo.name}
                title={repo.name}
                src={`/static/img/projects/${repo.name.toLowerCase()}.png`}
              />
              <div className="w-full h-full shine" />
            </div>
          </Link>
        ))}
        <section className="w-full h-screen flex flex-col items-center justify-between sticky top-0 z-[2] px-6 lg:px-0 py-24 bg-neutral-800 overflow-hidden">
          <div className="w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col gap-16 2xl:gap-32 lg:px-6">
            <div>
              <h3 className="text-2xl xl:text-3xl font-semibold text-white">
                {"That's all for now :)"}
              </h3>
              <span
                href="/"
                onClick={() => scrollToTop()}
                className="flex w-fit items-center gap-2 text-2xl xl:text-3xl text-neutral-400 hover:text-white transition ease-linear cursor-pointer"
              >
                Return Home
                <svg
                  className="w-6 xl:w-8 h-auto"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <CurrentlyPlaying />
          </div>
        </section>
      </section>
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
