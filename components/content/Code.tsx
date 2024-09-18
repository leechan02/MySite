import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MacButtons from "../button/MacButtons";
import { useTranslations } from "next-intl";

interface CodeProps {
  code: string;
  language: string;
  explanation: string;
  project: string;
}

export default function Code({
  code,
  language,
  explanation,
  project,
}: CodeProps) {
  const t = useTranslations(project);
  return (
    <div className='flex flex-col sm:flex-row justify-between items-start font-mono text-foreground w-full gap-4'>
      <div className='bg-primary shadow border-2 border-foreground/10 rounded-2xl sm:rounded-[40px] backdrop-blur-[15px] w-full overflow-hidden relative'>
        <div className='absolute top-1 right-1'>
          <MacButtons />
        </div>
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
      <div className='w-full pl-0 sm:pl-4 flex flex-col text-xs opacity-50 gap-4'>
        {t.raw(explanation).map((item: string, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}