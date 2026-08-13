import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="w-full border-bcolor border-b pb-4">
      <ul className="text-secondary mx-auto flex max-w-xl items-center justify-between">
        <li>
          <ThemeToggle />
        </li>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-secondary hover:text-black dark:hover:text-white"
              }`
            }
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-secondary hover:text-black dark:hover:text-white"
              }`
            }
          >
            projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/skills"}
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-secondary hover:text-black dark:hover:text-white"
              }`
            }
          >
            skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-secondary hover:text-black dark:hover:text-white"
              }`
            }
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
