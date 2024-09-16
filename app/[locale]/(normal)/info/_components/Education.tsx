import Chip from "@/components/chip/Chip";
import React from "react";
import EduContent from "./EduContent";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("info.education");

  return (
    <div className='flex flex-col justify-center items-start w-[300px] sm:w-[640px] lg:w-[900px] gap-8 sm:gap-16'>
      <Chip label='EDUCATION' />
      <div className='flex flex-col gap-8 sm:gap-16 w-full'>
        <EduContent
          title={t("first")}
          location={t("firstLocation")}
          date={t("firstDate")}
          description={t("firstContent")}
        />
        <EduContent
          title={t("second")}
          location={t("secondLocation")}
          date={t("secondDate")}
          description={t("secondContent")}
        />
      </div>
    </div>
  );
}
