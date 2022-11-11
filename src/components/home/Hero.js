import Image from "next/image";
import profile from "../../../public/static/img/profile.png";
import siteMetadata from "../../data/siteMetadata";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <main className="pt-8 pb-4 sm:py-8 w-full h-full flex flex-col sm:flex-row-reverse justify-center gap-y-6 sm:justify-between md:max-w-2xl lg:items-center lg:max-w-4xl">
        <div
          className="relative h-20 w-20 sm:h-32 sm:w-32 lg:w-48 lg:h-48 flex-shrink-0 overflow-hidden rounded-3xl hover:rotate-[360deg] duration-[1.375s] hover:scale-110 hover:hue-rotate-180 transition ease-in-out select-none"
          style={{ boxShadow: `0 10px 20px -1px #fe99b6` }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            placeholder="blur"
            draggable="false"
            alt="Picture"
            src={profile}
          />
        </div>
        <section className="flex flex-col gap-y-2 max-w-sm">
          <div className="flex flex-col gap-y-1">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight">
              Stanley Zhao
            </h1>
            <h2 className="text-base md:text-xl">
              Chief Engineer at{" "}
              <Link
                href="https://scilynk.com/"
                target="_blank"
                rel="opener"
                className="bg-gradient-to-tl from-[#55e0af] to-[#289178] bg-clip-text text-transparent font-semibold inline"
              >
                SciLynk
              </Link>
            </h2>
          </div>
          <p className="whitespace-prewrap text-base md:text-lg">
            {siteMetadata.desc}
          </p>
        </section>
      </main>
    </>
  );
}
