import Content from "@/components/content/Content";
import ImageBox from "@/components/content/ImageBox";
import Title from "@/components/content/Title";


export default function Responsive() {
  return (
    <section
      id='responsive design'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='bookmoeum.responsive' />
      <Content project='bookmoeum.responsive' title='first' content='firstContent' />
      <ImageBox src="/image/bookmoeum/bookMobile.png" alt="responsive mobile" />
      <ImageBox src="/image/bookmoeum/bookMobileDetail.png" alt="responsive mobile book detail" />
    </section>
  );
}
