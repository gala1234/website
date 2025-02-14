interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="rounded-lg bg-black/[.05] p-4 dark:bg-white/[.06]">
      <h3 className="mb-2 font-semibold">{title}</h3>
      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
