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
      <div className="w-full h-full min-h-screen py-24 sm:py-0 px-8 flex flex-col items-center">
        <div className="w-full h-full md:max-w-[704px] lg:max-w-[928px] flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4 py-8">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Posts{searchValue ? ` about ` : null}
                {searchValue ? (
                  <>
                    <span className="text-[#3b82f6] underline dark:decoration-gray-200 decoration-gray-800 underline-offset-[6px]">
                      {searchValue.substring(0, 10)}
                    </span>
                    .
                  </>
                ) : null}
              </h1>
              <p className="text-gray-800 dark:text-gray-200 text-base md:text-xl font-medium tracking-tight">
                I just write whatever comes to mind, usually software
                engineering, competitive programming, or cybersecurity. Since
                the revamp of my portfolio, I&apos;ve written{" "}
                <span className="font-semibold">{allPosts.length}</span> blog
                posts. Use the search bar below to filter the posts.
              </p>
            </div>
            <div className="relative max-w-lg">
              <input
                aria-label="Search by post name, tag, or description"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by post name, tag, or description"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
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
          <ul className="flex flex-col gap-y-4 w-full">
            {filteredPosts.map((e, key) => (
              <Link href={`/blog/${e.slug}`} key={key}>
                <li className="w-full flex flex-col gap-y-1 p-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 ease-in-out transition duration-300 border-2 dark:border-gray-200 border-gray-800 hover:border-[#3b82f6] dark:hover:border-[#3b82f6] shadow-md">
                  <div className="tracking-tight">
                    <div className="flex flex-row w-full justify-between items-center">
                      <h2 className="font-semibold text-base md:text-xl">
                        {e.title}
                      </h2>
                      <span className="text-xs md:text-base text-blue-500 font-medium">
                        {e.genre.map((g) => `#${g}`).join(" ")}
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
      </div>
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
