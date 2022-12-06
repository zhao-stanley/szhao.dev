import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import { CodeBlock } from "../../components/global/CodeBlock";
import Link from "next/link";
import profile from "../../../public/static/img/profile.png";
import Image from "next/legacy/image";
import SEO from "../../components/global/SEO";
import siteMetadata from "../../data/siteMetadata";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

export default function Post({ postContent }) {
  const { data, content } = matter(postContent);
  if (data.draft) {
    return (
      <>
        <SEO title={`${data.title} | ${siteMetadata.title}`} />
        <div className="w-full h-auto min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-7xl w-full pt-24 sm:pt-4 sm:pb-16 px-8 md:px-0 flex flex-col divide-y-2 md:max-w-2xl lg:max-w-4xl">
            <h1 className="text-center text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tight">
              This blog post is under construction 🚧
            </h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title={`${data.title} | ${siteMetadata.title}`} desc={data.desc} />
      <div className="w-full h-auto min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full py-24 sm:pt-4 sm:pb-16 px-8 md:px-0 flex flex-col divide-y-2 md:max-w-2xl lg:max-w-4xl">
          <div className="flex flex-col justify-center gap-y-2 md:gap-y-4 py-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {data.title}
            </h1>
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              <div className="flex flex-col gap-y-1 md:flex-row md:justify-between">
                <div className="flex flex-row gap-x-1 items-center">
                  <div className="flex flex-row gap-x-2 items-center">
                    <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden shadow-lg rounded-3xl select-none">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                        placeholder="blur"
                        draggable="false"
                        alt="Picture"
                        src={profile}
                      />
                    </div>
                    <span className="text-base md:text-lg text-gray-800 font-medium dark:text-gray-200 tracking-tight">
                      Stanley Zhao
                    </span>
                  </div>
                  /
                  <h2 className="text-base md:text-lg text-gray-800 dark:text-gray-200 tracking-tight">
                    {new Date(data.date).toLocaleString("en-US", {
                      timeZone: "UTC",
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </h2>
                </div>
                <h2 className="text-base md:text-lg text-gray-800 dark:text-gray-200 tracking-tight flex gap-x-1">
                  {readingTime(content)} min read •{" "}
                  {data.genre.map((g) => (
                    <Link
                      className="text-blue-500 font-medium"
                      href={`/blog?genre=${g}`}
                    >
                      #{g}
                    </Link>
                  ))}
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm md:text-base cursor-pointer font-medium w-fit text-gray-700 dark:text-gray-300"
              >
                &larr; Back to Posts
              </Link>
            </div>
          </div>
          <article className="prose prose-h1:font-bold prose-h1:mb-0 dark:prose-invert lg:prose-lg w-full pt-6 max-w-7xl prose-a:text-blue-500">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw, rehypeKatex]}
              remarkPlugins={[remarkGemoji, remarkMath]}
              components={CodeBlock}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 sm:w-12 h-auto hover:stroke-[#3b82f6] transition duration-300 cursor-pointer"
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg> */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const fs = require("fs");
  const { post } = context.params;
  const rawContent = fs.readFileSync(
    `${process.cwd()}/src/blog/${post}.md`,
    "utf8"
  );

  let postContent = rawContent.replace(
    `---`,
    `---\nslug: ${post.replace(".md", "")}\n`
  );

  return {
    props: {
      postContent,
    },
  };
}

function readingTime(text) {
  const wpm = 245;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
