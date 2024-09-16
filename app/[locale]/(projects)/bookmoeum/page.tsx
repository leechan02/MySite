import Overview from "../_components/Overview";
import Highlights from "../_components/Highlights";
import Content from "../_components/Content";
import TableOfContents from "../_components/TableOfContents";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Bookmoeum({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className='flex flex-col justify-center items-center gap-24 pb-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px] '>
      <Content
        link='https://github.com/leechan02/Bookmoeum'
        image='/image/bookmoeum.png'
        project='bookmoeum.content'
        brColor='border-color4'
        deploy="https://www.bookmoeum.com/"
      />
      <section id='overview'>
        <Overview project='bookmoeum.overview' />
      </section>
      <section id='highlights'>
        <Highlights project='bookmoeum.highlights' bgColor='bg-color4' />
      </section>
      <TableOfContents sections={["Overview", "Highlights"]} />
    </div>
  );
}
