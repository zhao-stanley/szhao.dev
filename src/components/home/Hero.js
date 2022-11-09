import Image from "next/image";
import profile from "../../../public/static/img/profile.png";
import siteMetadata from "../../data/siteMetadata";

export default function Hero() {
  return (
    <>
      <main className="py-4 w-full h-full flex flex-col justify-center gap-y-4">
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden shadow-lg rounded-3xl hover:rotate-12 hover:hue-rotate-180 transition ease-in-out duration-300 select-none">
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
        <section className="flex flex-col gap-y-1">
          <h1 className="font-bold text-3xl tracking-tight">Stanley Zhao</h1>
          <h3>
            Chief Engineer at{" "}
            <span className="bg-gradient-to-tl from-[#55e0af] to-[#289178] bg-clip-text font-semibold text-transparent inline">
              SciLynk
            </span>
          </h3>
        </section>
        <p>{siteMetadata.desc}</p>
      </main>
    </>
  );
}
