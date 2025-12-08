import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="bg-primary text-foreground h-screen transition-all duration-300">
      <h1 className="text-4xl font-bold">Hello</h1>
      <ThemeToggle />
    </div>
  );
}
