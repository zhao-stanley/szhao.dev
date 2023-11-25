import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const hourRotation = ((hour % 12) + minute / 60 + second / 3600) * 30;
  const minuteRotation = (minute + second / 60) * 6;
  const secondRotation = second * 6;

  return (
    <>
      <div className="relative z-10 h-6 w-6 rotate-180 cursor-help rounded-full border border-neutral-500 [&>span]:hover:block">
        <div
          className="absolute left-1/2 top-1/2 h-[6px] w-[1px] origin-top transform rounded-full bg-neutral-300"
          style={{
            transform: `rotate(${hourRotation}deg)`,
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[8px] w-[1px] origin-top transform rounded-full bg-neutral-300"
          style={{
            transform: `rotate(${minuteRotation}deg)`,
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[10px] w-[1px] origin-top transform rounded-full bg-neutral-300"
          style={{
            transform: `rotate(${secondRotation}deg)`,
          }}
        />
        <span className="absolute left-0 top-10 z-10 hidden rotate-180 whitespace-nowrap rounded-md bg-neutral-900/50 px-2 py-1 font-mono text-xs tracking-tighter text-neutral-300 shadow-lg backdrop-blur backdrop-brightness-50 lg:text-sm xl:top-9">
          {time.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
          })}{" "}
          EST
        </span>
      </div>
    </>
  );
}
