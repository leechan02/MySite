import Chip from "@/components/chip/Chip";
import React from "react";
import AboutLeftContent from "./AboutLeftContent";
import AboutRightContent from "./AboutRightContent";

export default function About() {
  return (
    <div className='flex flex-col justify-center items-start sm:w-[640px] lg:w-[900px] gap-4'>
      <Chip label='ABOUT ME' />
      <div className='flex flex-col sm:flex-row justify-center items-center gap-10 lg:gap-[100px]'>
        <AboutLeftContent />
        <AboutRightContent />
      </div>
    </div>
  );
}
