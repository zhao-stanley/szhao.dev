import Link from "next/link";

export default function Footer() {
  const sdObj = new Date("January 1, 2022");
  const cdObj = new Date();
  const startYear = sdObj.getFullYear();
  const currentYear = cdObj.getFullYear();
  return (
    <>
      <footer className="flex flex-col w-full items-center pt-4 pb-6 sm:pb-12">
        <div className="md:max-w-2xl lg:max-w-4xl w-full flex flex-col gap-y-4 px-8 md:px-0">
          <hr />
          <div className="w-full flex flex-row justify-between items-center">
            <span className="text-gray-800 dark:text-gray-200 text-sm tracking-tighter">
              &copy;{" "}
              {startYear == currentYear
                ? currentYear
                : `${startYear}-${currentYear}`}{" "}
              STANLEY ZHAO
            </span>
            <div className="w-fit flex flex-row gap-x-3 sm:gap-x-6">
              <Link
                href="https://linkedin.com/in/sz5"
                target="_blank"
                rel="noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-auto fill-gray-500 dark:fill-gray-400 hover:fill-gray-900 dark:hover:fill-gray-100 transition ease-in-out duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
                </svg>
              </Link>
              <Link href="/resume.pdf" target="_blank" rel="noopener">
                <svg
                  className="w-5 h-5 fill-gray-500 dark:fill-gray-400 hover:fill-gray-900 dark:hover:fill-gray-100 transition ease-in-out duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/zhao-stanley"
                target="_blank"
                rel="noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-auto fill-gray-500 dark:fill-gray-400 hover:fill-gray-900 dark:hover:fill-gray-100 transition ease-in-out duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82A7.616 7.616 0 0012 7.868a7.643 7.643 0 00-2.003.269c-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118a3.092 3.092 0 00-.824 2.147c0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385A8 8 0 0112 4a8 8 0 012.534 15.59z"></path>
                </svg>
              </Link>
              <Link
                href="mailto:stanleyhzhao@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-gray-500 dark:fill-gray-400 hover:fill-gray-900 dark:hover:fill-gray-100 transition ease-in-out duration-300"
                  fillRule="evenodd"
                  viewBox="0 0 24 24"
                  clipRule="evenodd"
                >
                  <path d="M19 24H5a5 5 0 01-5-5V5a5 5 0 015-5h14a5 5 0 015 5v14a5 5 0 01-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142H5.141C4.511 6.333 4 6.845 4 7.475v9.05c0 .63.511 1.142 1.141 1.142h13.718zM12 13.609L5.772 9.288 5.758 17h12.457V9.288L12 13.609zM17.913 7A1908.257 1908.257 0 0012 11.153L6.053 7h11.86z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
