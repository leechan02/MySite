import CodeSection from "@/components/content/CodeSection";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function Language() {
  const codeItems: CodeItem[] = [
    {
      code: `import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'ko'],
 
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};`,
      language: "javascript",
      codeEx: "firstCodeEx",
      label: "middleware.ts",
    },
    {
      code: `import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'ko'];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(\`./messages/\${locale}.json\`)).default
  };
});`,
      language: "javascript",
      codeEx: "secondCodeEx",
      label: "i18n.ts",
    },
    {
      code: `  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ReduxProvider>
          <ThemeProvider>
            <body
              className={\`\${geistSans.variable} \${geistMono.variable} antialiased flex flex-col min-h-screen\`}
            >
              <div className='sticky top-0 z-50'>
                <Header />
              </div>
              <main className='flex-col justify-center items-center inline-flex py-10 flex-grow'>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </main>
              <Footer />
            </body>
          </ThemeProvider>
        </ReduxProvider>
      </NextIntlClientProvider>
    </html>
  );`,
      language: "javascript",
      codeEx: "secondCodeEx",
      label: "layout.tsx",
    },
    {
      code: `export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('work');

  return (
    <div className='flex-col justify-center items-center inline-flex gap-16'>
      <div className='flex flex-col justify-center items-center gap-2 px-4 text-center'>
        <div className='font-mono text-foreground text-3xl font-extrabold'>
          {t('mainTitle')}
        </div>
        //...
	);
}`,
      language: "javascript",
      codeEx: "secondCodeEx",
      label: "HomePage.tsx",
    }
  ];


  return (
    <section
      id='language change'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='mysite.lang' />
      <Content project='mysite.lang' title='first' content='firstContent' />
      <Content project='mysite.lang' title='second' content='secondContent' />
      <CodeSection
        project='mysite.lang'
        codeItems={codeItems}
      />
    </section>
  );
}
