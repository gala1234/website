interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return <h2 className="mb-4 text-2xl font-semibold">{title}</h2>;
}
