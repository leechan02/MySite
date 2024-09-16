import Overview from "../_components/Overview";
import Highlights from "../_components/Highlights";
import Content from "../_components/Content";
import TableOfContents from "../_components/TableOfContents";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Webserv({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className='flex flex-col justify-center items-center gap-24 pb-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px] '>
      <Content project="webserv" />
      <section id='overview'>
        <Overview project="webserv"/>
      </section>
      <section id='highlights'>
        <Highlights />
      </section>
      <TableOfContents sections={["Overview", "Highlights"]} />
    </div>
  );
}
