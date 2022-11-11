import experience from "../../data/experience";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Work() {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full tracking-tight">
        {experience.map((e, key) => (
          <Link
            href={e.href}
            key={key}
            target={`${e.href.includes("http") ? "_blank" : "_self"}`}
            rel="opener"
          >
            <motion.li
              className="shadow-lg w-full py-4 pl-4 pr-2 rounded-xl flex flex-row justify-between items-center"
              style={{
                border: `3px solid #${e.theme}80`,
                boxShadow: `0 5px 30px -1px #${e.theme}a0`,
              }}
              variants={variants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold tracking-tight">
                    {e.title}
                  </h2>
                  <h3 className="text-sm font-medium">{e.location}</h3>
                </div>
                <h4 className="text-sm">{e.tenure}</h4>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-base font-extrabold text-center rotate-90">
                  {e.type.toUpperCase()}
                </span>
              </div>
            </motion.li>
          </Link>
        ))}
      </ul>
    </>
  );
}
