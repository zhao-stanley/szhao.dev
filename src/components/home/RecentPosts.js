import Link from "next/link";
import { motion } from "framer-motion";

export default function RecentPosts({ recentPosts }) {
  return (
    <section className="py-10 flex flex-col gap-y-6 w-full md:max-w-2xl lg:max-w-4xl">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
        Recent Posts
      </h2>
      <ul className="w-full flex flex-col md:flex-row gap-8">
        <motion.li
          className="w-full border-2 dark:border-gray-200 border-gray-800 rounded-xl shadow-lg transition-colors duration-300 hover:border-[#3b82f6] dark:hover:border-[#3b82f6]"
          whileHover={{ translateY: -5 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Link href={`/blog/${recentPosts[0].slug}`}>
            <div className="w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col justify-between gap-y-4">
              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg font-bold">{recentPosts[0].title}</h2>
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
        </motion.li>
        <motion.li
          className="w-full border-2 dark:border-gray-200 border-gray-800 rounded-xl shadow-lg transition-colors duration-300 hover:border-[#3b82f6] dark:hover:border-[#3b82f6]"
          whileHover={{ translateY: -5 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Link href={`/blog/${recentPosts[1].slug}`}>
            <div className="w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col justify-between gap-y-4">
              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg font-bold">{recentPosts[1].title}</h2>
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
        </motion.li>
        <motion.li
          className="w-full border-2 dark:border-gray-200 border-gray-800 rounded-xl shadow-lg transition-colors duration-300 hover:border-[#3b82f6] dark:hover:border-[#3b82f6]"
          whileHover={{ translateY: -5 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Link href={`/blog/${recentPosts[2].slug}`}>
            <div className="w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col justify-between gap-y-4">
              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg font-bold">{recentPosts[2].title}</h2>
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
        </motion.li>
      </ul>
      <Link href="/blog" className="w-fit font-medium">
        Read all posts &rarr;
      </Link>
    </section>
  );
}
