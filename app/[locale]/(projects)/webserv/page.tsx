import Overview from "./_components/Overview";
import Highlights from "./_components/Highlights";
import Content from "./_components/Content";

export default async function Webserv() {
  return (
    <div className='flex flex-col justify-center items-center gap-24 pb-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px] '>
      <Content />
      <Overview />
      <Highlights />
    </div>
  );
}
