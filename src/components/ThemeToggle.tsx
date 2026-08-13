import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const saved = localStorage.getItem("theme");

  if (saved === "dark" || saved === "light") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun size={20} className="fadeIn" />
      ) : (
        <Moon size={20} className="fadeIn" />
      )}
    </button>
  );
}
