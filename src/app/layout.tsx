import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Onest } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from './providers/toaster';

const onest = Onest({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'One Cart Financial Services',
    template: '%s | One Cart Financial Services',
  },
  description:
    'One Cart Financial Services provides Personal Loans, Business Loans, Home Loans and Insurance services with fast approval and minimal documentation.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
    shortcut: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
      >
        <ThemeProvider disableTransitionOnChange>
          <ToasterProvider />
          <div className="isolate flex flex-col flex-1">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}