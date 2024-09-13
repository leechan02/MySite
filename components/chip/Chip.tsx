interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return (
    <div className='flex justify-center items-center gap-1'>
      <div className='w-2 h-2 rounded-full bg-secondary' />
      <div className="text-xs text-foreground font-light">{label}</div>
    </div>
  );
}
