// src/app/dashboard/page.tsx
import { Sidebar, BalanceCard, StatementCard, NewTransactionForm } from '@/components/dashboard/index';
import styles from './dashboard.module.css';
import Image from 'next/image';

export default function DashboardPage() {
  // Dados mockados para exemplo
  const statementItems = [
    { id: '1', type: 'Depósito', amount: 150.00, date: '10/11/2022' },
    { id: '2', type: 'Depósito', amount: 100.00, date: '21/11/2022' },
    { id: '3', type: 'Depósito', amount: 50.00, date: '21/11/2022' },
    { id: '4', type: 'Transferência', amount: -500.00, date: '21/11/2022' },
    // Adicione mais itens conforme necessário
  ];

  return (
    // O layout principal (Header/Footer) é definido em app/layout.tsx
    <div className={styles.dashboardLayout}>
      <Sidebar activeLink="Inicio" /> {/* Passa o link ativo para a sidebar */}
      <div className={styles.mainContent}>
        <div className={styles.dashboardHeader}>
          {/* A barra superior com o nome do usuário e ícone */}
          <span className={styles.userName}>Joana da Silva Oliveira</span>
          <div className={styles.userIcon}>
            {/* Você pode usar um ícone SVG ou um Image component para a imagem de perfil */}
            <Image src="/user-icon.svg" alt="User Icon" width={32} height={32} /> {/* Adicione um ícone em public/ */}
          </div>
        </div>

        <div className={styles.cardsGrid}>
          <BalanceCard
            greeting="Olá, Joana! :)"
            date="Quinta-feira, 06/06/2024" // Use a data atual ou dinâmicos
            balance={2500.00}
            accountType="Conta Corrente"
          />
          <StatementCard items={statementItems} />
        </div>

        <div className={styles.newTransactionSection}>
          <NewTransactionForm />
          {/* Adicionar a área de fundo quadriculada */}
          <div className={styles.patternBackground}></div>
        </div>
      </div>
    </div>
  );
}