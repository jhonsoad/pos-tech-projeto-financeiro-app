import type { Metadata } from "next";
import "./globals.css";
import { Header } from '@/components/common/Header/Header';
import { Footer } from '@/components/common/Footer/Footer';

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
        {/*
          Aqui estamos injetando as variáveis CSS geradas dinamicamente
          no <head> do documento como uma tag <style>.
          Isso garante que elas estejam disponíveis globalmente para todos os CSS.
        */}
      </head>
      <body>
        <Header />
          {children} {/* Aqui é onde o conteúdo das suas 'page.tsx' será renderizado */}
        <Footer />
      </body>
    </html>
  );
}