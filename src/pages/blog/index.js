import matter from "gray-matter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SEO from "../../components/global/SEO";
import siteMetadata from "../../data/siteMetadata";

export default function Blog({ data }) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { genre } = router.query;
  const frontMatter = data.map((post) => matter(post));
  const allPosts = frontMatter.map((listItem) => listItem.data);
  allPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  useEffect(() => {
    if (genre !== undefined) {
      setSearchValue(genre);
    }
  }, [router.query]);

  const filteredPosts =
    searchValue.length > 0
      ? allPosts.filter(
          (e) =>
            e.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            e.desc.toLowerCase().includes(searchValue.toLowerCase()) ||
            e.genre.join(" ").includes(searchValue.toLowerCase())
        )
      : allPosts;

  return (
    <>
      <SEO title={`Blog | ${siteMetadata.title}`} />
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <main className="w-full flex flex-col gap-4">
          <h1 className="font-serif text-3xl lg:text-4xl">
            Blog{searchValue ? ` Posts About ` : null}
            {searchValue ? (
              <>
                <span className="text-blue-500 underline decoration-white underline-offset-[6px]">
                  {searchValue.substring(0, 10)}
                </span>
                {searchValue.length > 10 ? "..." : "."}
              </>
            ) : null}
          </h1>
          <p className="text-neutral-200 text-sm sm:text-base">
            I like to write about whatever is on my mind, whether that be a new
            framework I&apos;m trying or my process for learning something. As
            of now, I&apos;ve written a total of{" "}
            <span className="font-bold">{allPosts.length} blog posts.</span> Use
            the search bar below to filter the posts.
          </p>
          <div className="relative w-full flex flex-row items-center">
            <input
              aria-label="Search by post name, tag, or description"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search by post name, tag, or description"
              className="block w-full rounded-md border bg-transparent text-xs sm:text-sm pl-4 pr-8 py-2 focus:ring-primary-500 border-neutral-800 text-white"
            />
            <svg
              className="absolute right-2 top-3 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </main>
        <section className="w-full flex flex-col gap-2 sm:gap-4 justify-center">
          {filteredPosts.map((p, key) => (
            <Link
              key={key}
              className="w-full p-4 text-neutral-200 text-sm sm:text-base max-w-full truncate overflow-x-hidden overflow-ellipsis whitespace-nowrap border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-lg flex flex-col gap-2"
              href={`/blog/${p.slug}`}
            >
              <div className="flex flex-col">
                <div className="flex flex-row w-full justify-between items-start">
                  <span className="text-white font-semibold">{p.title}</span>
                  <span className="flex flex-row gap-1 items-center text-xs sm:text-sm">
                    {p.genre.map((g, gkey) => (
                      <span key={gkey}>{`#${g}`}</span>
                    ))}
                  </span>
                </div>
                <span className="text-xs sm:text-sm">
                  {new Date(p.date).toLocaleString("en-US", {
                    timeZone: "UTC",
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
              </div>
              <span className="max-w-max truncate text-xs sm:text-sm">
                {p.desc}
              </span>
            </Link>
          ))}
          {filteredPosts.length == 0 ? (
            <span className="italic">{`No posts matched your query :(`}</span>
          ) : null}
        </section>
      </div>
      {/* <div className="w-full h-full min-h-screen py-24 sm:py-0 px-8 flex flex-col items-center">
        <div className="w-full h-full md:max-w-[704px] lg:max-w-[928px] flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4 py-8">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Posts{searchValue ? ` about ` : null}
                {searchValue ? (
                  <>
                    <span className="text-blue-500 underline dark:decoration-gray-200 decoration-gray-800 underline-offset-[6px]">
                      {searchValue.substring(0, 10)}
                    </span>
                    {searchValue.length > 10 ? "..." : "."}
                  </>
                ) : null}
              </h1>
              <p className="text-gray-800 dark:text-gray-200 text-base md:text-xl font-medium tracking-tight">
                I just write whatever comes to mind, usually software
                engineering, competitive programming, or cybersecurity. Since
                the revamp of my portfolio, I&apos;ve written{" "}
                <span className="font-bold text-blue-500">
                  {allPosts.length} blog posts.
                </span>{" "}
                Use the search bar below to filter the posts.
              </p>
            </div>
            <div className="relative max-w-lg">
              <input
                aria-label="Search by post name, tag, or description"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by post name, tag, or description"
                className="block w-full rounded-md border border-gray-300 bg-white pl-4 pr-10 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <ul className="flex flex-col gap-y-6 w-full pb-12">
            {filteredPosts.map((e, key) => (
              <Link href={`/blog/${e.slug}`} key={key}>
                <li className="w-full flex flex-col gap-y-1 p-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 ease-in-out transition duration-300 border-2 dark:border-gray-200 border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-md">
                  <div className="tracking-tight">
                    <div className="flex flex-row w-full justify-between items-center">
                      <h2 className="font-semibold text-base md:text-xl">
                        {e.title}
                      </h2>
                      <span className="text-xs md:text-base text-blue-500 font-medium flex gap-x-1">
                        {e.genre.map((g) => (
                          <Link
                            className="border-b-2 leading-4 border-transparent hover:border-blue-500 transition duration-300"
                            href={`/blog?genre=${g}`}
                            key={key}
                          >{`#${g}`}</Link>
                        ))}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-lg">
                      {new Date(e.date).toLocaleString("en-US", {
                        timeZone: "UTC",
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </h3>
                  </div>
                  <p className="text-sm md:text-lg tracking-tight">{e.desc}</p>
                </li>
              </Link>
            ))}
            {filteredPosts.length == 0 ? (
              <span className="px-4">{`No posts matched your query :(`}</span>
            ) : null}
          </ul>
        </div>
      </div> */}
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/src/blog`, "utf-8");

  const posts = files.filter((post) => post.endsWith(".md"));
  const data = posts.map((post) => {
    const path = `${process.cwd()}/src/blog/${post}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    let final = rawContent.replace(
      `---`,
      `---\nslug: ${post.replace(".md", "")}\n`
    );
    return final;
  });

  return {
    props: { data },
  };
}
