import matter from "gray-matter";
import Hero from "../components/home/Hero";
import RecentPosts from "../components/home/RecentPosts";
import Projects from "../components/home/Projects";
import SEO from "../components/global/SEO";
import FavoriteProjects from "../components/home/FavoriteProjects";
import ContactMe from "../components/home/ContactMe";
import Body from "../components/home/Body";
import Spotify from "../components/home/Spotify";

export default function Home({ data, numberPosts, githubFollowers }) {
  const frontMatter = data.map((post) => matter(post));
  const allPosts = frontMatter.map((listItem) => listItem.data);
  allPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  const recentPosts = allPosts.slice(0, 3);

  return (
    <>
      <SEO />
      <Hero />
      <Body numberPosts={numberPosts} githubFollowers={githubFollowers} />
      <Spotify />
      {/* <SEO />
      <div className="w-full h-full min-h-screen py-24 sm:py-0 px-8 flex flex-col items-center">
        <div className="w-full h-full flex flex-col gap-y-4 items-center">
          <Hero />
          <RecentPosts recentPosts={recentPosts} />
          <FavoriteProjects>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Some of my favorite projects...
            </h2>
          </FavoriteProjects>
          <ContactMe />
        </div>
      </div> */}
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/src/blog`, "utf-8");

  const posts = files.filter((post) => post.endsWith(".md"));
  let numberPosts = posts.length;

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

  const username = "zhao-stanley"; // replace USERNAME with the desired GitHub username
  const url = `https://api.github.com/users/${encodeURI(username)}`;
  const githubFollowers = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.followers);

  return {
    props: { data, numberPosts, githubFollowers },
  };
}
