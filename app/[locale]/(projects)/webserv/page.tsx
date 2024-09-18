import Overview from "../_components/Overview";
import Highlights from "../_components/Highlights";
import TableOfContents from "../_components/TableOfContents";
import { unstable_setRequestLocale } from "next-intl/server";
import Title from "../_components/Title";

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
      <Title
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
      <TableOfContents sections={["Overview", "Highlights"]} />
    </div>
  );
}
