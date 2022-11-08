import Link from "next/link";
import ThemeSwitch from "../components/global/ThemeSwitch";
import nav from "../data/nav";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center">
      <div className="w-full h-24 flex flex-row items-center justify-around px-4 py-8 max-w-2xl">
        {nav.map((e, key) => (
          <Link
            className="w-fit rounded-xl font-semibold px-4 py-3 select-none hover:bg-gray-700 transition duration-300 ease-linear"
            href={e.href}
            key={key}
          >
            {e.title}
          </Link>
        ))}

        <ThemeSwitch />
      </div>
    </div>
  );
}
