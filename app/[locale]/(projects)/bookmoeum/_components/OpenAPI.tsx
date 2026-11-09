import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

export default function OpenAPI() {
  return (
    <section id='open apis' className='flex w-full flex-col items-start gap-6 font-mono text-foreground sm:gap-16'>
      <Title project='bookmoeum.api' />
      <Content project='bookmoeum.api' title='first' content='firstContent' />
    </section>
  );
}
