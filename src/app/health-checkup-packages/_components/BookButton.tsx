"use client";

interface BookButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  className?: string;
}

export default function BookButton({
  label,
  onClick,
  variant = "primary",
  icon,
  className = "",
}: BookButtonProps) {
  const base =
    variant === "primary"
      ? "bg-red-600 text-white hover:bg-red-700"
      : "bg-gray-600 text-white hover:bg-gray-700";

  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center gap-1 ${base} ${className}`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}
