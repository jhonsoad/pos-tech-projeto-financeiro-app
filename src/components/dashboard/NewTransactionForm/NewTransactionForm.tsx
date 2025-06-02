// src/components/dashboard/NewTransactionForm/NewTransactionForm.tsx
'use client';

import React, { useState } from 'react';
import { Input, Dropdown, Button } from '@/components/common/index';
import styles from './NewTransactionForm.module.css';
import { Transaction } from '@/app/dashboard/page';

interface NewTransactionFormProps {
  onAddTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
}

const transactionOptions = [
  { label: 'Selecione...', value: '' },
  { label: 'Depósito', value: 'Depósito' },
  { label: 'Transferência', value: 'Transferência' },
];

export const NewTransactionForm: React.FC<NewTransactionFormProps> = ({ onAddTransaction }) => {
  const [transactionType, setTransactionType] = useState('');
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!transactionType || !value) {
      setErrorMessage('Por favor, selecione o tipo e insira o valor.');
      return;
    }

    const amount = parseFloat(value.replace(',', '.'));

    if (isNaN(amount)) { 
      setErrorMessage('Por favor, insira um valor numérico válido.');
      return;
    }

    const finalAmount = (transactionType === 'Transferência') ? -Math.abs(amount) : Math.abs(amount);
    onAddTransaction({ type: transactionType, amount: finalAmount });
    setTransactionType('');
    setValue('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Nova transação</h3>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <Dropdown
        options={transactionOptions}
        value={transactionType}
        onChange={(e) => setTransactionType(e.target.value)}
      />
      <Input
        label="Valor"
        type="text"
        step="0.01"
        placeholder="00,00"
        value={value}
        onChange={(e) => {
          const sanitizedValue = e.target.value.replace(/[^0-9,.]/g, '');
          setValue(sanitizedValue);
        }}
      />
      <Button type="submit" variant="secondary" className={styles.submitButton}>
        Concluir transação
      </Button>
    </form>
  );
};