import Chip from "@/components/chip/Chip";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function PersonalProject() {
  const t = useTranslations("info.personalProject");
  return (
    <section className='flex w-[300px] flex-col items-start gap-8 font-mono text-foreground sm:w-[640px] sm:gap-16 lg:w-[900px]'>
      <Chip label='PERSONAL PROJECT' />
      <div className='flex flex-col gap-4'>
        <h2 className='text-lg font-bold'>{t("title")}</h2>
        <p className='text-sm font-bold opacity-50'>{t("date")}</p>
        <p className='text-xs leading-relaxed opacity-80'>{t("description")}</p>
        <ul className='list-disc space-y-2 pl-4 text-xs leading-relaxed opacity-80'>
          {(t.raw("highlights") as string[]).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Link href='/bookmoeum' className='text-sm underline underline-offset-4'>{t("link")}</Link>
      </div>
    </section>
  );
}
