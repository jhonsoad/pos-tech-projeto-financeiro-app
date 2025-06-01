// src/components/dashboard/Sidebar/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
  activeLink?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeLink = 'Inicio' }) => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/dashboard" className={activeLink === 'Inicio' ? styles.active : ''}>
            Início
          </Link>
        </li>
        <hr />
        <li>
          <Link href="/dashboard/transferencias" className={activeLink === 'Transferencias' ? styles.active : ''}>
            Transferências
          </Link>
        </li>
        <hr />
        <li>
          <Link href="/dashboard/investimentos" className={activeLink === 'Investimentos' ? styles.active : ''}>
            Investimentos
          </Link>
        </li>
        <hr />
        <li>
          <Link href="/dashboard/outros-servicos" className={activeLink === 'Outros servicos' ? styles.active : ''}>
            Outros serviços
          </Link>
        </li>
      </ul>
    </nav>
  );
};