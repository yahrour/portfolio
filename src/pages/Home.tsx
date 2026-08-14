import { Link } from "react-router";
import { socials } from "../constants";
import { CopyToClipboard } from "../components/CopyToClipboard";

export default function Home() {
  return (
    <div className="w-full space-y-10">
      <div className="w-full space-y-10">
        <h2 className="text-xl font-medium">Get to Know Me</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            I&apos;m Youssef Ahrour, Backend developer.
          </h3>
          <p className="text-secondary text-[0.9rem] leading-7">
            Currently studying at 1337 (a peer-to-peer, project-based
            engineering school part of the 42 Network), where I focus on systems
            programming and backend development. I&apos;m actively looking for
            internship or junior developer opportunities — comfortable working
            remotely and ready to contribute to a team building meaningful
            solutions.
          </p>
          <p className="text-secondary text-[0.9rem] leading-7">
            Currently working on a project that requires me to dive into{" "}
            <span className="text-foreground font-medium">NestJS</span>,
            strengthening my backend development skills and understanding of its
            ecosystem.
          </p>
        </div>
      </div>

      <div className="space-x-8 text-sm">
        {socials.map((social) => {
          return (
            <div className="inline">
              <Link
                to={
                  social.name === "Email"
                    ? `mailto:${social.href}`
                    : social.href
                }
                className="underline"
                target="_blank"
              >
                {social.name}
              </Link>
              {social.name === "Email" && (
                <>
                  {" "}
                  <CopyToClipboard content={social.href} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
