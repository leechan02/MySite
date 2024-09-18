import Overview from "../_components/Overview";
import Highlights from "../_components/Highlights";
import TableOfContents from "../_components/TableOfContents";
import { unstable_setRequestLocale } from "next-intl/server";
import Title from "../_components/Title";
import Contents from "../_components/Contents";

export default async function Transcendence({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const highlightMediaItems = [
    {
      type: "video" as const,
      src: "/video/pong.mp4",
    },
    {
      type: "image" as const,
      src: "/image/pong/pong.png",
    },
    {
      type: "image" as const,
      src: "/image/pong/pongHome.png",
    },
    {
      type: "image" as const,
      src: "/image/pong/pongSetting.png",
    },
    {
      type: "image" as const,
      src: "/image/pong/pongDark.png",
    },
    {
      type: "image" as const,
      src: "/image/pong/pongDesign.png",
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center gap-24 pb-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px] '>
      <Title
        link='https://github.com/42Nuts/Transcendence'
        image='/image/pong/pong.png'
        project='transcendence.content'
        brColor='border-color1'
      />
      <section id='overview'>
        <Overview project='transcendence.overview' />
      </section>
      <section id='highlights'>
        <Highlights
          project='transcendence.highlights'
          bgColor='bg-color1'
          mediaItems={highlightMediaItems}
        />
      </section>
      <div className='w-full border border-foreground opacity-10' />
      <section id="design" className="w-full">
        <Contents project='transcendence.design' />
      </section>
      <TableOfContents sections={["Overview", "Highlights", "Design"]} />
    </div>
  );
}
