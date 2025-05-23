import React from 'react';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-6 flex-col items-center justify-center">
      <main className="w-full max-w-md space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Bem-vindo ao App Financeiro
        </h1>
        <p className="text-gray-600 /* dark:text-gray-400 */ text-center">
          Esta é a página inicial do seu aplicativo financeiro.
        </p>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Digite seu nome"
          />
          <Button
            variant="primary"
          >
            Acessar
          </Button>
          <Button
            variant="secondary"
          >
            Cadastrar
          </Button>
          <Button
            variant="tertiary"
          >
            Tertiary
          </Button>
          <Button
            variant="inactive"
          >
            Inactive
          </Button>
        </div>
      </main>
    </div>
  );
}