import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { ReduxProvider } from "@/lib/redux/provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Euiclee",
  description: "Welcome to Euiclee's personal website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ReduxProvider>
        <ThemeProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
          >
            <Header />
            <main className="flex-col justify-center items-center inline-flex py-10 flex-grow">{children}</main>
            <Footer />
          </body>
        </ThemeProvider>
      </ReduxProvider>
    </html>
  );
}
