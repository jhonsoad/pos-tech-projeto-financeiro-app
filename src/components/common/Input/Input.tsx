import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className, ...props }) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s/g, '-') : undefined);
  return (
    <div className={styles.inputGroup}>
      {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <input id={inputId} className={`${styles.input} ${className || ''}`} {...props} />
    </div>
  );
};