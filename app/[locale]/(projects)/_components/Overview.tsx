import { useTranslations } from "next-intl";

interface OverviewProps {
  project: string;
}

export default function Overview({ project }: OverviewProps) {
  const t = useTranslations(project);

  return (
    <div className='flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-16'>
      <div className='flex flex-col justify-start items-start gap-8 w-full sm:w-1/2'>
        <div className='flex flex-col gap-2 w-full'>
          <div className='text-sm font-bold'>{t("myRoleTitle")}</div>
          <div className='text-xs opacity-50'>{t("myRole")}</div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='text-sm font-bold'>{t("teamTitle")}</div>
          <div className='text-xs opacity-50 flex flex-col gap-2'>
            {t.raw("team").map((member: string, index: number) => (
              <div key={index}>{member}</div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='text-sm font-bold'>{t("timelineTitle")}</div>
          <div className='text-xs opacity-50'>{t("timeline")}</div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='text-sm font-bold'>Tech Keywords</div>
          <div className='text-xs opacity-50'>
            C++98, Makefile, HTML, CSS, OOP, Non-block I/O, I/O Multiplexing
            (kqueue), HTTP/1.1
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 justify-start items-start w-full sm:w-1/2'>
        <div className='text-sm font-bold'>Overview</div>
        <div className='text-xs opacity-50 flex flex-col gap-4'>
          <div>
            Webserv is an ambitious project undertaken as part of the School 42
            curriculum, challenging students to develop a robust HTTP/1.1
            compatible web server in C++ 98. This project pushes the boundaries
            of low-level network programming, requiring the implementation of
            non-blocking I/O operations and efficient request handling.
          </div>
          <div>
            Key features include the use of I/O multiplexing with `poll()` (or
            equivalent), ensuring the server never blocks or hangs indefinitely,
            and the ability to serve static websites while supporting multiple
            HTTP methods.
          </div>
          <div>
            By implementing these advanced concepts, Webserv not only serves as
            a practical learning tool for understanding web server architecture
            but also demonstrates the power and flexibility of C++ in creating
            high-performance network applications. The successful completion of
            this project showcases a deep understanding of network protocols,
            system-level programming, and efficient resource management in a
            challenging, real-world scenario.
          </div>
        </div>
      </div>
    </div>
  );
}
