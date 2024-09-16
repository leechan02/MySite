import Overview from "../_components/Overview";
import Highlights from "../_components/Highlights";
import Content from "../_components/Content";
import TableOfContents from "../_components/TableOfContents";

export default async function Webserv() {
  return (
    <div className='flex flex-col justify-center items-center gap-24 pb-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px] '>
      <Content />
      <section id="overview">
        <Overview />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
      <TableOfContents />
    </div>
  );
}
