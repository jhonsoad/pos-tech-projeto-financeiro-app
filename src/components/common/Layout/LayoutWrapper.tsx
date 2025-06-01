// src/components/layout/LayoutWrapper.tsx
'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/common/Header/Header';
import { Footer } from '@/components/common/Footer/Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isLoggedIn = pathname === '/dashboard';
  const userName = "Joana da Silva Oliveira";
  const showFooter = pathname === '/';

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} userName={userName} />
      {children}
      {showFooter && <Footer />}
    </div>
  );
};