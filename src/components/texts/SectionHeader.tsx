interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return <h2 className="mb-8 text-4xl font-bold">{title}</h2>;
}
