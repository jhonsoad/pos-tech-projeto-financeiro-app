// src/components/common/Dropdown/Dropdown.tsx
'use client';

import React from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  id?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options, id, className, ...props }) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s/g, '-') : undefined);
  return (
    <div className={styles.dropdownGroup}>
      {label && <label htmlFor={selectId} className={styles.label}>{label}</label>}
      <select id={selectId} className={`${styles.dropdown} ${className || ''}`} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};