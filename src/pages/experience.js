import Contests from "../components/experience/Contests";
import Work from "../components/experience/Work";
import SEO from "../components/global/SEO";
import siteMetadata from "../data/siteMetadata";

export default function Experience() {
  return (
    <>
      <SEO title={`Experience | ${siteMetadata.title}`} />
      <div className="w-full h-full min-h-screen py-24 sm:pt-0 sm:pb-16 px-8 gap-y-16 flex flex-col items-center">
        <div className="w-full h-full md:max-w-[704px] lg:max-w-[928px] flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4 py-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Experience
            </h1>
          </div>
          <Work />
        </div>
        <div className="w-full h-full md:max-w-[704px] lg:max-w-[928px] flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4 py-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Contests
            </h1>
          </div>
          <Contests />
        </div>
      </div>
    </>
  );
}
