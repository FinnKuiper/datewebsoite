import './globals.css';
import NavBar from '@/components/navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <NavBar />
        <main className="px-4 flex flex-col gap-4 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
