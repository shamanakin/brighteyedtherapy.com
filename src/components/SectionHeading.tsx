interface SectionHeadingProps {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}

const sizeMap = {
  h1: "text-h1 md:text-[2.5rem]",
  h2: "text-h2 md:text-[2rem]",
  h3: "text-h3 md:text-[1.5rem]",
};

export default function SectionHeading({
  as: Tag = "h2",
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <Tag className={`font-serif font-semibold text-text-primary ${sizeMap[Tag]} ${className}`}>
      {children}
    </Tag>
  );
}
