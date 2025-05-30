// src/components/common/Header/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoNav}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="ByteBank Logo"
              width={120} // Ajuste o tamanho conforme necessário
              height={30} // Ajuste o tamanho conforme necessário
              priority
            />
          </Link>
          <nav className={styles.nav}>
            <Link href="/sobre">Sobre</Link>
            <Link href="/servicos">Serviços</Link>
          </nav>
        </div>
        <div className={styles.actions}>
          <Button variant="primary">Abrir minha conta</Button>
          <Button variant="outline">Já tenho conta</Button>
        </div>
      </div>
    </header>
  );
};