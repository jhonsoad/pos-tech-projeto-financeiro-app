// src/utils/localStorage.ts

export const loadTransactions = () => {
  try {
    const serializedTransactions = localStorage.getItem('transactions');
    if (serializedTransactions === null) {
      return [];
    }
    return JSON.parse(serializedTransactions);
  } catch (error) {
    console.error("Error loading transactions from localStorage:", error);
    return [];
  }
};

export const saveTransactions = (transactions: any[]) => {
  try {
    const serializedTransactions = JSON.stringify(transactions);
    localStorage.setItem('transactions', serializedTransactions);
  } catch (error) {
    console.error("Error saving transactions to localStorage:", error);
  }
};