import Content from "@/components/content/Content";
import ImageBox from "@/components/content/ImageBox";
import Title from "@/components/content/Title";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Collaboration() {
  const t = useTranslations("transcendence.collaboration");
  const gitflowItems = t.raw("gitflow");

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
      <div className='bg-foreground/5 shadow border-2 border-foreground/10 rounded-2xl sm:rounded-[40px] backdrop-blur-[15px] w-full overflow-hidden flex flex-wrap justify-center items-center p-8 gap-2'>
        {gitflowItems.map((item: string, index: number) => (
          <Fragment key={index}>
            <div className='flex justify-center items-center gap-2 rounded-full border-2 border-foreground/5 backdrop-blur-md py-2 px-4'>
              <div className='font-semibold font-mono text-foreground text-xs'>
                {item}
              </div>
            </div>
            {index < gitflowItems.length - 1 && (
              <FiArrowRight className='text-foreground text-xs' />
            )}
          </Fragment>
        ))}
      </div>
      <Content
        project='transcendence.collaboration'
        title='second'
        content='secondContent'
      />
      <ImageBox src='/image/pong/pongNotion.png' alt='Notion Collaboration' />
    </section>
  );
}