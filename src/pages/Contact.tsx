import { Link } from "react-router";
import { CopyToClipboard } from "../components/CopyToClipboard";
import { socials } from "../constants";

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
      <div className="text-sm">
        <ul className="space-y-4">
          {socials.map((social) => {
            return (
              <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="font-medium text-secondary">
                  {social.name}
                </span>
                <div className="flex items-center gap-2 mt-1 sm:mt-0">
                  <Link
                    to={social.href}
                    className="underline wrap-break-word mt-1 sm:mt-0"
                    target="_blank"
                  >
                    {social.label}
                  </Link>
                  {social.name === "Email" ? (
                    <span className="inline-block">
                      <CopyToClipboard content={social.href} />
                    </span>
                  ) : (
                    <span className="inline-block w-3.5"></span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
