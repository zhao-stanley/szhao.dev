import Image from "next/image";
import { fisherYates, splitArray } from "../utils";

export default function Gallery({ gallery }) {
  return (
    <>
      <section className="flex h-full min-h-screen w-full flex-col items-center gap-4 px-2 pb-2 sm:px-4 sm:pb-4 pt-12 text-center font-sans lg:pt-[4.5rem]">
        <div className="grid h-full min-h-screen w-full grid-flow-col gap-2">
          <div className="flex w-full flex-col gap-2">
            {gallery[0].map((media, key) => {
              let videoExtensions = ["mp4", "mov"];
              if (videoExtensions.includes(media.split(".")[1].toLowerCase())) {
                return (
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    key={key}
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`/static/gallery/${media}`}
                  />
                );
              } else {
                return (
                  <Image
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`/static/gallery/${media}`}
                    alt={"szhao.dev Gallery"}
                    width={100}
                    height={100}
                    sizes="50vw"
                    key={key}
                    loading="lazy"
                  />
                );
              }
            })}
          </div>
          <div className="flex w-full flex-col gap-2">
            {gallery[1].map((media, key) => {
              let videoExtensions = ["mp4", "mov"];
              if (videoExtensions.includes(media.split(".")[1].toLowerCase())) {
                return (
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    key={key}
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`/static/gallery/${media}`}
                  />
                );
              } else {
                return (
                  <Image
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`/static/gallery/${media}`}
                    alt={"szhao.dev Gallery"}
                    width={100}
                    height={100}
                    sizes="50vw"
                    key={key}
                    loading="lazy"
                  />
                );
              }
            })}
          </div>
          <div className="flex w-full flex-col gap-2">
            {gallery[2].map((media, key) => {
              let videoExtensions = ["mp4", "mov"];
              if (videoExtensions.includes(media.split(".")[1].toLowerCase())) {
                return (
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    key={key}
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`/static/gallery/${media}`}
                  />
                );
              } else {
                return (
                  <Image
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`/static/gallery/${media}`}
                    alt={"szhao.dev Gallery"}
                    width={100}
                    height={100}
                    sizes="50vw"
                    key={key}
                    loading="lazy"
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const fs = require("fs");
  const shuffled = fisherYates(
    fs.readdirSync(`${process.cwd()}/public/static/gallery`),
  );

  const gallery = splitArray(shuffled, 3);

  return {
    props: {
      gallery,
    },
  };
};
