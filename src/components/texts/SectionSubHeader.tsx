interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return <h3 className="mb-4 text-2xl font-semibold">{title}</h3>;
}
