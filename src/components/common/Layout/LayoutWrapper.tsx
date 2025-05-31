// src/components/layout/LayoutWrapper.tsx
'use client'; // <-- ESTE é o arquivo do Client Component

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/common/Header/Header';
import { Footer } from '@/components/common/Footer/Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isLoggedIn = pathname === '/dashboard'; // Define isLoggedIn com base na rota
  const userName = "Joana da Silva Oliveira"; // Nome mockado para a dashboard

  return (
    <>
      <Header isLoggedIn={isLoggedIn} userName={userName} />
      {children}
      <Footer />
    </>
  );
};