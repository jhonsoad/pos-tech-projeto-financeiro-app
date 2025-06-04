// src/app/dashboard/page.tsx
'use client';
import { useState, useEffect, useCallback } from 'react';
import { Sidebar, BalanceCard, StatementCard, NewTransactionForm } from '@/components/dashboard/index';
import styles from './dashboard.module.css';
import { loadTransactions, saveTransactions } from '@/utils/localStorage';

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  date: string;
}

const INITIAL_BASE_BALANCE = 2500.00;

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(INITIAL_BASE_BALANCE);

  // Função para recalcular o saldo total com base nas transações
  const calculateTotalBalance = useCallback((currentTransactions: Transaction[]) => {
    const calculatedBalance = currentTransactions.reduce((acc: number, transaction: Transaction) => {
      return acc + (transaction.amount || 0);
    }, INITIAL_BASE_BALANCE);
    setBalance(calculatedBalance);
  }, []);

  useEffect(() => {
    const storedTransactions = loadTransactions();
    setTransactions(storedTransactions);
    calculateTotalBalance(storedTransactions); 
  }, [calculateTotalBalance]);

  useEffect(() => {
    saveTransactions(transactions);
    calculateTotalBalance(transactions);
  }, [transactions, calculateTotalBalance]);

  const handleAddTransaction = useCallback((newTransaction: Omit<Transaction, 'id' | 'date'>) => {
    const transactionWithId: Transaction = {
      ...newTransaction,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('pt-BR'),
    };
    setTransactions((prevTransactions) => {
      const updatedTransactions = [transactionWithId, ...prevTransactions];
      return updatedTransactions;
    });
  }, []);

  const handleDeleteTransaction = useCallback((id: string) => {
    setTransactions((prevTransactions) => {
      const updatedTransactions = prevTransactions.filter((transaction) => transaction.id !== id);
      return updatedTransactions;
    });
  }, []);

  const handleEditTransaction = useCallback((updatedTransaction: Transaction) => {
    setTransactions((prevTransactions) => {
      const updatedTransactions = prevTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      );
      return updatedTransactions;
    });
  }, []);

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar activeLink="Inicio" />
      <div className={styles.cardsFlex}>
        <BalanceCard
          greeting="Olá, Joana! :)"
          date="Quinta-feira, 06/06/2024"
          balance={balance}
          accountType="Conta Corrente"
        />
        <NewTransactionForm onAddTransaction={handleAddTransaction} />
      </div>
      <div className={styles.newTransactionSection}>
        <StatementCard
          items={transactions}
          onDeleteTransaction={handleDeleteTransaction}
          onEditTransaction={handleEditTransaction}
        />
      </div>
    </div>
  );
}