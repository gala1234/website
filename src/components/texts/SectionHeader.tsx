interface SectionHeaderProps {
  title: string;
  color?: string;
}

export default function SectionHeader({ title, color }: SectionHeaderProps) {
  return <h2 className={`${color} mb-8 text-4xl font-bold`}>{title}</h2>;
}
