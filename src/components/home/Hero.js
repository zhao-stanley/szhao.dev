import Link from "next/link";

export default function Hero() {
  return (
    <>
      <main className="w-full max-w-lg flex flex-col gap-4">
        <h1 className="font-serif text-3xl lg:text-4xl">Stanley Zhao</h1>
        <p className="text-neutral-200 text-sm sm:text-base">
          Greetings! I&apos;m the{" "}
          <span className="font-semibold">
            Chief Technology Officer at{" "}
            <Link
              href="https://scilynk.com/"
              target="_blank"
              rel="opener"
              className="bg-gradient-to-br from-[#55e0af] to-[#289178] bg-clip-text text-transparent font-semibold inline"
            >
              SciLynk
            </Link>
            ,{" "}
          </span>
          where we help researchers accelerate their workflow.
        </p>
      </main>
    </>
  );
}
