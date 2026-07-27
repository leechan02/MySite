import Content from "@/components/content/Content";
import Title from "@/components/content/Title";
import Image from "next/image";

const screenshots = [
  { src: "/image/bookmoeum/mobile-app/reading-record.png", alt: "Bookmoeum reading record mobile app" },
  { src: "/image/bookmoeum/mobile-app/reading-graph.png", alt: "Bookmoeum reading graph mobile app" },
  { src: "/image/bookmoeum/mobile-app/curated-books.png", alt: "Bookmoeum celebrity book recommendations mobile app" },
  { src: "/image/bookmoeum/mobile-app/library-dashboard.png", alt: "Bookmoeum personal library mobile app" },
  { src: "/image/bookmoeum/mobile-app/library-sharing.png", alt: "Bookmoeum library sharing mobile app" },
  { src: "/image/bookmoeum/mobile-app/book-detail.png", alt: "Bookmoeum book detail mobile app" },
];

export default function MobileApp() {
  return (
    <section
      id='mobile app'
      className='flex w-full flex-col items-start gap-6 font-mono text-foreground sm:gap-16'
    >
      <Title project='bookmoeum.mobile' />
      <Content project='bookmoeum.mobile' title='first' content='firstContent' />
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.src}
            className='overflow-hidden rounded-2xl border-2 border-foreground/10 bg-foreground/5 shadow sm:rounded-[32px]'
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={1242}
              height={2688}
              className='h-auto w-full'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
