// src/app/page.tsx
// Esta página não precisa de 'use client' se não tiver interatividade
// pois é Server Component por padrão no App Router.

import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';
import { AdvantageCard } from '@/components/common/AdvantageCard/AdvantageCard';
// Se os estilos da página Home forem muito específicos e não forem reutilizados,
// você pode mantê-los como um CSS Module para essa página.
import styles from './page.module.css'; // Estilos específicos da página Home

export default function HomePage() {
  return (
    <main>
      {/* Seção Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Experimente mais liberdade no controle da sua vida financeira.</h1>
          <p className={styles.heroSubtitle}>Crie sua conta com a gente!</p>
          {/* O Button é um Client Component, mas pode ser usado aqui */}
          <Button variant="secondary">Abrir minha conta</Button>
        </div>
        <div className={styles.heroIllustration}>
          <Image
            src="/illustration.svg"
            alt="ByteBank Illustration"
            width={500}
            height={400}
            priority
          />
        </div>
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