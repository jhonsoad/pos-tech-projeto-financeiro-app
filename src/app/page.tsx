// src/app/page.tsx
'use client'; // Importante: use o cliente side rendering para usar hooks

import Image from 'next/image';
import { Button, AdvantageCard } from '@/components/common/index';
import styles from './page.module.css';
import { useRouter } from 'next/navigation'; // Importe o useRouter

export default function HomePage() {
  const router = useRouter(); // Inicialize o router

  const handleLoginRedirect = () => {
    router.push('/dashboard'); // Redireciona para a página da dashboard
  };

  return (
    <main className={styles.homeMain}>
      <section className={styles.homeSection}>
        <div className={styles.homeContent}>
          <h2 className={styles.homeTitle}>
            Experimente mais liberdade no
            controle da sua vida financeira.
            Crie sua conta com a gente!
          </h2>
        </div>
        <Image
          src="/illustration.svg"
          alt="ByteBank Illustration"
          width={661}
          height={412}
          priority
        />
      </section>

      {/* Seção de Vantagens */}
      <section className={styles.advantagesSection}>
        <h2 className={styles.sectionTitle}>Vantagens do nosso banco:</h2>
        <div className={styles.advantagesGrid}>
          <AdvantageCard
            iconSrc="/icon-gift.svg"
            title="Conta e cartão gratuitos"
            description="Isso mesmo, nossa conta é digital, sem custo fixo e você não tem tarifa de manutenção."
          />
          <AdvantageCard
            iconSrc="/icon-money.svg"
            title="Saques sem custo"
            description="Você pode sacar gratuitamente 4x por mês de qualquer banco 24h."
          />
          <AdvantageCard
            iconSrc="/icon-star.svg"
            title="Programa de pontos"
            description="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
          />
          <AdvantageCard
            iconSrc="/icon-shield.svg"
            title="Seguro Dispositivos"
            description="Seus dispositivos móveis (computadores, celulares) protegidos por uma mensalidade simbólica."
          />
        </div>
      </section>
    </main>
  );
}