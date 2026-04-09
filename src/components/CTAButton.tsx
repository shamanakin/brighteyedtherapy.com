import Link from "next/link";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

const baseClasses =
  "inline-block font-sans font-medium text-small tracking-wide uppercase px-8 py-3.5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg";

const variantClasses = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  outline:
    "border border-accent text-accent hover:bg-accent hover:text-white",
};

export default function CTAButton({
  href,
  label,
  variant = "primary",
  external = false,
}: CTAButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
