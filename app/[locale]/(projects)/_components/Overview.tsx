import { useTranslations } from "next-intl";

interface OverviewProps {
  project: string;
}

export default function Overview({ project }: OverviewProps) {
  const t = useTranslations(project);

  return (
    <div className='flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-16'>
      <div className='flex flex-col justify-start items-start gap-8 w-full sm:w-1/2'>
        <div className='flex flex-col gap-2 w-full'>
          <div className='text-sm font-bold'>{t("myRoleTitle")}</div>
          <div className='text-xs opacity-50'>{t("myRole")}</div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='text-sm font-bold'>{t("teamTitle")}</div>
          <div className='text-xs opacity-50 flex flex-col gap-2'>
            {t.raw("team").map((member: string, index: number) => (
              <div key={index}>{member}</div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='text-sm font-bold'>{t("timelineTitle")}</div>
          <div className='text-xs opacity-50'>{t("timeline")}</div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='text-sm font-bold'>{t("techTitle")}</div>
          <div className='text-xs opacity-50'>{t("techKeywords")}</div>
        </div>
      </div>
      <div className='flex flex-col gap-4 justify-start items-start w-full sm:w-1/2'>
        <div className='text-sm font-bold'>{t("overviewTitle")}</div>
        <div className='text-xs opacity-50 flex flex-col gap-4'>
          {t.raw("overview").map((member: string, index: number) => (
            <div key={index}>{member}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
