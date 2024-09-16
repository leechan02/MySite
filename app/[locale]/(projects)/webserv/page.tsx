import Image from "next/image";

export default async function Webserv() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 font-mono text-foreground'>
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-5xl font-bold">Webserv</h1>
        <div className="font-bold opacity-50">42 Seoul July 2023</div>
      </div>
      <Image src="/image/webserv.png" width={800} height={400} alt="webserv" />
      <div className='w-[320px] sm:w-[640px] lg:w-[900px] border border-foreground opacity-10' />
    </div>
  );
}