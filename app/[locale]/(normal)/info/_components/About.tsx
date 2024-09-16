import Chip from "@/components/chip/Chip";
import AboutContent from "./AboutContent";

export default function About() {
  const leftSections = [
    { title: "leftFirstTitle", content: "leftFirstContent", image: "" },
    { title: "", content: "", image: "/image/mountain.jpeg" },
    { title: "leftSecondTitle", content: "leftSecondContent", image: "" },
    { title: "", content: "", image: "/image/street.jpeg" },
  ];

  const rightSections = [
    { title: "", content: "", image: "/image/profile.jpg" },
    { title: "rightFirstTitle", content: "rightFirstContent", image: "" },
    { title: "", content: "", image: "/image/himalaya.jpeg" },
    { title: "rightSecondTitle", content: "rightSecondContent", image: "" },
  ];

  return (
    <div className='flex flex-col justify-center items-start sm:w-[640px] lg:w-[900px] gap-4'>
      <Chip label='ABOUT ME' />
      <div className='flex flex-col sm:flex-row justify-center items-start gap-10 lg:gap-[100px]'>
        <AboutContent sections={leftSections} />
        <AboutContent sections={rightSections} />
      </div>
    </div>
  );
}