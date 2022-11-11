import Link from "next/link";

export default function RecentPosts({ recentPosts }) {
  return (
    <section className="py-4 flex flex-col gap-y-6 w-full md:max-w-2xl lg:max-w-4xl">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Recent Posts</h2>
      <ul className="w-full flex flex-col md:flex-row gap-8">
        <li className="w-full bg-gradient-to-br p-2 rounded-2xl from-[#f05757] to-[#e9f153] bg-500 animate-gshift shadow-lg shadow-[#e9f15380]">
          <Link href={`/blog/${recentPosts[0].slug}`}>
            <div className="w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col justify-between gap-y-4">
              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg font-semibold">
                  {recentPosts[0].title}
                </h2>
                <h3 className="text-sm">{recentPosts[0].desc}</h3>
              </div>
              <span>
                {new Date(recentPosts[0].date).toLocaleString("en-US", {
                  timeZone: "UTC",
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </span>
            </div>
          </Link>
        </li>
        <li className="w-full bg-gradient-to-tr p-2 rounded-2xl from-[#4fd966] to-[#0575E6] bg-500 animate-gshift shadow-lg shadow-[#4fd96680]">
          <Link href={`/blog/${recentPosts[1].slug}`}>
            <div className="w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col justify-between gap-y-4">
              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg font-semibold">
                  {recentPosts[1].title}
                </h2>
                <h3 className="text-sm">{recentPosts[1].desc}</h3>
              </div>
              <span>
                {new Date(recentPosts[1].date).toLocaleString("en-US", {
                  timeZone: "UTC",
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </span>
            </div>
          </Link>
        </li>
        <li className="w-full bg-gradient-to-br p-2 rounded-2xl from-[#EECDA3] to-[#EF629F] bg-500 animate-gshift shadow-lg shadow-[#EF629F80]">
          <Link href={`/blog/${recentPosts[2].slug}`}>
            <div className="w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col justify-between gap-y-4">
              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg font-semibold">
                  {recentPosts[2].title}
                </h2>
                <h3 className="text-sm">{recentPosts[2].desc}</h3>
              </div>
              <span>
                {new Date(recentPosts[2].date).toLocaleString("en-US", {
                  timeZone: "UTC",
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </span>
            </div>
          </Link>
        </li>
      </ul>
      <Link href="/blog" className="w-fit font-medium">
        Read all posts &rarr;
      </Link>
    </section>
  );
}
