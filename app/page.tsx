import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      <div className="w-full space-y-10">
        <h2 className="text-xl font-medium">Get to Know Me</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            I&apos;m Youssef Ahrour, a full stack developer based in Morocco.
          </h3>
          <p className="text-secondary text-[0.9rem] leading-7">
            Currently studying at 1337 coding school and actively looking for
            internship or junior developer opportunities. I’m comfortable
            working remotely and ready to contribute to a team building real
            products.
          </p>
        </div>
      </div>
      <div className="space-x-8 text-sm">
        <Link
          href={"https://linkedin.com/in/youssef-ahrour-2177a6383"}
          className="underline"
        >
          Linkedin
        </Link>
        <Link href={"mailto:yo79ss79@gmail.com"} className="underline">
          Email
        </Link>
        <Link
          href={"https://github.com/0x0bito/"}
          className="underline"
          target="_blan"
        >
          Github
        </Link>
      </div>
    </div>
  );
}
