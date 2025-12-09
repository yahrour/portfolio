import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full space-y-10">
      <h2 className="text-xl font-medium">Let’s Connect</h2>
      <div className="space-y-5">
        <p className="text-secondary text-[0.9rem] leading-7">
          I’m open to full-time roles, internships, and freelance work. For
          opportunities or direct contact, reach out.
        </p>
      </div>
      <div className="flex gap-4 text-[0.9rem]">
        <ul className="flex flex-col gap-4">
          <li>Linkedin</li>
          <li>Email</li>
          <li>Github</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href={"https://linkedin.com/in/youssef-ahrour-2177a6383"}
              className="underline"
              target="_blank"
            >
              /in/youssef-ahrour-2177a6383
            </Link>
          </li>
          <li>
            <Link
              href={"mailto:yo79ss79@gmail.com"}
              className="underline"
              target="_blank"
            >
              yo79ss79@gmail.com
            </Link>
          </li>
          <li>
            <Link
              href={"https://github.com/0x0bito/"}
              className="underline"
              target="_blank"
            >
              0x0bito
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
