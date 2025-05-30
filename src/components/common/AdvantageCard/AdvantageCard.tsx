// src/components/common/AdvantageCard/AdvantageCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from './AdvantageCard.module.css';

interface AdvantageCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const AdvantageCard: React.FC<AdvantageCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <Image src={iconSrc} alt={`${title} icon`} width={48} height={48} /> {/* Ajuste o tamanho conforme o ícone */}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};