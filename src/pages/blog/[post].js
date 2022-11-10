import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import { CodeBlock } from "../../components/global/CodeBlock";
import Link from "next/link";
import profile from "../../../public/static/img/profile.png";
import Image from "next/image";

export default function Post({ postContent }) {
  const { data, content } = matter(postContent);
  if (data.draft) {
    return (
      <>
        <div className="w-full h-auto min-h-screen py-20 flex flex-col items-center justify-center">
          <div className="max-w-[1536px] w-full p-12 flex flex-col items-center divide-y-2">
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
      <div className="w-full h-auto min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full py-24 sm:pt-4 sm:pb-16 px-8 md:px-0 flex flex-col divide-y-2 md:max-w-2xl lg:max-w-4xl">
          <div className="flex flex-col justify-center gap-y-2 md:gap-y-4 pb-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {data.title}
            </h1>
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              <div className="flex flex-col gap-y-1 md:flex-row md:justify-between">
                <div className="flex flex-row gap-x-1 items-center">
                  <div className="flex flex-row gap-x-2 items-center">
                    <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden shadow-lg rounded-3xl hover:rotate-12 hover:hue-rotate-180 transition ease-in-out duration-300 select-none">
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
                <h2 className="text-base md:text-lg text-gray-800 dark:text-gray-200 tracking-tight">
                  {readingTime(content)} min read •{" "}
                  <Link
                    className="text-blue-500 font-medium"
                    href={`/blog?genre=${data.genre}`}
                  >
                    #{data.genre}
                  </Link>
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm md:text-base cursor-pointer font-medium w-fit"
              >
                &larr; Back to Posts
              </Link>
            </div>
          </div>
          <article className="prose prose-h1:font-bold prose-h1:mb-0 dark:prose-invert lg:prose-lg w-full pt-6 max-w-7xl prose-a:text-blue-500">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGemoji]}
              components={CodeBlock}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const fs = require("fs");
  const { post } = context.params;
  let postContent = fs.readFileSync(
    `${process.cwd()}/src/blog/${post}.md`,
    "utf8"
  );

  postContent = `---\nslug: ${post.replace(".md", "")}\n` + postContent;

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
