import Content from "@/components/content/Content";
import ImageBox from "@/components/content/ImageBox";
import Title from "@/components/content/Title";

export default function Problem() {
  return (
    <section
      id='problem'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='webserv.problem' />
      <Content project='webserv.problem' title='first' content='firstContent' />
      <div className='flex flex-col sm:flex-row justify-center items-center gap-8 w-full'>
        <div className='w-full sm:w-1/2'>
          <ImageBox
            src='/image/webserv/webservMaster.jpg'
            alt='webserv master process flow'
          />
        </div>
        <div className='w-full sm:w-1/2'>
          <ImageBox
            src='/image/webserv/webservWorker.jpg'
            alt='webserv worker process flow'
          />
        </div>
      </div>
    </section>
  );
}
