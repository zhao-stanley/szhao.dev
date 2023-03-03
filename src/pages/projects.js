import Link from "next/link";
import SEO from "../components/global/SEO";
import Projects from "../components/home/Projects";
import siteMetadata from "../data/siteMetadata";
import { useRouter } from "next/router";
import properCase from "../utils";
import { getGithubStars } from "../utils";
import projects from "../data/projects";

export default function ProjectsPage({ stars }) {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <>
      <SEO title={`Projects | ${siteMetadata.title}`} />
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <main className="w-full flex flex-col gap-4">
          <h1 className="font-serif text-3xl lg:text-4xl">Projects</h1>
          <p className="text-neutral-200 text-sm sm:text-base">
            Along my journey as a developer, I&apos;ve utilized a variety of
            open source tools that have assisted me along my self-taught
            programming journey. Below are all my open source projects, which
            have accumulated a total of{" "}
            <span className="font-semibold inline-flex flex-row items-center">
              {stars}
              ⭐️
            </span>{" "}
            on GitHub.
          </p>
        </main>
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 justify-center">
          {projects.map((p, key) => (
            <Link
              key={key}
              className="w-full p-4 text-neutral-200 text-sm sm:text-base max-w-full truncate overflow-x-hidden overflow-ellipsis whitespace-nowrap border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-lg flex flex-col gap-2"
              href={p.link}
            >
              <div className="flex flex-col">
                <div className="flex flex-row w-full justify-between items-start">
                  <span className="text-white font-semibold">{p.name}</span>
                  <span className="flex flex-row gap-1 items-center text-xs sm:text-sm"></span>
                </div>
                <span className="text-xs sm:text-sm">{p.year}</span>
              </div>
              <span className="max-w-max truncate text-xs sm:text-sm">
                {p.desc}
              </span>
            </Link>
          ))}
        </section>
      </div>

      {/* <div className="w-full h-full min-h-screen py-24 sm:pt-0 sm:pb-16 px-8 gap-y-16 flex flex-col items-center">
        <div className="w-full h-full md:max-w-[704px] lg:max-w-[928px] flex flex-col gap-y-4 items-center">
          <div className="flex flex-col gap-y-4 py-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Projects {tag ? `built with ` : null}
              {tag ? (
                <>
                  <span className="text-blue-500 underline dark:decoration-gray-200 decoration-gray-800 underline-offset-[6px]">
                    {properCase(tag)}
                  </span>
                  .
                </>
              ) : null}
            </h1>
            <p className="text-gray-800 dark:text-gray-200 text-base md:text-xl font-medium tracking-tight">
              I love putting my skills to work by developing beautiful and
              meaningful projects. Below are all of my projects which you can
              also find on{" "}
              <Link
                href={`https://github.com/zhao-stanley`}
                target="_blank"
                rel="opener"
                className="text-blue-500 font-semibold hover:brightness-[80%] transition duration-300"
              >
                my GitHub
              </Link>
              .
            </p>
          </div>
          <Projects />
        </div>
      </div> */}
    </>
  );
}

export const getStaticProps = async () => {
  const stars = await getGithubStars("zhao-stanley");

  return {
    props: {
      stars,
    },
  };
};
