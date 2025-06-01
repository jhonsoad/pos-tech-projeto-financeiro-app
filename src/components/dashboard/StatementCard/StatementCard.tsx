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
  const capitalizeFirstLetter = (string: string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getMonthName = (dateString: string) => {
    const parts = dateString.split('/');
    const formattedDate = `${parts[1]}/${parts[0]}/${parts[2]}`;
    const date = new Date(formattedDate);

    if (isNaN(date.getTime())) {
      return "Mês Inválido";
    }

    const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
    return capitalizeFirstLetter(monthName);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Extrato</h3>
        <div className={styles.actions}>
          <Image src="/icon-edit.svg" alt="Editar" width={40} height={40} className={styles.icon} />
          <Image src="/icon-trash.svg" alt="Deletar" width={40} height={40} className={styles.icon} />
        </div>
      </div>
      <div className={styles.statementList}>
        {items.map((item) => (
          <div key={item.id} className={styles.statementItem}>
            <span className={styles.itemMonth}>{getMonthName(item.date)}</span>
            <div className={styles.itemsTypeDate}>
              <p className={styles.itemType}>{item.type}</p>
              <p className={styles.itemDate}>{item.date}</p>
            </div>
            <p className={`${styles.itemAmount} ${item.amount < 0 ? styles.negative : ''}`}>
              {item.amount < 0 ? `- R$` : `R$`} {Math.abs(item.amount).toFixed(2).replace('.', ',')}
            </p>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  );
};