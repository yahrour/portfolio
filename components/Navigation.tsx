"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="border-bcolor w-full border-b pb-4">
      <ul className="text-secondary mx-auto flex max-w-xl items-center justify-between">
        <li className="flex items-center justify-center">
          <ThemeToggle />
        </li>
        <li>
          <Link
            href={"/"}
            className={`transition-all duration-300 hover:text-black dark:hover:text-white ${pathname === "/" && "font-medium text-black dark:text-white"}`}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href={"/projects"}
            className={`transition-all duration-300 hover:text-black dark:hover:text-white ${pathname === "/projects" && "font-medium text-black dark:text-white"}`}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href={"/skills"}
            className={`transition-all duration-300 hover:text-black dark:hover:text-white ${pathname === "/skills" && "font-medium text-black dark:text-white"}`}
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className={`transition-all duration-300 hover:text-black dark:hover:text-white ${pathname === "/contact" && "font-medium text-black dark:text-white"}`}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
