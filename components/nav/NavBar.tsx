export default function NavBar() {
  return (
    <div className='w-[156px] h-[50px] py-1 flex-col justify-start items-start inline-flex'>
      <div className='self-stretch p-1 bg-[#353535]/5 rounded-full shadow border-2 border-[#353535]/10 backdrop-blur-[15px] justify-start items-center gap-1 inline-flex'>
        <div className='h-[34px] py-2 rounded-full justify-center items-center flex'>
          <div className="text-center text-[#353535] text-xs font-semibold font-['Inter'] leading-[18px] tracking-tight">
            Work
          </div>
        </div>
        <div className='h-[34px] py-2 bg-[#353535]/5 rounded-full justify-center items-center flex'>
          <div className="text-center text-[#353535] text-xs font-semibold font-['Inter'] leading-[18px] tracking-tight">
            Info
          </div>
        </div>
      </div>
    </div>
  );
}
