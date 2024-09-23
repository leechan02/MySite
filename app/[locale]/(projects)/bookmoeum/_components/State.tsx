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
      code: `export default function BookList({ searchResults }: BookListProps) {
  const dispatch = useDispatch();

  return (
   //...
      onClick={() => dispatch(setSelectedBook(result))}
	//...
}`,
      language: "javascript",
      codeEx: "firstCodeEx",
      label: "BookDetail.tsx",
    },
    {
      code: `export default function BookDetail({ params }: BookDetailParams) {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBookAdd, setIsBookAdd] = useState(false);
  const [selectedLibraries, setSelectedLibraries] = useState<LibraryResult[]>(
    []
  );

  const reduxBookData = useSelector(
    (state: RootState) => state.book.selectedBook
  );
  //...
}`,
      language: "javascript",
      codeEx: "secondCodeEx",
      label: "bookDeatil.tsx",
    }
  ];


  return (
    <section
      id='state'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='bookmoeum.state' />
      <Content project='bookmoeum.state' title='first' content='firstContent' />
      <Content project='bookmoeum.state' title='second' content='secondContent' />
      <CodeSection
        project='bookmoeum.state'
        codeItems={codeItems}
      />
    </section>
  );
}
