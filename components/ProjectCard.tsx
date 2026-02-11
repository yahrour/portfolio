import { ArrowRight } from "lucide-react";
import Link from "next/link";

type linkObject =
  | {
      title: string;
      href: string;
    }
  | undefined;

type propsType = {
  title: string;
  description: string;
  techstack: string[];
  links: linkObject[];
};

export default function ProjectCard({
  title,
  description,
  techstack,
  links,
}: propsType) {
  return (
    <div className="border-bcolor space-y-4 border-l-2 pl-4">
      <h3 className="text-[0.95rem] font-medium">{title}</h3>
      <p className="text-secondary text-[0.9rem] leading-7">{description}</p>
      <ul className="flex w-fit flex-wrap items-center gap-2 text-[0.8rem] font-medium">
        {techstack.map((element, idx) => (
          <li key={element} className="flex gap-2">
            <span>{element}</span>
            {techstack.length - 1 != idx && "·"}
          </li>
        ))}
      </ul>
      <ul className="flex w-fit items-center gap-4 text-sm">
        {links?.map((element) => (
          <li key={element?.href}>
            <Link
              href={element?.href || ""}
              className="group flex items-center gap-1 underline"
              target="_blank"
            >
              {element?.title}
              <ArrowRight
                size={12}
                className="transition-all duration-300 group-hover:translate-x-1"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
