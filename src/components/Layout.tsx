import { Outlet } from "react-router";
import Navigation from "./Navigation";

export default function Layout() {
  return (
    <>
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
