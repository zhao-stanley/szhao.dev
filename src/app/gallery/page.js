import { splitArray } from "@/data/utils";
import Media from "@/components/gallery/Media";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getData() {
  const fs = require("fs");
  let data = fs.readdirSync(`${process.cwd()}/public/static/gallery`);
  data.forEach((media, key) => {
    data[key] = `https://cdn.szhao.dev/static/gallery/${media}`;
  });
  return data;
}

export default async function Gallery() {
  const data = await getData();
  return (
    <>
      <section className="flex h-full min-h-screen w-full flex-col items-center gap-4 px-2 pb-2 sm:px-4 sm:pb-4 pt-12 text-center font-sans lg:pt-[4.5rem]">
        <div className="grid h-full min-h-screen w-full grid-flow-col gap-2">
          {/* <div className="flex w-full flex-col gap-2">
            <Media src={data[0]} />
          </div> */}
          <div className="flex w-full flex-col gap-2">
            {data.map((media, key) => (
              <Media src={media} key={key} />
            ))}
          </div>
          {/* <div className="flex w-full flex-col gap-2">
            {data.map((media, key) => (
              <Media src={media} key={key} />
            ))}
          </div> */}
          {/* <div className="flex w-full flex-col gap-2">
            {splitArray(data, 3)[2].map((media, key) => (
              <Media src={media} key={key} />
            ))}
          </div> */}

          {/* <div className="flex w-full flex-col gap-2">
            {gallery[0].map((media, key) => {
              let videoExtensions = ["mp4", "mov"];
              if (
                videoExtensions.includes(
                  media.substring(media.length - 3, media.length).toLowerCase()
                )
              ) {
                return (
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    key={key}
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`${media}`}
                  />
                );
              } else {
                return (
                  <Image
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`${media}`}
                    alt={"szhao.dev Gallery"}
                    width={
                      typeof window !== "undefined"
                        ? window.innerWidth / 3
                        : 100
                    }
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
              if (
                videoExtensions.includes(
                  media.substring(media.length - 3, media.length).toLowerCase()
                )
              ) {
                return (
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    key={key}
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`${media}`}
                  />
                );
              } else {
                return (
                  <Image
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`${media}`}
                    alt={"szhao.dev Gallery"}
                    width={
                      typeof window !== "undefined"
                        ? window.innerWidth / 3
                        : 100
                    }
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
              if (
                videoExtensions.includes(
                  media.substring(media.length - 3, media.length).toLowerCase()
                )
              ) {
                return (
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    key={key}
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`${media}`}
                  />
                );
              } else {
                return (
                  <Image
                    className="h-auto w-full rounded-md border border-neutral-800 transition duration-500 ease-in-out"
                    src={`${media}`}
                    alt={"szhao.dev Gallery"}
                    width={
                      typeof window !== "undefined"
                        ? window.innerWidth / 3
                        : 100
                    }
                    height={100}
                    sizes="50vw"
                    key={key}
                    loading="lazy"
                  />
                );
              }
            })}
          </div> */}
        </div>
      </section>
    </>
  );
}
