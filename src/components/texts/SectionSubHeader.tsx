interface SectionHeaderProps {
  title: string;
  color?: string;
}

export default function SectionHeader({ title, color }: SectionHeaderProps) {
  return <h3 className={`${color} mb-4 text-2xl font-semibold`}>{title}</h3>;
}
