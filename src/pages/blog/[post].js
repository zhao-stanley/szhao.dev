import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
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
  console.log(content);
  return (
    <>
      <div className="w-full h-auto min-h-screen py-24 flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full p-8 flex flex-col items-center divide-y-2">
          <div className="flex flex-col justify-center gap-y-2 pb-6">
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
              {data.title}
            </h1>
            <div className="flex flex-col gap-y-1">
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
                  <span className="text-base md:text-lg 2xl:text-xl text-gray-800 font-medium dark:text-gray-200 tracking-tight">
                    Stanley Zhao
                  </span>
                </div>
                /
                <h2 className="text-base md:text-lg 2xl:text-xl text-gray-800 dark:text-gray-200 tracking-tight">
                  {new Date(data.date).toLocaleString("en-US", {
                    timeZone: "UTC",
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </h2>
              </div>
              <div className="flex flex-col gap-y-2">
                <h2 className="text-base md:text-lg 2xl:text-xl text-gray-800 dark:text-gray-200 tracking-tight">
                  {readingTime(content)} min read • #javascript
                </h2>
                <Link
                  href="/blog"
                  className="text-sm md:text-base 2xl:text-lg cursor-pointer font-medium w-fit"
                >
                  &larr; Back to Posts
                </Link>
              </div>
            </div>
          </div>
          <article className="prose prose-h1:font-bold prose-h1:mb-0 dark:prose-invert lg:prose-xl w-full pt-6 max-w-7xl">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={CodeBlock}>
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
  const postContent = fs.readFileSync(
    `${process.cwd()}/src/blog/${post}.md`,
    "utf8"
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
