import NavBar from "../nav/NavBar";

export default function Header() {
  return (
    <header className='flex justify-between items-center px-10 py-4'>
      <div className='text-primary text-xs font-bold font-mono'>
        Euiclee
      </div>
      <NavBar />
      <div className='text-primary text-xs font-bold font-mono'>
        Resume
      </div>
    </header>
  );
}
