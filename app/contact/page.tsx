import { CopyToClipboard } from "@/components/CopyToClipboard";
import { socials } from "@/constants";
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
            <Link href={socials.linkedin} className="underline" target="_blank">
              /in/youssef-ahrour
            </Link>
          </li>
          <li className="space-x-2">
            <Link href={`mailto:${socials.email}`} className="underline">
              {socials.email}
            </Link>
            <CopyToClipboard content={socials.email} />
          </li>
          <li>
            <Link href={socials.github} className="underline" target="_blank">
              yahrour
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
