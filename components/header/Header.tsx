import NavBar from "../nav/NavBar";

export default function Header() {
  return (
    <header className='flex justify-between items-center px-16 py-10'>
      <div className='text-primary text-base font-bold font-mono'>
        Euiclee
      </div>
      <NavBar />
      <div className='text-primary text-base font-bold font-mono'>
        Resume
      </div>
    </header>
  );
}
