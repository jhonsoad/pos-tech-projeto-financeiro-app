// src/components/dashboard/BalanceCard/BalanceCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from './BalanceCard.module.css';

interface BalanceCardProps {
  greeting: string;
  date: string;
  balance: number;
  accountType: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ greeting, date, balance, accountType }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.greeting}>{greeting}</h2>
      <p className={styles.date}>{date}</p>
      <div className={styles.balanceInfo}>
        <div className={styles.balanceSaldo}>
        <p className={styles.balanceLabel}>Saldo</p>
        <Image src="/icon-olho.svg" alt="icone de um olho" width={20} height={20} />
        </div>
        <hr className={styles.balanceHr}/>
        <p className={styles.accountType}>{accountType}</p>
        <span className={styles.balanceValue}>R$ {balance.toFixed(2).replace('.', ',')}</span>
      </div>
    </div>
  );
};