// src/app/dashboard/page.tsx
import { Sidebar, BalanceCard, StatementCard, NewTransactionForm } from '@/components/dashboard/index';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const statementItems = [
    { id: '1', type: 'Depósito', amount: 150.00, date: '10/11/2022' },
    { id: '2', type: 'Depósito', amount: 100.00, date: '21/11/2022' },
    { id: '3', type: 'Depósito', amount: 50.00, date: '21/11/2022' },
    { id: '4', type: 'Transferência', amount: -500.00, date: '21/11/2022' },
  ];

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar activeLink="Inicio" />
      <div className={styles.cardsFlex}>
        <BalanceCard
          greeting="Olá, Joana! :)"
          date="Quinta-feira, 06/06/2024"
          balance={2500.00}
          accountType="Conta Corrente"
        />
        <NewTransactionForm />
      </div>
      <div className={styles.newTransactionSection}>
        <StatementCard items={statementItems} />
      </div>
    </div>
  );
}