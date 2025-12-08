import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="border-bcolor w-full border-b pb-4">
      <ul className="text-secondary mx-auto flex max-w-xl items-center justify-between">
        <li className="flex items-center justify-center">
          <ThemeToggle />
        </li>
        <li>
          <Link
            href={"#"}
            className="transition-all duration-300 hover:text-black dark:hover:text-white"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="transition-all duration-300 hover:text-black dark:hover:text-white"
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="transition-all duration-300 hover:text-black dark:hover:text-white"
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="transition-all duration-300 hover:text-black dark:hover:text-white"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
