import CodeSection from "@/components/content/CodeSection";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function OpenAPI() {
  const codeItems: CodeItem[] = [
    {
      code: `  const fetchSearchResults = async ({
    pageParam = 1,
  }: {
    pageParam?: number;
  }) => {
    const response = await fetch(
      \`/api/search/naver?query=\${encodeURIComponent(query)}&start=\${pageParam}\`
    );
    if (!response.ok) {
      throw new Error("API 요청 실패");
    }
    return response.json() as Promise<SearchResponse>;
  };`,
      language: "javascript",
      codeEx: "firstCodeEx",
      label: "SearchPage.tsx",
    },
    {
      code: `  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: fetchSearchResults,
    getNextPageParam: (lastPage) => {
      const nextStart = lastPage.start + 100;
      return nextStart <= lastPage.total ? nextStart : undefined;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 30, // 10 minutes
  });`,
      language: "javascript",
      codeEx: "secondCodeEx",
      label: "InfiniteQuery.tsx",
    },
    {
      code: `  const bookstoreQueries = useQueries({
    queries: ['kyobo', 'yes24', 'aladdin'].map(store => ({
      queryKey: ['bookstore', store, bookData?.isbn],
      queryFn: () => fetchBookstoreData(store, bookData?.isbn),
      enabled: !!bookData?.isbn,
      staleTime: 1000 * 60 * 30, // 10 minutes
    })),
  });

  const ridiQuery = useQuery({
    queryKey: ['bookstore', 'ridi', bookData?.processedTitle],
    queryFn: () => fetchRidiData(bookData?.processedTitle || ''),
    enabled: !!bookData?.processedTitle,
      staleTime: 1000 * 60 * 30, // 10 minutes
  });

  const libraryQueries = useQueries({
    queries: selectedLibraries.map(library => ({
      queryKey: ['library', library.libraryCode, bookData?.isbn],
      queryFn: () => fetchLibraryData(bookData?.isbn, library.libraryCode),
      enabled: !!bookData?.isbn,
      staleTime: 1000 * 60 * 30, // 10 minutes
    })),
  });`,
      language: "javascript",
      codeEx: "thirdCodeEx",
      label: "Bookfind.tsx",
    }
  ];


  return (
    <section
      id='open apis'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='bookmoeum.api' />
      <Content project='bookmoeum.api' title='first' content='firstContent' />
      <Content project='bookmoeum.api' title='second' content='secondContent' />
      <Content project='bookmoeum.api' title='third' content='thirdContent' />
      <CodeSection
        project='bookmoeum.api'
        codeItems={codeItems}
      />
    </section>
  );
}
