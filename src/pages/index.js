import matter from "gray-matter";
import Hero from "../components/home/Hero";
import RecentPosts from "../components/home/RecentPosts";
import Projects from "../components/home/Projects";
import SEO from "../components/global/SEO";
import FavoriteProjects from "../components/home/FavoriteProjects";
import ContactMe from "../components/home/ContactMe";
import Body from "../components/home/Body";
import CurrentlyPlaying from "../components/home/CurrentlyPlaying";
import countapi from "countapi-js";
import millify from "millify";
import siteMetadata from "../data/siteMetadata";
const token = process.env.NEXT_PUBLIC_COUNTAPI;

export default function Home({
  data,
  numberPosts,
  githubFollowers,
  viewCount,
}) {
  const frontMatter = data.map((post) => matter(post));
  const allPosts = frontMatter.map((listItem) => listItem.data);
  allPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  const recentPosts = allPosts.slice(0, 3);

  return (
    <>
      <SEO />
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <Hero />
        <Body
          numberPosts={numberPosts}
          githubFollowers={githubFollowers}
          viewCount={viewCount}
        />
        <section className="w-full flex flex-col gap-2 sm:gap-4">
          <h3 className="font-serif text-xl sm:text-2xl">Music Activity</h3>
          <CurrentlyPlaying />
        </section>
        <ContactMe />
      </div>
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

  //Github Followers
  const username = "zhao-stanley";
  const url = `https://api.github.com/users/${encodeURI(username)}`;
  let githubFollowers = await fetch(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data.followers);
  if (githubFollowers === undefined) {
    githubFollowers = 0;
  }

  //Number of Posts
  let numberPosts = posts.length;

  //View Count
  const viewCount = await countapi.hit("szhao.dev", token).then((e) =>
    millify(e.value, {
      precision: 2,
    })
  );

  return {
    props: { data, numberPosts, githubFollowers, viewCount },
  };
}
