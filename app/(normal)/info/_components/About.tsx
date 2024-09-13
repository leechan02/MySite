import Chip from "@/components/chip/Chip";
import React from "react";
import AboutLeftContent from "./AboutLeftContent";

export default function About() {
  return (
    <div className='flex flex-col justify-center items-start max-w-[900px] gap-4'>
      <Chip label='ABOUT ME' />
      <AboutLeftContent />
    </div>
  );
}
