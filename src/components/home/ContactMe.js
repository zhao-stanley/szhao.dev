import Link from "next/link";
import { motion } from "framer-motion";
import siteMetadata from "../../data/siteMetadata";

const variants = {
  offscreen: {
    opacity: 0,
    y: 25,
  },
  onscreen: {
    y: 0,
    transition: {
      duration: 0.5,
    },
    opacity: 1,
  },
};

export default function ContactMe() {
  return (
    <>
      <section className="w-full flex flex-col gap-4 pb-40">
        <h3 className="font-serif text-2xl">Contact Me</h3>
        <p>
          Don't hesitate to contact me below. I'm open to freelancing,
          inquiries, tutoring, or if you just want to say hi!
        </p>
        <motion.div
          className="w-full flex flex-col items-center"
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          transition={{ ease: [0, 0.71, 0.2, 1.01] }}
          viewport={{ once: true, amount: 0.1 }}
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
