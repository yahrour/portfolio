import { skills } from "@/constants";

export default function Skills() {
  return (
    <div className="w-full space-y-10">
      <h2 className="text-xl font-medium">Skills & Tools</h2>
      <ul className="list-inside list-disc space-y-2">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
