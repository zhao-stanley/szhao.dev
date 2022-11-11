import contests from "../../data/contests";

export default function Contests() {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full tracking-tight">
        {contests.map((e, key) => (
          <li
            className="shadow-lg w-full py-6 pl-4 pr-0 rounded-xl flex flex-row justify-between items-center"
            key={key}
            style={{
              border: `3px solid #${
                e.genre.toLowerCase() == "ctf" ? "d91c1c" : "4287f5"
              }80`,
              boxShadow: `0 5px 30px -1px #${
                e.genre.toLowerCase() == "ctf" ? "d91c1c" : "4287f5"
              }a0`,
            }}
          >
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold tracking-tight">
                  {e.title}
                </h2>
                <h3 className="text-sm font-medium">{e.place}</h3>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-base font-extrabold text-center rotate-90">
                {e.genre.toUpperCase()}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
