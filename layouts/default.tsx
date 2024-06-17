
import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-full px-2 sm:px-6 flex-grow">
        {children}
      </main>
      <footer className="text-center text-default-400 mb-2 text-sm select-none cursor-default">
        当前页面仅用作展示，不具备交互逻辑
      </footer>
    </div>
  );
}
