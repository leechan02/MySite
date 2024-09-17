import ProjectBox from "@/components/box/ProjectBox";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('work');

  return (
    <div className='flex-col justify-center items-center inline-flex gap-16'>
      <div className='flex flex-col justify-center items-center gap-2 px-4 text-center'>
        <div className='font-mono text-foreground text-3xl font-extrabold'>
          {t('mainTitle')}
        </div>
        <div className='font-mono text-foreground opacity-30 text-sm font-bold'>
          {t('subTitle')}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-12 xl:gap-16'>
        <ProjectBox
          title={t('bookmoeum.title')}
          description={t('bookmoeum.description')}
          date={t('bookmoeum.date')}
          video='/video/bookmoeum.mp4'
          bgColor='bg-color3'
          link='/bookmoeum'
          size="big"
        />
        <ProjectBox
          title={t('mysite.title')}
          description={t('mysite.description')}
          date={t('mysite.date')}
          video='/video/mysite.mp4'
          bgColor='bg-color4'
          link='/mysite'
          size="small"
        />
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-16'>
        <ProjectBox
          title={t('webserv.title')}
          description={t('webserv.description')}
          date={t('webserv.date')}
          video='/video/webserv_console.mp4'
          bgColor='bg-color2'
          link='/webserv'
          size="small"
        />
        <ProjectBox
          title={t('transcendence.title')}
          description={t('transcendence.description')}
          date={t('transcendence.date')}
          video='/video/pong.mp4'
          bgColor='bg-color1'
          link='/transcendence'
          size="big"
        />
      </div>
    </div>
  );
}
