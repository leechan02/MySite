import ProjectBoxBig from "@/components/box/ProjectBoxBig";

export default async function Home() {
  return (
    <div className='flex-col justify-center items-center inline-flex'>
      <ProjectBoxBig
        title='ft_transcendence'
        description='SPA Ping Pong Web site.'
        date='42 Seoul Nov.2023-April.2024'
        video='/video/transcendence.mp4'
        bgColor='bg-yellow'
      />
    </div>
  );
}
