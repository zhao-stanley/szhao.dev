import Link from "next/link";

//#f1e05a
const languages = [
  "javascript#f1e05a",
  "typescript#3178c6",
  "html#e34c26",
  "css#563d7c",
  "c++#f34b7d",
  "shell#89e051",
];

export default function Repository({ name, desc, link, lang, stars, forks }) {
  return (
    <Link
      className="w-full p-4 text-neutral-200 text-sm sm:text-base max-w-full truncate overflow-x-hidden overflow-ellipsis whitespace-nowrap border-[1px] border-neutral-800 transition-all ease-linear hover:bg-neutral-900 rounded-lg flex flex-col gap-2"
      href={link}
      target="_blank"
    >
      <div className="flex flex-col justify-between gap-6 w-full h-full">
        <div className="flex flex-col">
          <span className="text-white font-bold">{name}</span>
          <span className="max-w-max truncate text-xs sm:text-sm">{desc}</span>
        </div>
        <div className="flex flex-row w-full justify-between">
          {lang !== null ? (
            <div className="flex flex-row gap-1 items-center">
              <span
                style={{
                  backgroundColor: languages.filter((s) =>
                    s.includes(lang.toLowerCase())
                  )
                    ? `#${
                        languages
                          .filter((s) => s.includes(lang.toLowerCase()))[0]
                          .split("#")[1]
                      }`
                    : "#000000",
                }}
                className="w-3 h-3 rounded-full"
              />
              <span className="max-w-max truncate text-xs sm:text-sm">
                {lang}
              </span>
            </div>
          ) : (
            <span className="text-xs sm:text-sm">N/A</span>
          )}
          <span className="flex flex-row gap-2">
            <div className="flex flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-auto stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span className="text-xs sm:text-sm">{stars}</span>
            </div>
            <div className="flex flex-row gap-1">
              <svg className="w-4 h-auto fill-white" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
              <span className="text-xs sm:text-sm">{forks}</span>
            </div>
          </span>
        </div>
      </div>
    </Link>
  );
}
