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
  //const [editType, setEditType] = useState(''); // Opcional: para permitir editar o tipo se necessário
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [transactionToDeleteId, setTransactionToDeleteId] = useState<string | null>(null);
  const [transactionToDeleteDetails, setTransactionToDeleteDetails] = useState<Transaction | null>(null); // Para mostrar detalhes na modal de exclusão

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
    //setEditType(item.type);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const editType = transactionToEdit?.type;
    if (transactionToEdit && editAmount) {
      const newAmount = parseFloat(editAmount.replace(',', '.'));

      if (isNaN(newAmount)) {
        alert('Valor inválido. Por favor, insira um número.');
        return;
      }

      const finalAmount = (editType === 'Transferência' && newAmount > 0) ? -newAmount : Math.abs(newAmount);

      const updatedTransaction: Transaction = {
        ...transactionToEdit,
        //type: editType, // Atualiza o tipo, se for editável
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
    //setEditType('');
  };

    // NOVAS FUNÇÕES para gerenciar o modal de exclusão
  const handleDeleteClick = (id: string) => {
    const transactionFound = items.find(item => item.id === id);
    if (transactionFound) {
      setTransactionToDeleteId(id);
      setTransactionToDeleteDetails(transactionFound); // Guarda os detalhes para exibir na modal
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

            <hr />
          </div>
        ))
        )}
      </div>

      {/* Modal de Edição de Transação */}
      {isEditModalOpen && transactionToEdit && (
        <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal} title="Editar Transação">
          <form onSubmit={handleSaveEdit} className={styles.editForm}>
            {/* Opcional: Se quiser permitir editar o tipo de transação */}
            {/* <div className={styles.formGroup}>
              <label htmlFor="editType">Tipo de Transação:</label>
              <select
                id="editType"
                value={editType}
                onChange={(e) => setEditType(e.target.value)}
                className={styles.inputField}
              >
                <option value="Depósito">Depósito</option>
                <option value="Transferência">Transferência</option>
              </select>
            </div> */}

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
              <Button type="button" variant="danger" onClick={handleConfirmDelete}> {/* Adicione um variant="danger" no seu botão */}
                Excluir
              </Button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};