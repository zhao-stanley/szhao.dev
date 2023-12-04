import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function Media({ src }) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { metadata, base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      width={metadata.width}
      height={metadata.height}
      sizes="50vw"
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
