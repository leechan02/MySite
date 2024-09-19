import Content from "@/components/content/Content";
import ImageBox from "@/components/content/ImageBox";
import Title from "@/components/content/Title";

export default function Design() {
  return (
    <section
      id='design'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='transcendence.design' />
      <Content
        project='transcendence.design'
        title='first'
        content='firstContent'
      />
      <ImageBox src='/image/pong/pongUI.png' alt='UI Component Design' />
    </section>
  );
}
