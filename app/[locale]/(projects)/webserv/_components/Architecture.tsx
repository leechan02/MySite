import Content from "@/components/content/Content";
import ImageBox from "@/components/content/ImageBox";
import Title from "@/components/content/Title";

export default function Architecture() {
  return (
    <section
      id='architecture'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='webserv.architecture' />
      <Content
        project='webserv.architecture'
        title='first'
        content='firstContent'
      />
      <ImageBox
        src='/image/webserv/webservFlow.png'
        alt='webserv flow'
      />
    </section>
  );
}
