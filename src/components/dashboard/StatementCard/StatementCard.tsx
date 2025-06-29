// src/components/dashboard/StatementCard/StatementCard.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './StatementCard.module.css';
import { Transaction } from '@/app/dashboard/page';
import { Input, Button, Modal } from '@/components/common/index';

interface StatementCardProps {
  items: Transaction[];
  onDeleteTransaction: (id: string) => void;
  onEditTransaction: (transaction: Transaction) => void;
}

export const StatementCard: React.FC<StatementCardProps> = ({ items, onDeleteTransaction, onEditTransaction }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState<Transaction | null>(null);
  const [editAmount, setEditAmount] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [transactionToDeleteId, setTransactionToDeleteId] = useState<string | null>(null);
  const [transactionToDeleteDetails, setTransactionToDeleteDetails] = useState<Transaction | null>(null);

  const capitalizeFirstLetter = (string: string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getMonthName = (dateString: string) => {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const date = new Date(year, month, day);

    if (isNaN(date.getTime())) {
      console.warn("Data inválida para getMonthName:", dateString);
      return "Mês Inválido";
    }

    const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
    return capitalizeFirstLetter(monthName);
  };

  const handleEditClick = (item: Transaction) => {
    setTransactionToEdit(item);
    setEditAmount(Math.abs(item.amount).toFixed(2).replace('.', ','));
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (transactionToEdit && editAmount) {
      const newAmount = parseFloat(editAmount.replace(',', '.'));

      if (isNaN(newAmount)) {
        alert('Valor inválido. Por favor, insira um número.');
        return;
      }

      const finalAmount = transactionToEdit.type === 'Transferência' && newAmount > 0
        ? -newAmount
        : newAmount;

      const updatedTransaction: Transaction = {
        ...transactionToEdit,
        amount: finalAmount,
      };
      onEditTransaction(updatedTransaction);
      handleCloseEditModal();
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setTransactionToEdit(null);
    setEditAmount('');
  };

  const handleDeleteClick = (id: string) => {
    const transactionFound = items.find(item => item.id === id);
    if (transactionFound) {
      setTransactionToDeleteId(id);
      setTransactionToDeleteDetails(transactionFound);
      setIsDeleteModalOpen(true);
    }
  };

  const handleConfirmDelete = () => {
    if (transactionToDeleteId) {
      onDeleteTransaction(transactionToDeleteId);
      handleCloseDeleteModal();
    }
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTransactionToDeleteId(null);
    setTransactionToDeleteDetails(null);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Extrato</h3>
        {/* <div className={styles.actions}> */}
          {/* <Image src="/icon-edit.svg" alt="Editar" width={40} height={40} className={styles.icon} />
          <Image src="/icon-trash.svg" alt="Deletar" width={40} height={40} className={styles.icon} /> */}
        {/* </div> */}
      </div>
      <div className={styles.statementList}>
        {items.length === 0 ? (
          <p className={styles.noTransactionsMessage}>Nenhuma transação encontrada.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className={styles.statementItem}>
              <span className={styles.itemMonth}>{getMonthName(item.date)}</span>
              <div className={styles.itemsTypeDate}>
                <p className={styles.itemType}>{item.type}</p>
                <p className={styles.itemDate}>{item.date}</p>
              </div>
              <div className={styles.itemAmountActions}>
                <p className={`${styles.itemAmount} ${item.amount < 0 ? styles.negative : ''}`}>
                  {item.amount < 0 ? `- R$` : `R$`} {Math.abs(item.amount).toFixed(2).replace('.', ',')}
                </p>
                <div className={styles.itemActions}>
                  <button
                    onClick={() => handleEditClick(item)}
                    className={styles.actionButton}
                    title="Editar transação"
                  >
                    <Image src="/icon-edit.svg" alt="Editar" width={20} height={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(item.id)}
                    className={styles.actionButton}
                    title="Deletar transação"
                  >
                    <Image src="/icon-trash.svg" alt="Deletar" width={20} height={20} />
                  </button>
                </div>
              </div>

              <hr className={styles.hr}/>
            </div>
          ))
        )}
      </div>

      {/* Modal de Edição de Transação */}
      {isEditModalOpen && transactionToEdit && (
        <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal} title="Editar Transação">
          <form onSubmit={handleSaveEdit} className={styles.editForm}>
            <Input
              label="Valor"
              type="text"
              placeholder="00,00"
              value={editAmount}
              onChange={(e) => {
                const sanitizedValue = e.target.value.replace(/[^0-9,.]/g, '');
                setEditAmount(sanitizedValue);
              }}
            />

            <div className={styles.modalActions}>
              <Button type="button" variant="secondary" onClick={handleCloseEditModal}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                Salvar Alterações
              </Button>
            </div>
          </form>
        </Modal>
      )}

       {/* Modal de Confirmação de Exclusão */}
      {isDeleteModalOpen && transactionToDeleteDetails && (
        <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal} title="Confirmar Exclusão">
          <div className={styles.deleteConfirmationContent}>
            <p className={styles.deleteConfirmationtext}>
              Você tem certeza que deseja deletar a seguinte transação?
            </p>
            <div className={styles.deleteConfirmationContentText}>
              <p>
                <strong>Tipo:</strong> {transactionToDeleteDetails.type}
              </p>
              <p>
                <strong>Valor:</strong>{' '}
                <span className={transactionToDeleteDetails.amount < 0 ? styles.negative : ''}>
                  {transactionToDeleteDetails.amount < 0 ? `- R$` : `R$`}{' '}
                  {Math.abs(transactionToDeleteDetails.amount).toFixed(2).replace('.', ',')}
                </span>
              </p>
              <p>
                <strong>Data:</strong> {transactionToDeleteDetails.date}
              </p>
            </div>
            <div className={styles.modalActions}>
              <Button type="button" variant="secondary" onClick={handleCloseDeleteModal}>
                Cancelar
              </Button>
              <Button type="button" variant="danger" onClick={handleConfirmDelete}>
                Excluir
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};