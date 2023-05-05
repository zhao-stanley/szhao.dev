import SEO from "../components/global/SEO";
import Link from "next/link";
import siteMetadata from "../data/siteMetadata";

export default function About() {
  return (
    <>
      <SEO title={`About | ${siteMetadata.title}`} />
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <main className="w-full flex flex-col gap-4">
          <h1 className="font-serif text-3xl lg:text-4xl">About Me</h1>
          <p className="text-neutral-200 text-sm sm:text-base">
            Hello! I&apos;m a computer science major from New York who will be
            attending{" "}
            <span
              title="Massachusetts Institute of Technology"
              className="bg-gradient-to-br from-red-500 to-[#A31F34] bg-clip-text text-transparent font-black inline"
            >
              MIT
            </span>{" "}
            in the fall. My interests in computer science include (but are not
            limited to) web development, artificial intelligence, and
            cybersecurity.
            <br />
            <br /> Outside of computer science, I enjoy performing music,
            dabbling in graphic design, and playing sports like volleyball,
            basketball, and badminton.
            <br />
            <br />
            You can{" "}
            <Link
              className="font-bold"
              href="/resume"
              title="Click to view resume"
            >
              view my resume here
            </Link>
            .
          </p>
          <br />
          <div className="w-full h-[0.125rem] bg-neutral-700" />
          <br />
          <p className="text-neutral-200 text-sm sm:text-base">
            Currently, I&apos;m the Chief Technology Officer @{" "}
            <Link
              href="https://scilynk.com/"
              target="_blank"
              rel="opener"
              title="SciLynk"
              className="bg-gradient-to-br from-[#55e0af] to-[#289178] bg-clip-text text-transparent font-bold inline"
            >
              SciLynk
            </Link>
            , where I lead full-stack development to deliver a beautiful and
            efficient experience for researchers to help accelerate their
            workflow. <br />
            <br />
            I&apos;m also a{" "}
            <Link
              title="Bug Hunter @ Discord"
              target="_blank"
              href="https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs#h_01F2HKTD57FVC60P8B8JW6FTKX"
            >
              Bug Hunter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3ba55c"
                  d="M16.582 2.638s7.672 5.236 4.757 12.589c-2.915 7.352-8.714 5.313-6.547 3.165 2.167-2.149-2.557-3.606-5.581-6.394l7.365-9.36"
                ></path>
                <path
                  fill="#b4e1cd"
                  d="M16.116 9.837c-1.618 2.059-3.9 3.088-5.665 2.717L4.294 20.4a1.279 1.279 0 01-1.796.218 1.279 1.279 0 01-.224-1.803l6.125-7.832c-.812-1.624-.365-4.111 1.278-6.19 2.04-2.582 5.115-3.548 6.899-2.154 1.784 1.394 1.566 4.616-.46 7.2z"
                ></path>
              </svg>{" "}
              @ <span className="text-[#5865F2] font-bold">Discord</span>
            </Link>
            , where I help identify, reproduce, and provide high quality bug
            reports to the engineering team.
            <br />
            <br />I enjoy developing for the web the most, as I find the ability
            to view your code&apos;s output in real-time extremely satisfying.
            <br />
            <br />
            My go-to tech stack includes{" "}
            <strong>Next.js, TailwindCSS, Node.js, and MongoDB</strong>.
            <br />
            <br />
            Feel free to connect/contact me through my socials below!
          </p>
        </main>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 justify-center">
          <Link
            className="w-full p-4 border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-md flex flex-row gap-2 items-center justify-between"
            href={siteMetadata.github}
            target="_blank"
            title={`GitHub — ${siteMetadata.github_user}`}
          >
            <div className="flex flex-row items-center gap-3 fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-auto"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{" "}
              </svg>
              <span>{siteMetadata.github_user}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="w-full p-4 border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-md flex flex-row gap-2 items-center justify-between"
            href={siteMetadata.linkedin}
            target="_blank"
            title={`LinkedIn — ${siteMetadata.linkedin_user}`}
          >
            <div className="flex flex-row items-center gap-3 fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-auto"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>{siteMetadata.linkedin_user}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="w-full p-4 border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-md flex flex-row gap-2 items-center justify-between"
            href={siteMetadata.email}
            target="_blank"
            title={`Gmail — ${siteMetadata.email_user}`}
          >
            <div className="flex flex-row items-center gap-3 fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-auto"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span>{siteMetadata.email_user}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
          <Link
            className="w-full p-4 border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-md flex flex-row gap-2 items-center justify-between"
            href={siteMetadata.discord}
            target="_blank"
            title={`Discord — ${siteMetadata.discord_user}`}
          >
            <div className="flex flex-row items-center gap-3 fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 127.14 96.36"
                className="w-5 h-auto"
              >
                <path d="M107.7 8.07A105.15 105.15 0 0081.47 0a72.06 72.06 0 00-3.36 6.83 97.68 97.68 0 00-29.11 0A72.37 72.37 0 0045.64 0a105.89 105.89 0 00-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0032.17 16.15 77.7 77.7 0 006.89-11.11 68.42 68.42 0 01-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0064.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 01-10.87 5.19 77 77 0 006.89 11.1 105.25 105.25 0 0032.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15zM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69z"></path>
              </svg>
              <span>{siteMetadata.discord_user}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </section>
      </div>
    </>
  );
}
