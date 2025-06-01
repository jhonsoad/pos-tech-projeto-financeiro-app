// src/components/dashboard/NewTransactionForm/NewTransactionForm.tsx
'use client'; // Necessário por usar hooks de estado e Button/Dropdown/Input

import React, { useState } from 'react';
import { Input } from '@/components/common/Input/Input';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { Button } from '@/components/common/Button/Button';
import styles from './NewTransactionForm.module.css';

export const NewTransactionForm: React.FC = () => {
  const [transactionType, setTransactionType] = useState('');
  const [value, setValue] = useState('');

  const transactionOptions = [
    { value: '', label: 'Selecione o tipo de transação' },
    { value: 'deposit', label: 'Depósito' },
    { value: 'transfer', label: 'Transferência' },
    { value: 'payment', label: 'Pagamento' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nova transação:', { transactionType, value });
    // Lógica para enviar a transação (ex: para uma API)
    alert(`Transação de ${transactionType} no valor de R$ ${value} realizada!`);
    setTransactionType('');
    setValue('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Nova transação</h3>
      <Dropdown
        options={transactionOptions}
        value={transactionType}
        onChange={(e) => setTransactionType(e.target.value)}
      />
      <Input
        label="Valor"
        type="number"
        step="0.01"
        placeholder="00,00"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" variant="secondary" className={styles.submitButton}>
        Concluir transação
      </Button>
    </form>
  );
};