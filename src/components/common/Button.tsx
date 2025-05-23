import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'inactive';
}

export const Button: React.FC<ButtonProps> = ({ //: React.FC<ButtonProps>: Isso é um tipo do React que indica que Button é um "Functional Component" e que suas props são do tipo ButtonProps.React.FC
  children, //Representa o conteúdo que é passado entre as tags de abertura e fechamento do seu componente. Por exemplo, em <Button>Acessar</Button>, "Acessar" seria o children
  variant = 'primary', //Desestrutura a propriedade variant e define um valor padrão de 'primary' caso ela não seja passada.
  ...props //O "rest operator". Ele pega todas as outras propriedades que foram passadas para o componente (como onClick, id, className adicionais, etc.) e as agrupa em um novo objeto chamado props. Isso é crucial para passar as propriedades HTML padrão para o <button> nativo.
}) => {
  const buttonClass = styles.button;
  let variantClass = '';

  switch (variant) {
    case 'primary':
      variantClass = styles.primary;
      break;
    case 'secondary':
      variantClass = styles.secondary;
      break;
    case 'tertiary':
      variantClass = styles.tertiary;
      break;
    case 'inactive':
      variantClass = styles.inactive;
      break;
    default:
      variantClass = styles.primary;
      break;
  }

  return ( // Um componente React deve retornar o JSX que representa a interface do usuário que ele renderiza.
    <button //O elemento HTML nativo que seu componente representa
      className={`${buttonClass} ${variantClass}`} 
      {...props} // Isso é fundamental. Pega todas as outras propriedades (onClick, type, disabled, etc.) que foram passadas para o seu componente Button e as "espalha" (spread) diretamente no elemento <button> nativo. Isso torna seu componente Button muito flexível, permitindo que ele se comporte como um botão HTML padrão.
    > 
      {children}
    </button>
  );
};