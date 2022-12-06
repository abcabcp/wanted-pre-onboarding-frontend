import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  className?: string;
  borderColor?: string;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.8rem;
  border: 0.125rem solid var(--gray3);
  border-radius: 1rem;
  background: var(--primary-300);
  outline: none;
  color: var(--white);
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.5;
  transition: 300ms;

  &:disabled {
    cursor: not-allowed;
    background: var(--gray1);
  }
`;

export default function Button({
  text,
  className = '',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
}
