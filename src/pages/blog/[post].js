import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import { CodeBlock } from "../../components/global/CodeBlock";
import Link from "next/link";
import SEO from "../../components/global/SEO";
import siteMetadata from "../../data/siteMetadata";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import DraftPlaceholder from "../../components/blog/DraftPlaceholder";

export default function Post({ postContent }) {
  const { data, content } = matter(postContent);
  if (data.draft) {
    return (
      <>
        <SEO
          title={`[DRAFT] ${data.title} | ${siteMetadata.title}`}
          desc={"This post is still being written... 🚧"}
        />
        <div className="w-full max-w-2xl flex flex-col gap-8">
          <main className="w-full flex flex-col gap-4">
            <h1 className="font-serif text-3xl lg:text-4xl">
              {data.draft === true ? (
                <span className="text-red-500">[DRAFT] </span>
              ) : (
                ""
              )}{" "}
              {data.title}
            </h1>
            <section className="text-neutral-200 text-xs sm:text-sm w-full flex flex-row justify-between items-center gap-2">
              <span
                title={new Date(data.date).toLocaleString("en-US", {
                  timeZone: "UTC",
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
                className="p-2 border-[1px] border-neutral-800 rounded-md whitespace-nowrap"
              >
                {new Date(data.date).toLocaleString("en-US", {
                  timeZone: "UTC",
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </span>
              <div className="w-full h-[0.125rem] bg-neutral-800"></div>
              <span
                title={`0 minute read`}
                className="p-2 border-[1px] border-neutral-800 rounded-md whitespace-nowrap"
              >
                0 min read
              </span>
            </section>
            <section className="p-2 border-[1px] border-neutral-800 rounded-md text-neutral-200 text-xs sm:text-sm whitespace-nowrap flex flex-row justify-around">
              {data.genre.length > 0 ? (
                data.genre.map((g, key) => (
                  <Link
                    className="font-medium hover:text-blue-500 transition ease-linear"
                    href={`/blog?genre=${g}`}
                    title={`View all #${g} posts`}
                    key={key}
                  >
                    #{g}
                  </Link>
                ))
              ) : (
                <span className="font-medium">No tags</span>
              )}
            </section>
            <p className="text-neutral-200 text-sm sm:text-base">
              Psst! This post is still a draft and hasn&apos;t been finished
              yet. Check back another time!
              <br />
            </p>
            <DraftPlaceholder />
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title={`${data.title} | ${siteMetadata.title}`} desc={data.desc} />
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <main className="w-full flex flex-col gap-4">
          <h1 className="font-serif text-3xl lg:text-4xl">{data.title}</h1>
          <section className="text-neutral-200 text-xs sm:text-sm w-full flex flex-row justify-between items-center gap-2">
            <span
              title={new Date(data.date).toLocaleString("en-US", {
                timeZone: "UTC",
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
              className="p-2 border-[1px] border-neutral-800 rounded-md whitespace-nowrap"
            >
              {new Date(data.date).toLocaleString("en-US", {
                timeZone: "UTC",
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </span>
            <div className="w-full h-[0.125rem] bg-neutral-800"></div>
            <span
              title={`${readingTime(content)} minute read`}
              className="p-2 border-[1px] border-neutral-800 rounded-md whitespace-nowrap"
            >
              {readingTime(content)} min read
            </span>
          </section>
          <section className="p-2 border-[1px] border-neutral-800 rounded-md text-neutral-200 text-xs sm:text-sm whitespace-nowrap flex flex-row justify-around">
            {data.genre.map((g, key) => (
              <Link
                className="font-medium hover:text-blue-500 transition ease-linear"
                href={`/blog?genre=${g}`}
                title={`View all #${g} posts`}
                key={key}
              >
                #{g}
              </Link>
            ))}
          </section>
          <article className="prose max-w-full prose-sm prose-invert w-full prose-a:text-blue-500">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw, rehypeKatex]}
              remarkPlugins={[remarkGemoji, remarkMath]}
              components={CodeBlock}
            >
              {content}
            </ReactMarkdown>
          </article>
        </main>
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
