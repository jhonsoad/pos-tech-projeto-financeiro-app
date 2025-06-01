import type { Metadata } from "next";
import "./globals.css";
import { LayoutWrapper } from '@/components/common/Layout/LayoutWrapper';

export const metadata: Metadata = {
  title: "ByteBank",
  description: "ByteBank: Sua conta digital, cartões, programa de pontos e muito mais.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}