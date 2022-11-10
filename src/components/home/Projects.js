import projects from "../../data/projects";
import Link from "next/link";

export default function Projects() {
  const sortedProjects = projects.sort((a, b) => b.year - a.year);
  return (
    <>
      <section className="w-full h-full flex flex-col gap-y-8 py-4 md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Recent Projects
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedProjects.map((p, key) => (
            <li
              className="w-full h-full p-6 rounded-2xl flex flex-col gap-y-4 border-2 border-gray-700 border-opacity-100 dark:border-opacity-25 justify-between"
              style={{
                backgroundColor: `#${p.theme}d0`,
                boxShadow: `0 10px 15px -1px #${p.theme}a0`,
              }}
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
                    <Link href={p.link} target="_blank" rel="opener">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </Link>
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
              <Link
                className={`${
                  p.github ? "block" : "hidden"
                } px-6 py-3 w-fit tracking-tight text-sm md:text-base rounded-xl text-white dark:text-black bg-gray-900 dark:bg-gray-100 font-bold shadow-md dark:shadow-gray-400 shadow-gray-600`}
                href={`https://github.com/${p.github}`}
                target="_blank"
                rel="opener"
              >
                View on GitHub
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
