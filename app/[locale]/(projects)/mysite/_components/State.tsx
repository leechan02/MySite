import CodeSection from "@/components/content/CodeSection";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function State() {
  const codeItems: CodeItem[] = [
    {
      code: `export default function DarkModeSwitch() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="w-14 h-8 p-1 bg-white/5 rounded-full shadow border-2 border-white/30 backdrop-blur-[15px] relative flex items-center"
      transition={{ duration: 0.3 }}
    >
	    //...
      </motion.div>
    </motion.button>
  );
}`,
      language: "javascript",
      codeEx: "firstCodeEx",
      label: "DarkModeSwitch.tsx",
    }
  ];


  return (
    <section
      id='state'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='mysite.state' />
      <Content project='mysite.state' title='first' content='firstContent' />
      <CodeSection
        project='mysite.state'
        codeItems={codeItems}
      />
    </section>
  );
}
