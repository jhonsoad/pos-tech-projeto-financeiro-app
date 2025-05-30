// src/components/dashboard/BalanceCard/BalanceCard.tsx
import React from 'react';
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
      <h3 className={styles.greeting}>{greeting}</h3>
      <p className={styles.date}>{date}</p>
      <div className={styles.balanceInfo}>
        <span className={styles.balanceLabel}>Saldo</span>
        <span className={styles.balanceValue}>R$ {balance.toFixed(2).replace('.', ',')}</span>
      </div>
      <p className={styles.accountType}>{accountType}</p>
    </div>
  );
};