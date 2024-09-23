import Content from "@/components/content/Content";
import Title from "@/components/content/Title";
import VideoBox from "@/components/content/VideoBox";


export default function Responsive() {
  return (
    <section
      id='responsive design'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='bookmoeum.responsive' />
      <Content project='bookmoeum.responsive' title='first' content='firstContent' />
      <VideoBox src="/video/bookmoeum_animation.mp4" />
    </section>
  );
}
