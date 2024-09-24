import CodeSection from "@/components/content/CodeSection";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function Design() {
  const codeItems: CodeItem[] = [
    {
      code: `  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // 640px is the 'sm' breakpoint in Tailwind
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);`,
      language: "javascript",
      codeEx: "firstCodeEx",
      label: "TableOfContents.tsx",
    },
    {
      code: `      <Link href={link}>
        <motion.div
          className='absolute inset-0 bg-primary bg-opacity-50 flex flex-col justify-center items-start text-white font-mono z-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: (isSmallScreen && inView) || (!isSmallScreen && false) ? 1 : 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className='flex flex-col justify-between items-start p-6 lg:p-8 h-full'>
            <div className='flex flex-col justify-center items-start gap-4'>
              <MacButtons />
              <h2 className='text-3xl lg:text-4xl font-bold'>{title}</h2>
            </div>
            <div className='flex flex-col justify-center items-start gap-1'>
              <p className='text-lg lg:text-xl font-bold'>{description}</p>
              <p className='text-xs text-white/70'>{date}</p>
            </div>
          </div>
        </motion.div>
      </Link>`,
      language: "javascript",
      codeEx: "secondCodeEx",
      label: "ProjectBox.tsx",
    }
  ];


  return (
    <section
      id='design'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='mysite.design' />
      <Content project='mysite.design' title='first' content='firstContent' />
      <Content project='mysite.design' title='second' content='secondContent' />
      <CodeSection
        project='mysite.design'
        codeItems={codeItems}
      />
    </section>
  );
}
