import { useTranslations } from "next-intl";
import Chip from "../chip/Chip";

interface TitleProps {
  project: string;
}

export default function Title({ project }: TitleProps) {
  const t = useTranslations(project);
  return (
    <div className='flex flex-col justify-start items-start gap-6'>
      <Chip label={t("title")} />
      <div className='text-2xl sm:text-3xl font-bold'>{t("subTitle")}</div>
    </div>
  );
}
