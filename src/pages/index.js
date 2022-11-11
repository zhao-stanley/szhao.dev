import matter from "gray-matter";
import Hero from "../components/home/Hero";
import RecentPosts from "../components/home/RecentPosts";
import Projects from "../components/home/Projects";

export default function Home({ data }) {
  const frontMatter = data.map((post) => matter(post));
  const allPosts = frontMatter.map((listItem) => listItem.data);
  allPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="w-full h-full min-h-screen py-24 sm:py-0 px-8 flex flex-col items-center">
      <div className="w-full h-full flex flex-col gap-y-4 items-center">
        <Hero />
        <RecentPosts recentPosts={recentPosts} />
        <Projects />
      </div>
    </div>
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
