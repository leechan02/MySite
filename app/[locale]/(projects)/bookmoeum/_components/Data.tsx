import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

export default function Data() {
  return (
    <section id='database' className='flex w-full flex-col items-start gap-6 font-mono text-foreground sm:gap-16'>
      <Title project='bookmoeum.data' />
      <Content project='bookmoeum.data' title='first' content='firstContent' />
    </section>
  );
}
