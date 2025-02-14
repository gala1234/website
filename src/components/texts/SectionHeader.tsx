interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return <h1 className="mb-8 text-4xl font-bold">{title}</h1>;
}
