import Content from "@/components/content/Content";
import Title from "@/components/content/Title";
import VideoBox from "@/components/content/VideoBox";


export default function Animation() {
  return (
    <section
      id='animation'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='bookmoeum.animation' />
      <Content project='bookmoeum.animation' title='first' content='firstContent' />
      <Content project='bookmoeum.animation' title='second' content='secondContent' />
      <VideoBox src="/video/bookmoeum_animation.mp4" />
    </section>
  );
}
