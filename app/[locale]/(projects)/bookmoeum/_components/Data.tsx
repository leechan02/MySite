import CodeSection from "@/components/content/CodeSection";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function Data() {
  const codeItems: CodeItem[] = [
    {
      code: `  const handleButtonClick = async () => {
	  //...
	  
    const bookRef = doc(db, \`users/\${user.uid}/books/\${bookData.isbn}\`);

    try {
      if (isBookAdd) {
        await deleteDoc(bookRef);
      } else {
        await setDoc(bookRef, {
          title: bookData.processedTitle,
          author: bookData.processedAuthor,
          image: bookData.image,
          isbn: bookData.isbn,
          publisher: bookData.publisher,
          description: bookData.description,
          pubdate: bookData.pubdate,
          timestamp: new Date(),
        });
      }
      setIsBookAdd(!isBookAdd);
    } catch (error) {
      console.error("Error updating book status:", error);
    }
  };`,
      language: "javascript",
      codeEx: "firstCodeEx",
      label: "BookDetail.tsx",
    }
  ];


  return (
    <section
      id='database'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='bookmoeum.data' />
      <Content project='bookmoeum.data' title='first' content='firstContent' />
      <CodeSection
        project='bookmoeum.data'
        codeItems={codeItems}
      />
    </section>
  );
}
