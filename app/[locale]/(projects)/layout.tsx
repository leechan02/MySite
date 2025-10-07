import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { ReduxProvider } from "@/lib/redux/provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import ProjectHeader from "@/components/header/ProjectHeader";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }];
}

export const metadata: Metadata = {
  title: "Euiclee",
  description: "Welcome to Euiclee's personal website!",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ReduxProvider>
          <ThemeProvider>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
            >
              <div className='sticky top-0 z-50'>
                <ProjectHeader />
              </div>
              <main className='flex-col justify-center items-center inline-flex flex-grow'>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </main>
              <Footer />
            </body>
          </ThemeProvider>
        </ReduxProvider>
      </NextIntlClientProvider>
    </html>
  );
}
