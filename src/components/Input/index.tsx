import React from 'react';
import styled from 'styled-components';

interface InputProps {
  className?: string;
  type: string;
  value: string;
  placeholder?: string;
  warningText?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  name?: string;
}

const StyledInput = styled.div<{ warningText?: string }>`
  width: 100%;
  & .input {
    width: 100%;
    height: 5.8rem;
    background-color: var(--white);
    transition: 300ms;
    color: var(--gray3);
    font-size: 2rem;
    line-height: 1.5;
    text-indent: 1rem;
    border-radius: 1rem;
    ::placeholder {
      color: var(--gray2);
    }

    border: none;
    border-bottom: ${(props) =>
      props.warningText
        ? '0.125rem solid var(--gray3)'
        : '0.125rem solid var(--gray2);'};

    &:focus {
      outline: none;
      border-bottom: 0.125rem solid var(--gray5);
    }
    :disabled {
      color: var(--gray2);
    }

    &:-internal-autofill-selected {
      background-image: none !important;
      transition: background-color 3000s ease-in-out 0s;
      -webkit-text-fill-color: var(--gray3) !important;
    }
  }
  & .warning {
    position: absolute;
    padding: 0.5rem 1rem;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.2;
    color: var(--error);
  }
`;

export default function Input({
  className,
  value,
  type,
  placeholder = '',
  warningText,
  disabled,
  name,
  onClick,
  onChange,
}: InputProps) {
  return (
    <StyledInput warningText={warningText} className={`${className}`}>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        onClick={onClick}
        name={name}
      />
      {warningText && <div className="warning">{warningText}</div>}
    </StyledInput>
  );
}
