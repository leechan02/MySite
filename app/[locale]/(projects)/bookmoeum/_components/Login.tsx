import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

export default function Login() {
  return (
    <section id='login' className='flex w-full flex-col items-start gap-6 font-mono text-foreground sm:gap-16'>
      <Title project='bookmoeum.login' />
      <Content project='bookmoeum.login' title='first' content='firstContent' />
    </section>
  );
}
