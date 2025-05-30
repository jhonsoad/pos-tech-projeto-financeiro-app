// src/components/dashboard/StatementCard/StatementCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from './StatementCard.module.css';

interface StatementItem {
  id: string;
  type: string;
  amount: number;
  date: string;
}

interface StatementCardProps {
  items: StatementItem[];
}

export const StatementCard: React.FC<StatementCardProps> = ({ items }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Extrato</h3>
        <div className={styles.actions}>
          {/* Ícones de editar e lixeira - você precisaria adicionar os SVGs em public/ */}
          <Image src="/icon-edit.svg" alt="Editar" width={20} height={20} className={styles.icon} />
          <Image src="/icon-trash.svg" alt="Deletar" width={20} height={20} className={styles.icon} />
        </div>
      </div>
      <div className={styles.statementList}>
        {items.map((item) => (
          <div key={item.id} className={styles.statementItem}>
            <span className={styles.itemType}>{item.type}</span>
            <span className={`${styles.itemAmount} ${item.amount < 0 ? styles.negative : ''}`}>
              {item.amount < 0 ? `- R$` : `R$`} {Math.abs(item.amount).toFixed(2).replace('.', ',')}
            </span>
            <span className={styles.itemDate}>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};