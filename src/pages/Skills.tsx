import { skills } from "../constants";

export default function Skills() {
  return (
    <div className="w-full space-y-10">
      <h2 className="text-xl font-medium">Skills & Tools</h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-muted-foreground mb-2 text-sm">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="border-border rounded-sm border px-3 py-1 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
