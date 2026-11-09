import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

export default function State() {
  return (
    <section id='state' className='flex w-full flex-col items-start gap-6 font-mono text-foreground sm:gap-16'>
      <Title project='bookmoeum.state' />
      <Content project='bookmoeum.state' title='first' content='firstContent' />
    </section>
  );
}
