import Link from "next/link";
import { motion } from "framer-motion";
import siteMetadata from "../../data/siteMetadata";

const variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
    opacity: 1,
  },
};

export default function ContactMe() {
  return (
    <>
      <section className="w-full h-full flex flex-col items-center gap-y-2 sm:gap-y-6 pt-24 py-48 md:max-w-2xl lg:max-w-4xl text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight"
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          Want to get in touch with me?
        </motion.h1>
        <motion.h1
          className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 tracking-tight whitespace-pre-wrap w-full sm:w-2/3 text-center"
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          You can contact me below! I'm open to freelancing, job hiring,
          tutoring, or if you just want to say hi :&#41;
        </motion.h1>
        <motion.div
          className="w-full flex flex-col items-center pt-6 lg:pt-12"
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Link
            href={`mailto:${siteMetadata.email}`}
            className="w-2/3 sm:w-1/2 cursor-pointer px-4 py-3 font-semibold rounded-3xl text-center border-2 dark:text-gray-200 dark:border-gray-200 text-gray-800 border-gray-800 transition duration-300 ease-linear hover:text-white hover:bg-gray-800 dark:hover:text-black dark:hover:bg-gray-200"
          >
            Send me an email
          </Link>
        </motion.div>
      </section>
    </>
  );
}
