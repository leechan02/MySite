import Chip from "@/components/chip/Chip";
import { useTranslations } from "next-intl";
import React from "react";

export default function Etc() {
  const t = useTranslations("info.etc");

  return (
    <div className='flex flex-col justify-center items-start w-[300px] sm:w-[640px] lg:w-[900px] gap-8 sm:gap-16'>
      <Chip label='ETC' />
      <div className='w-full flex flex-col justify-between items-start gap-4 sm:gap-8'>
        <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-4 font-mono text-foreground'>
          <div className='text-sm font-bold'>{t("first")}</div>
          <div className='text-xs font-bold opacity-50'>2024.6.7</div>
        </div>
        <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-4 font-mono text-foreground'>
          <div className='text-sm font-bold'>{t("second")}</div>
          <div className='text-xs font-bold opacity-50'>2024.7.3</div>
        </div>
      </div>
    </div>
  );
}
