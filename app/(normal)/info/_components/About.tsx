import Chip from "@/components/chip/Chip";
import React from "react";
import AboutLeftContent from "./AboutLeftContent";
import AboutRightContent from "./AboutRightContent";

export default function About() {
  return (
    <div className='flex flex-col justify-center items-start max-w-[900px] gap-4'>
      <Chip label='ABOUT ME' />
      <div className='flex justify-center items-center gap-16'>
        <AboutLeftContent />
        <AboutRightContent />
      </div>
    </div>
  );
}
