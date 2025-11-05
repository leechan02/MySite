import Header from "@/components/header/Header";
import { Suspense } from "react";
import Loading from "./loading";

export default function NormalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <main className='flex-col justify-center items-center inline-flex py-10 flex-grow'>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </>
  );
}
