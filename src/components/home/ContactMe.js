import Link from "next/link";
import { motion } from "framer-motion";
import siteMetadata from "../../data/siteMetadata";
import { getAvailability } from "../../utils";
import { useEffect, useState } from "react";

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
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
    })
  );
  const [availability, setAvailability] = useState(getAvailability(new Date()));
  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
        })
      );
      setAvailability(getAvailability(new Date()));
    }, 1000);
  }, []);

  return (
    <>
      <section className="w-full flex flex-col gap-2 sm:gap-4">
        <h3 className="font-serif text-xl sm:text-2xl">Contact Me</h3>
        <p className="text-neutral-200 text-sm sm:text-base">
          I&apos;m open to freelancing, tutoring, or if you just want to say
          hello! Don&apos;t hesitate to contact me below.
          <br />
          <br />
          It&apos;s currently <strong>{time}</strong> for me, so {availability}
        </p>
        <div className="w-full flex flex-col mt-4">
          <Link
            href={siteMetadata.gmail}
            target="_blank"
            className="w-full text-xs sm:text-sm lg:text-base cursor-pointer px-4 py-3 font-semibold rounded-xl hover:bg-neutral-900 transition-all ease-linear text-center text-white border-[1px] border-neutral-800"
          >
            Send me an email
          </Link>
        </div>
      </section>
    </>
  );
}
