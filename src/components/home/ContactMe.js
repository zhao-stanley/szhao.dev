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
      <section className="w-full flex flex-col gap-2 sm:gap-4">
        <h3 className="font-serif text-xl sm:text-2xl">
          Contact Me
        </h3>
        <p className="text-sm sm:text-base">
          Don&apos;t hesitate to contact me below. I&apos;m open to freelancing,
          inquiries, tutoring, or if you just want to say hi!
        </p>
        <motion.div
          className="w-full flex flex-col mt-4"
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          transition={{ ease: [0, 0.71, 0.2, 1.01] }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Link
            href={`mailto:${siteMetadata.email}`}
            className="w-full sm:w-3/4 text-xs sm:text-sm lg:text-base cursor-pointer px-4 py-3 font-semibold rounded-3xl text-center border-2 text-white border-white transition duration-300 ease-linear hover:text-black hover:bg-white"
          >
            Send me an email
          </Link>
        </motion.div>
      </section>
    </>
  );
}
