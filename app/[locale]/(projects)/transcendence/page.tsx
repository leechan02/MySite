import Overview from "../_components/Overview";
import Highlights from "../_components/Highlights";
import Content from "../_components/Content";
import TableOfContents from "../_components/TableOfContents";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Transcendence({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className='flex flex-col justify-center items-center gap-24 pb-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px] '>
      <Content
        link='https://github.com/42Nuts/Transcendence'
        image='/image/pong/pong.png'
        project='transcendence.content'
        brColor='border-color1'
      />
      <section id='overview'>
        <Overview project='transcendence.overview' />
      </section>
      <section id='highlights'>
        <Highlights project='transcendence.highlights' bgColor='bg-color1' />
      </section>
      <TableOfContents sections={["Overview", "Highlights"]} />
    </div>
  );
}
