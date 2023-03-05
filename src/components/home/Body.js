import Link from "next/link";
import Image from "next/image";
import profile from "../../../public/static/img/profile.png";
import siteMetadata from "../../data/siteMetadata";
import millify from "millify";
import countapi from "countapi-js";
import { useEffect, useState } from "react";
const token = process.env.NEXT_PUBLIC_COUNTAPI;

export default function Body({ numberPosts, githubFollowers }) {
  const [viewCount, setViewCount] = useState(0);
  //View Count
  async function getViewCount() {
    const response = await countapi.hit("szhao.dev", token);
    const { value } = response;
    return setViewCount(value);
  }

  useEffect(() => {
    getViewCount();
  }, []);

  return (
    <section className="flex flex-col sm:flex-row gap-8">
      <div
        className="relative h-24 w-24 sm:h-22 sm:w-22 flex-shrink-0 overflow-hidden rounded-full hover:rotate-[360deg] duration-[1.375s] hover:hue-rotate-180 transition ease-in-out select-none"
        style={{ boxShadow: `0 5px 15px -1px #fe99b6` }}
      >
        <Image
          className="object-cover object-center"
          placeholder="blur"
          draggable="false"
          alt="Picture"
          src={profile}
        />
      </div>
      <ul className="flex flex-col gap-2 text-sm sm:text-base w-fit">
        <Link href={siteMetadata.github} target="_blank">
          <li className="flex flex-row gap-2 text-[#aeaeae] items-center hover:text-white fill-[#aeaeae] hover:fill-white transition ease-in-out duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-auto"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{" "}
            </svg>
            {githubFollowers} followers on GitHub
          </li>
        </Link>
        <Link href={"/blog"}>
          <li className="flex flex-row gap-2 text-[#aeaeae] items-center hover:text-white fill-[#aeaeae] hover:fill-white transition ease-in-out duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            {numberPosts} blog posts written
          </li>
        </Link>
        <li
          title={`${viewCount.toLocaleString("en-US")} visits`}
          className="flex flex-row gap-2 text-[#aeaeae] items-center hover:text-white fill-[#aeaeae] hover:fill-white transition ease-in-out duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {millify(viewCount, {
            precision: 2,
          })}{" "}
          visits
        </li>
      </ul>
    </section>
  );
}
