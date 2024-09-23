import Overview from "../_components/Overview";
import Highlights from "../_components/Highlights";
import TableOfContents from "../_components/TableOfContents";
import { unstable_setRequestLocale } from "next-intl/server";
import ProjectTitle from "../_components/ProjectTitle";
import Design from "./_components/Design";
import OpenAPI from "./_components/OpenAPI";
import State from "./_components/State";

export default async function Bookmoeum({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const highlightMediaItems = [
    {
      type: "video" as const,
      src: "/video/bookmoeum.mp4",
    },
    {
      type: "image" as const,
      src: "/image/bookmoeum/bookSearch.png",
    },
    {
      type: "image" as const,
      src: "/image/bookmoeum/bookDetail.png",
    },
    {
      type: "image" as const,
      src: "/image/bookmoeum/bookMobileDetail.png",
    },
  ];

  return (
    <div className='relative flex justify-center w-full'>
      <div className='flex flex-col justify-center items-center gap-24 pb-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px]'>
        <ProjectTitle
          link='https://github.com/leechan02/Bookmoeum'
          image='/image/bookmoeum/bookmoeum.png'
          project='bookmoeum.content'
          brColor='border-color3'
          deploy='https://www.bookmoeum.com/'
        />
        <section id='overview'>
          <Overview project='bookmoeum.overview' />
        </section>
        <section id='highlights'>
          <Highlights
            project='bookmoeum.highlights'
            bgColor='bg-color3'
            mediaItems={highlightMediaItems}
          />
        </section>
        <div className='w-full border border-foreground opacity-10' />
        <Design />
        <div className='w-full border border-foreground opacity-10' />
        <OpenAPI />
        <div className='w-full border border-foreground opacity-10' />
        <State />
      </div>
      <div className='hidden md:block'>
        <TableOfContents
          sections={[
            "Overview",
            "Highlights",
            "Design System",
            "Open APIs",
            "State",
          ]}
        />
      </div>
    </div>
  );
}
