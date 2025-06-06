# 🚀 Tech Challenge - Gerenciamento Financeiro (Frontend)

---

## 🎯 Sobre o Projeto

Este projeto é o frontend de uma aplicação de gerenciamento financeiro, desenvolvida como parte do Tech Challenge da fase 01. O principal objetivo é proporcionar uma interface intuitiva para que os usuários possam gerenciar suas transações financeiras, acompanhando o saldo da conta e o extrato de movimentações.

---

## ✨ Funcionalidades

A aplicação oferece as seguintes funcionalidades principais:

* **Home Page:**
    * Pagina Inicial do Byte Bank com botão de Login.
    * Vantagens ao abrir uma conta na Byte Bank.
* **Dashboard Page:**
    * Boas-vindas personalizadas ao usuário.
    * Exibição clara do saldo atual da conta corrente.
    * Extrato das últimas transações realizadas.
    * Seção dedicada para iniciar novas transações (depósito ou transferência).
* **Listagem de Transações:**
    * Visualização detalhada de todas as transações, incluindo tipo, valor e data.
    * Opções para **editar** transações existentes.
    * Opções para **deletar** transações.
* **Adicionar Nova Transação:**
    * Formulário intuitivo para registrar novas movimentações financeiras.
    * Campos para tipo de transação (Depósito, Transferência) e valor.
    * Data da transação registrada automaticamente (data atual).
* **Editar Transação:**
    * Funcionalidade para ajustar o valor de uma transação previamente registrada.

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e conceitos:

* **Next.js:** Framework React para construção de aplicações web, com foco em otimização de performance (SSR/SSG).
* **React:** Biblioteca JavaScript para construção de interfaces de usuário reativas.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática, garantindo maior robustez e manutenibilidade ao código.
* **CSS Modules:** Para modularização e isolamento de estilos CSS por componente, evitando conflitos globais.
* **Design System:** Aplicação de um sistema de design seguindo as diretrizes visuais fornecidas no Figma para garantir consistência e reutilização de componentes.
    * **Figma:** Ferramenta utilizada como referência para o design da interface e componentes.
* **Programação Orientada a Objetos (POO):** Embora o foco principal seja o frontend, conceitos de POO foram aplicados na estruturação da lógica e organização dos dados, como na definição da interface `Transaction`.
* **Local Storage:** Utilizado para persistência dos dados das transações diretamente no navegador do usuário, facilitando o desenvolvimento e teste rápido do frontend.

---

## 🎨 Design System (Figma)

O design deste projeto segue as diretrizes visuais estabelecidas no Figma. Componentes, cores, tipografia e espaçamentos foram implementados de acordo com o protótipo para garantir uma experiência de usuário consistente e aderente ao design proposto.

🔗 [Link para o Figma do Projeto Financeiro](https://www.figma.com/design/ns5TC3X5Xr8V7I3LYKg9KA/Projeto-Financeiro?node-id=503-4264)

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para clonar o repositório e rodar o projeto em seu ambiente de desenvolvimento:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) (versão 18.x ou superior recomendada) e o [npm](https://www.npmjs.com/get-npm)

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/jhonsoad/pos-tech-projeto-financeiro-app.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd pos-tech-projeto-financeiro-app
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Acesse a aplicação:**

    Abra seu navegador e acesse: `http://localhost:3000` (ou a porta que o Next.js indicar no terminal).

---

## 🎥 Demonstração

https://youtu.be/LdPg9cIMPMs

---

## 👨‍💻 Desenvolvido por

* **Jhonatas Magalhães**
    * [LinkedIn] https://www.linkedin.com/in/jhonatas-magalhaes/
    * [Github] https://github.com/jhonsoad

---

## ⚠️ Observações e Melhorias Futuras

* **Persistência de Dados:** Atualmente, os dados são armazenados no `localStorage` do navegador. Para uma aplicação em produção, seria necessário integrar com um backend e um banco de dados.
* **Validações mais Robustas:** Implementar validações de formulário mais complexas e feedback visual para o usuário.
* **Filtros e Ordenação:** Adicionar opções para filtrar transações por tipo, data ou ordenar a lista.
* **Detalhes da Transação:** Criar uma página ou modal para visualizar detalhes de cada transação (se houvesse mais campos como descrição, categoria, etc.).

---