// src/components/common/Footer/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Serviços</h3>
          <Link href="/conta-corrente">Conta corrente</Link>
          <Link href="/conta-pj">Conta PJ</Link>
          <Link href="/cartao-credito">Cartão de crédito</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Contato</h3>
          <span>0800 004 250 08</span>
          <span>meajuda@bytebank.com.br</span>
          <span>ouvidoria@bytebank.com.br</span>
        </div>

        <div className={`${styles.footerColumn} ${styles.developedBy}`}>
          <h3 className={styles.columnTitle}>Desenvolvido por Alura</h3>
          <Link href="/">
            <Image
              src="/logo-branco.svg"
              alt="ByteBank Logo"
              width={145}
              height={32}
            />
          </Link>
          <div className={styles.socialIcons}>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.svg" alt="Instagram" width={29} height={29} />
            </Link>
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <Image src="/whatsapp.svg" alt="WhatsApp" width={29} height={29} />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/youtube.svg" alt="YouTube" width={29} height={29} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};