import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen py-24 sm:py-0 px-8 flex flex-col items-center">
      <div className="w-full h-full max-w-7xl flex flex-col">
        <Hero />
        
      </div>
    </div>
  );
}
