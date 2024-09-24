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

export default function TableSection() {
  const codeItems: CodeItem[] = [
    {
      code: `  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
	    //...
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);`,
      language: "javascript",
      codeEx: "firstCodeEx",
      label: "TableOfContents.tsx",
    },
    {
      code: `  const handleClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };`,
      language: "javascript",
      codeEx: "secondCodeEx",
      label: "scroll",
    }
  ];


  return (
    <section
      id='table of contents'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='mysite.table' />
      <Content project='mysite.table' title='first' content='firstContent' />
      <CodeSection
        project='mysite.table'
        codeItems={codeItems}
      />
      <VideoBox src="/video/mysite_contents.mp4" />
    </section>
  );
}
