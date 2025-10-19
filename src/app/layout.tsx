import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Kurt Adams - Industrial Automation Engineer',
    template: '%s | Kurt Adams'
  },
  description: 'Industrial Automation Engineer with 10+ years experience in control systems, IIoT, and automation solutions across mining, agriculture, and manufacturing sectors.',
  keywords: ['Industrial Automation', 'Control Systems', 'PLC Programming', 'SCADA', 'IIoT', 'Perth Engineer'],
  authors: [{ name: 'Kurt Adams' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://tchiro88.github.io/KURT_WEBSITE',
    title: 'Kurt Adams - Industrial Automation Engineer',
    description: 'Industrial Automation Engineer specializing in control systems and IIoT solutions',
    siteName: 'Kurt Adams Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
