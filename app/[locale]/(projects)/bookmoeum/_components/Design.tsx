import Content from "@/components/content/Content";
import ImageBox from "@/components/content/ImageBox";
import Title from "@/components/content/Title";

export default function Design() {
  return (
    <section
      id='design system'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='bookmoeum.design' />
      <Content
        project='bookmoeum.design'
        title='first'
        content='firstContent'
      />
      <ImageBox src='/image/bookmoeum/bookFound.png' alt='Foundation Design' />
      <ImageBox src='/image/bookmoeum/bookDesign.png' alt='UI Component Design' />
      <ImageBox src='/image/bookmoeum/bookUI.png' alt='Design' />
    </section>
  );
}
