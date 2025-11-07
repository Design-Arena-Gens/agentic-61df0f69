import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

export const metadata = {
  title: 'Alex Doe ? CV',
  description: 'Modern CV built with Next.js',
  metadataBase: new URL('https://agentic-61df0f69.vercel.app'),
};

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500','700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen'}>
        {children}
      </body>
    </html>
  );
}
