import { useTranslations } from "next-intl";

interface ContentProps {
  project: string;
  title: string;
  content: string;
}

export default function Content({ project, title, content }: ContentProps) {
  const t = useTranslations(project);

  return (
    <div className='flex flex-col sm:flex-row justify-between items-start font-mono text-foreground w-full gap-8'>
      <div className='w-full sm:w-1/2 text-lg sm:text-xl font-bold'>
        {t(title)}
      </div>
      <div className='w-full sm:w-1/2 flex flex-col text-xs opacity-50 gap-4'>
        {t.raw(content).map((item: string, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
