export default function NavBar() {
  return (
    <div className='p-1 bg-primary/5 rounded-full shadow border-2 border-primary/10 backdrop-blur-[15px] justify-start items-center gap-1 inline-flex'>
      <div className='w-[64px] py-2 rounded-full justify-center items-center flex'>
        <div className='text-center text-primary text-xs font-semibold font-mono'>
          Work
        </div>
      </div>
      <div className='w-[64px] py-2 bg-primary/5 rounded-full justify-center items-center flex'>
        <div className='text-center text-primary text-xs font-semibold font-mono'>
          Info
        </div>
      </div>
    </div>
  );
}
