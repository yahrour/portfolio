import { Outlet } from "react-router";
import Navigation from "./Navigation";

export default function Layout() {
  return (
    <>
      <div className="absolute top-0 right-0 block h-30 w-30 max-md:hidden">
        <img
          src="/spiderweb.svg"
          alt="spider"
          width={120}
          height={120}
          className="fixed rotate-[1.2deg] select-none"
          draggable={false}
        />
        <div className="spiderPivot">
          <div className="spiderLine select-none"></div>
          <img
            src="/spider.svg"
            alt="spider"
            width={32}
            height={32}
            className="spider select-none"
            draggable={false}
          />
        </div>
      </div>

      <header className="mx-auto w-full max-w-3xl space-y-10 p-16 pb-0 max-md:p-8 max-sm:p-4">
        <h1 className="text-center text-4xl font-bold tracking-tighter">
          Youssef Ahrour
        </h1>
        <Navigation />
      </header>

      <main className="mx-auto flex h-fit w-full max-w-3xl flex-col items-center gap-16 p-16 max-md:p-10 max-sm:p-6">
        <Outlet />
      </main>
    </>
  );
}
