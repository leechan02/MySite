import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

export default function Collaboration() {
  return (
    <section
      id='collaboration'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='transcendence.collaboration' />
      <Content
        project='transcendence.collaboration'
        title='first'
        content='firstContent'
      />
      <Content
        project='transcendence.collaboration'
        title='second'
        content='secondContent'
      />
    </section>
  );
}