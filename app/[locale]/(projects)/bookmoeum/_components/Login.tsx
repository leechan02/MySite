import CodeSection from "@/components/content/CodeSection";
import Content from "@/components/content/Content";
import Title from "@/components/content/Title";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

export default function Login() {
  const codeItems: CodeItem[] = [
    {
      code: `import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('authToken')?.value;

  if (request.nextUrl.pathname.startsWith('/mylibrary')) {
    if (!authToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } else if (request.nextUrl.pathname === '/login' && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/mylibrary/:path*', '/login'],
};`,
      language: "javascript",
      codeEx: "firstCodeEx",
      label: "BookDetail.tsx",
    }
  ];


  return (
    <section
      id='login'
      className='w-full flex flex-col justify-start items-start gap-6 sm:gap-16 font-mono text-foreground'
    >
      <Title project='bookmoeum.login' />
      <Content project='bookmoeum.login' title='first' content='firstContent' />
      <Content project='bookmoeum.login' title='second' content='secondContent' />
      <CodeSection
        project='bookmoeum.login'
        codeItems={codeItems}
      />
    </section>
  );
}
