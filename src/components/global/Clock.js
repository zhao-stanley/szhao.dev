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
      <div className="z-10 [&>span]:hover:block w-6 h-6 rounded-full border border-neutral-500 relative rotate-180 cursor-help">
        <div
          className="bg-neutral-300 h-[6px] w-[1px] rounded-full absolute top-1/2 left-1/2 transform origin-top"
          style={{
            transform: `rotate(${hourRotation}deg)`,
          }}
        />
        <div
          className="bg-neutral-300 h-[8px] w-[1px] rounded-full absolute top-1/2 left-1/2 transform origin-top"
          style={{
            transform: `rotate(${minuteRotation}deg)`,
          }}
        />
        <div
          className="bg-neutral-300 h-[10px] w-[1px] rounded-full absolute top-1/2 left-1/2 transform origin-top"
          style={{
            transform: `rotate(${secondRotation}deg)`,
          }}
        />
        <span className="font-mono px-2 py-1 bg-neutral-900/50 text-neutral-300 shadow-lg rounded-md tracking-tighter hidden absolute rotate-180 top-10 xl:top-9 text-xs lg:text-sm whitespace-nowrap z-10">
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
