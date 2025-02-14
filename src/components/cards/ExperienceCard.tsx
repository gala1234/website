interface ExperienceCardProps {
  title: string;
  period: string;
  description: string;
}

export default function ExperienceCard({
  title,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
