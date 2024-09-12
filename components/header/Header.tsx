import NavBar from "../nav/NavBar";

export default function Header() {
  return (
    <header className='flex justify-between items-center px-16 py-10'>
      <div className='text-foreground text-base font-bold font-mono w-1/3 flex justify-start'>
        Euichan Lee
      </div>
      <div className='w-1/3 flex justify-center'>
        <NavBar />
      </div>
      <div className='text-foreground text-base font-bold font-mono w-1/3 flex justify-end'>
        Resume
      </div>
    </header>
  );
}