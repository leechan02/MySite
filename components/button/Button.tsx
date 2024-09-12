interface ButtonProps {
  label: string;
  icon?: React.ElementType | string;
}

export default function Button({
  label,
  icon: Icon,
}: ButtonProps) {
  return (
    <div className="flex justify-center items-center gap-2 rounded-full bg-primary/5 py-2 pl-4 pr-6">
      {Icon && <Icon className="w-4 h-4 text-primary" />}
      <div className="font-semibold font-mono text-primary font-xs">{label}</div>
    </div>
  );
}