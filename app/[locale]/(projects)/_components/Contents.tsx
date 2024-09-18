import Chip from "@/components/chip/Chip";
import Content from "@/components/content/Content";
import { useTranslations } from "next-intl";

interface ContentItem {
  title: string;
  content: string;
  media: {
    type: 'image' | 'code';
    src?: string;
    code?: string;
    language?: string;
    explanation?: string;
  };
}

interface ContentsProps {
  project: string;
  contentItems: ContentItem[];
}

export default function Contents({ project, contentItems }: ContentsProps) {
  const t = useTranslations(project);

  return (
    <div className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'>
      <div className="flex flex-col justify-start items-start gap-6">
        <Chip label={t("title")} />
        <div className='text-2xl sm:text-3xl font-bold'>{t("subTitle")}</div>
      </div>
      {contentItems.map((item, index) => (
        <Content
          key={index}
          project={project}
          title={item.title}
          content={item.content}
          media={item.media}
        />
      ))}
    </div>
  );
}