import Overview from "../_components/Overview";
import Highlights from "../_components/Highlights";
import TableOfContents from "../_components/TableOfContents";
import { unstable_setRequestLocale } from "next-intl/server";
import ProjectTitle from "../_components/ProjectTitle";

export default async function MySite({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const highlightMediaItems = [
    {
      type: "video" as const,
      src: "/video/mysite.mp4",
    },
    {
      type: "image" as const,
      src: "/image/mysite/mysite.png",
    },
    {
      type: "image" as const,
      src: "/image/mysite/myinfo.png",
    },
    {
      type: "image" as const,
      src: "/image/mysite/myko.png",
    },
    {
      type: "image" as const,
      src: "/image/mysite/mysiteMobile.png",
    },
  ];

  return (
    <div className='relative flex justify-center w-full'>
      <div className='flex flex-col justify-center items-center gap-24 pb-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px]'>
        <ProjectTitle
          link='https://github.com/leechan02/MySite'
          image='/image/mysite/mysite.png'
          project='mysite.content'
          brColor='border-color4'
        />
        <section id='overview'>
          <Overview project='mysite.overview' />
        </section>
        <section id='highlights'>
          <Highlights
            project='mysite.highlights'
            bgColor='bg-color4'
            mediaItems={highlightMediaItems}
          />
        </section>
      </div>
      <div className='hidden md:block'>
        <TableOfContents sections={["Overview", "Highlights"]} />
      </div>
    </div>
  );
}
