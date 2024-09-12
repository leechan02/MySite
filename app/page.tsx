import ProjectBoxBig from "@/components/box/ProjectBoxBig";
import ProjectBoxSmall from "@/components/box/ProjectBoxSmall";

export default async function Home() {
  return (
    <div className='flex-col justify-center items-center inline-flex'>
      <div className='flex justify-center items-center gap-16'>
        <ProjectBoxBig
          title='ft_transcendence'
          description='SPA Ping Pong Web site.'
          date='42 Seoul Nov.2023-April.2024'
          video='/video/transcendence.mp4'
          bgColor='bg-yellow'
        />
        <ProjectBoxSmall
          title='Webserv'
          description='SPA Ping Pong Web site.'
          date='42 Seoul Nov.2023-April.2024'
          video='/video/transcendence.mp4'
          bgColor='bg-green'
        />
      </div>
    </div>
  );
}
