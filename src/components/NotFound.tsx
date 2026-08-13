import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="w-fit space-y-4 mx-auto flex flex-col h-screen items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>
      <Link to="/" className="mt-6 text-sm underline hover:text-gray-500">
        Go back home
      </Link>
    </div>
  );
}
