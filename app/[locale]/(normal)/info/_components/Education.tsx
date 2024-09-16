import Chip from "@/components/chip/Chip";
import React from "react";
import EduContent from "./EduContent";

export default function Education() {
  return (
    <div className='flex flex-col justify-center items-start w-[300px] sm:w-[640px] lg:w-[900px] gap-8 sm:gap-16'>
      <Chip label='EDUCATION' />
      <div className='flex flex-col gap-8 sm:gap-16 w-full'>
        <EduContent
          title='42 Seoul'
          location='Seoul, Korea'
          date='July 2022 - July 2024'
          description='Experience in various toy projects'
        />
        <EduContent
          title='Korea National Open University'
          location='Seoul, Korea'
          date='Sept 2023 - Present'
          description='Experience in various toy projects'
        />
      </div>
    </div>
  );
}
