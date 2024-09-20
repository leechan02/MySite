import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import MacButtons from "../button/MacButtons";
import { useTranslations } from "next-intl";

interface CodeProps {
  code: string;
  language: string;
  codeEx?: string;
  project: string;
}

export default function Code({ code, language, codeEx, project }: CodeProps) {
  const t = useTranslations(project);
  return (
    <div className='flex flex-col justify-center items-center font-mono text-foreground w-full gap-4'>
      <div className='bg-primary shadow border-2 border-foreground/10 rounded-2xl backdrop-blur-[15px] w-full overflow-auto flex flex-col justify-start items-start gap-1 p-4'>
        <MacButtons />
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            background: "transparent",
            padding: "1rem",
            margin: 0,
            borderRadius: "inherit",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      {codeEx && (
        <div className='w-full flex flex-col text-xs text-opacity-50 gap-1'>
          {t.raw(codeEx).map((item: string, index: number) => (
            <div key={index} className='bg-primary rounded-2xl p-4 text-white'>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
