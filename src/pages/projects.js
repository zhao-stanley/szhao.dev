import SEO from "../components/global/SEO";
import siteMetadata from "../data/siteMetadata";
import { useRouter } from "next/router";
import { getGithubRepos } from "../utils";
import { getGithubStars, getGithubForks } from "../utils";
import Repository from "../components/home/Repository";
import closedSourceRepos from "../data/closedSourceRepos";

export default function ProjectsPage({ stars, forks, repos }) {
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
            programming journey. To date, my open source projects have
            accumulated a total of{" "}
            <span
              className="font-semibold inline-flex flex-row items-center"
              title={`${stars} stars`}
            >
              {stars}
              ⭐️
            </span>
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
            on GitHub. Below are all my projects, both closed and open source.
          </p>
        </main>
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 justify-center">
          {closedSourceRepos.map((p, key) => (
            <Repository
              key={key}
              name={p.name}
              desc={p.desc}
              link={p.link}
              lang={p.lang}
              stars={0}
              forks={0}
            />
          ))}
          {repos.map((p, key) => (
            <Repository
              key={key}
              name={p.name}
              desc={p.description}
              link={p.html_url}
              lang={p.language}
              stars={p.stargazers_count}
              forks={p.forks_count}
            />
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
  const forks = await getGithubForks("zhao-stanley");
  const data = await getGithubRepos("zhao-stanley");
  let repos = data.filter((repo) => !repo.fork);
  repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return {
    props: {
      stars,
      forks,
      repos,
    },
    revalidate: 30,
  };
};
