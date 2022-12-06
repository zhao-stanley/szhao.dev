import Contests from "../../components/experience/Contests";
import Work from "../../components/experience/Work";
import SEO from "../../components/global/SEO";
import Projects from "../../components/home/Projects";
import siteMetadata from "../../data/siteMetadata";
import { useRouter } from "next/router";
import properCase from "../../utils";

export default function ProjectsPage() {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <>
      <SEO title={`Projects | ${siteMetadata.title}`} />
      <div className="w-full h-full min-h-screen py-24 sm:pt-0 sm:pb-16 px-8 gap-y-16 flex flex-col items-center">
        <div className="w-full h-full md:max-w-[704px] lg:max-w-[928px] flex flex-col gap-y-4 items-center">
          <div className="flex flex-col gap-y-4 py-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Projects {tag ? `built with ` : null}
              {tag ? <span className="text-[#3b82f6]">{properCase(tag)}</span> : null}
            </h1>
            <p className="text-gray-800 dark:text-gray-200 text-base md:text-xl font-medium tracking-tight">
              I love putting my skills to work by developing meaningful and
              beautiful projects. Below are some of my most recent projects,
              which you can also find on GitHub.
            </p>
          </div>
          <Projects />
        </div>
      </div>
    </>
  );
}
