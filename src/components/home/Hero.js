import Link from "next/link";

export default function Hero() {
  return (
    <>
      <main className="w-full max-w-4xl py-8 flex flex-col gap-4">
        <h1 className="font-serif text-3xl">Stanley Zhao</h1>
        <p>
          Greetings! I'm the{" "}
          <span className="font-semibold">
            CTO at{" "}
            <Link
              href="https://scilynk.com/"
              target="_blank"
              rel="opener"
              className="bg-gradient-to-tl from-[#55e0af] to-[#289178] bg-clip-text text-transparent font-semibold inline"
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
