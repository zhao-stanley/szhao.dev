import contests from "../../data/contests";
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

export default function Contests() {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full tracking-tight">
        {contests.map((e, key) => (
          <motion.li
            className="shadow-lg w-full py-6 pl-4 pr-2 rounded-xl flex flex-row justify-between items-center"
            key={key}
            style={{
              border: `3px solid #${
                e.genre.toLowerCase() == "ctf" ? "d91c1c" : "4287f5"
              }80`,
              boxShadow: `0 5px 30px -1px #${
                e.genre.toLowerCase() == "ctf" ? "d91c1c" : "4287f5"
              }a0`,
            }}
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold tracking-tight">
                  {e.title}
                </h2>
                <h3 className="text-sm font-medium">{e.place}</h3>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-base font-extrabold text-center rotate-90">
                {e.genre.toUpperCase()}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
