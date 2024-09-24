import CodeSection from "@/components/content/CodeSection";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";
import VideoBox from "@/components/content/VideoBox";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function Animation() {
  const codeItems: CodeItem[] = [
    {
      code: `<motion.div
	initial={{ opacity: 1, scale: 0.9 }}
	animate={{ opacity: 1, scale: 1 }}
	exit={{ opacity: 0, scale: 0.9 }}
	transition={{ duration: 0.3 }}
	className='fixed inset-0 z-50 flex items-center justify-center p-4'
	onClick={onClose}
>
	//...
</motion.div>`,
      language: "javascript",
      codeEx: "firstCodeEx",
      label: "ProjectBox.tsx",
    },
  ];


  return (
    <section
      id='animation'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='mysite.animation' />
      <Content project='mysite.animation' title='first' content='firstContent' />
      <CodeSection
        project='mysite.animation'
        codeItems={codeItems}
      />
      <VideoBox src="/video/mysite_animation.mp4" />
    </section>
  );
}
