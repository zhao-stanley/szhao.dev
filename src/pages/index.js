import Hero from "../components/home/Hero";
import SEO from "../components/global/SEO";
import Body from "../components/home/Body";
import dynamic from "next/dynamic";
import CurrentlyPlaying from "../components/home/CurrentlyPlaying";

const ContactMe = dynamic(() => import("../components/home/ContactMe"), {
  ssr: false,
});

export default function Home({ numberPosts, githubFollowers, viewCount }) {
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

  return {
    props: { numberPosts, githubFollowers },
    revalidate: 30,
  };
}
