// src/components/common/Header/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';
import styles from './Header.module.css';

interface HeaderProps {
  isLoggedIn: boolean;
  userName?: string; // Opcional, só se o usuário estiver logado
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, userName }) => {
  return (
    <header className={`${styles.header} ${isLoggedIn ? styles.loggedInHeader : ''}`}>
      <div className={styles.container}>
        {isLoggedIn ? (
          // Conteúdo para usuário logado
          <div className={styles.loggedInContent}>
            <span className={styles.userName}>{userName}</span>
            <div className={styles.userIcon}>
              <Image src="/user-icon.svg" alt="User Icon" width={32} height={32} />
            </div>
          </div>
        ) : (
          // Conteúdo para usuário não logado
          <div className={styles.logoNav}>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="ByteBank Logo"
                width={120}
                height={30}
                priority
              />
            </Link>
            <nav className={styles.nav}>
              <Link href="/sobre">Sobre</Link>
              <Link href="/servicos">Serviços</Link>
            </nav>
          </div>
        )}
        {!isLoggedIn && ( // Ações de login/cadastro só se não estiver logado
          <div className={styles.actions}>
            <Link href="/dashboard">
              <Button variant="primary">Abrir minha conta</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Já tenho conta</Button> {/* Botão 'Já tenho conta' pode ser um link para uma página de login simulada, ou ser removido se o botão da HomePage já faz o redirecionamento */}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};