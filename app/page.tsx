import { CopyToClipboard } from "@/components/CopyToClipboard";
import { socials } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="w-full space-y-10">
        <h2 className="text-xl font-medium">Get to Know Me</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            I&apos;m Youssef Ahrour, a full stack developer based in Morocco.
          </h3>
          <p className="text-secondary text-[0.9rem] leading-7">
            Currently studying at 1337 coding school and actively looking for
            internship or junior developer opportunities. I’m comfortable
            working remotely and ready to contribute to a team building
            meaningful solutions.
          </p>
        </div>
      </div>
      <div className="space-x-8 text-sm">
        <Link href={socials.linkedin} className="underline" target="_blank">
          Linkedin
        </Link>
        <div className="inline-block space-x-2">
          <Link
            href={`mailto:${socials.email}`}
            className="inline-block underline"
          >
            Email
          </Link>
          <CopyToClipboard content={socials.email} />
        </div>
        <Link href={socials.github} className="underline" target="_blank">
          Github
        </Link>
      </div>
    </div>
  );
}
