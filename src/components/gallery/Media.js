import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function Media({ src }) {
  const res = await fetch(src);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const buffer = await res.arrayBuffer();
  const { metadata, base64 } = await getPlaiceholder(Buffer.from(buffer));
  let data = {
    src,
    width: metadata.width,
    height: metadata.height,
    blurDataURL: base64,
  };

  return (
    <Image
      src={src}
      width={data.width}
      height={data.height}
      sizes="50vw"
      placeholder="blur"
      blurDataURL={data.blurDataURL}
    />
  );
}
