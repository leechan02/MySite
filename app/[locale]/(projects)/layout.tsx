import ProjectHeader from "@/components/header/ProjectHeader";
import { Suspense } from "react";
import Loading from "./loading";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='sticky top-0 z-50'>
        <ProjectHeader />
      </div>
      <main className='flex-col justify-center items-center inline-flex flex-grow'>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </>
  );
}
