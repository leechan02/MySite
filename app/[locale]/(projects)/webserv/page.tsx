import Overview from "../_components/Overview";
import Highlights from "../_components/Highlights";
import TableOfContents from "../_components/TableOfContents";
import { unstable_setRequestLocale } from "next-intl/server";
import ProjectTitle from "../_components/ProjectTitle";
import Problem from "./_components/Problem";
import Architecture from "./_components/Architecture";
import Config from "./_components/Config";
import Http from "./_components/Http";

export default async function Webserv({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const highlightMediaItems = [
    {
      type: "video" as const,
      src: "/video/webserv_page.mp4",
      alt: "Webserv page example",
    },
    {
      type: "video" as const,
      src: "/video/webserv_console.mp4",
      alt: "Webserv consolcommonClassese example",
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center gap-24 pb-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px] '>
      <ProjectTitle
        link='https://github.com/Aprilistic/webserv'
        image='/image/webserv/webserv.png'
        project='webserv.content'
        brColor='border-color2'
      />
      <section id='overview'>
        <Overview project='webserv.overview' />
      </section>
      <section id='highlights'>
        <Highlights
          project='webserv.highlights'
          bgColor='bg-color2'
          mediaItems={highlightMediaItems}
        />
      </section>
      <div className='w-full border border-foreground opacity-10' />
      <Problem />
      <div className='w-full border border-foreground opacity-10' />
      <Architecture />
      <div className='w-full border border-foreground opacity-10' />
      <Config />
      <div className='w-full border border-foreground opacity-10' />
      <Http />
      <TableOfContents sections={["Overview", "Highlights", "Problem", "Architecture", "Config", "Request Response"]} />
    </div>
  );
}
