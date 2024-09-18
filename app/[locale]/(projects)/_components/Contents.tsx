import Chip from "@/components/chip/Chip";
import Content from "@/components/content/Content";
import { useTranslations } from "next-intl";

interface ContentsProps {
  project: string;
}

export default function Contents({ project }: ContentsProps) {
  const t = useTranslations(project);

  return (
    <div className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'>
      <div className="flex flex-col justify-start items-start gap-6">
        <Chip label={t("title")} />
        <div className='text-2xl sm:text-3xl font-bold'>{t("subTitle")}</div>
      </div>
      <Content
        project={project}
        title='first'
        content='firstContent'
        imageSrc='/image/pong/pongUI.png'
      />
    </div>
  );
}
