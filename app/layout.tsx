import "../app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "MT Database",
  description: "Digital platform.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <body suppressHydrationWarning={isDev}>
            <div className="relative flex flex-col h-screen">
              <main className="max-w-8xl pt-8 px-6 flex-grow">
                {children}
              </main>
            </div>
      </body>
    </html>
  );
}
