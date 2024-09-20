import Content from "@/components/content/Content";
import Title from "@/components/content/Title";
import VideoBox from "@/components/content/VideoBox";

export default function Test() {
  return (
    <section
      id='test'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='webserv.test' />
      <Content
        project='webserv.test'
        title='first'
        content='firstContent'
      />
      <VideoBox src='/video/webserv_test.mp4' />
    </section>
  );
}
