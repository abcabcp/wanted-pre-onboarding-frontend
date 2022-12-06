import React from 'react';
import styled from 'styled-components';

interface WrapProps {
  children: React.ReactNode;
  className?: string;
  css?: any;
}

const StyledLayout = styled.div`
  max-width: 56.25rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3.125rem;
`;

export default function Layout({ children, className }: WrapProps) {
  return <StyledLayout className={className}>{children}</StyledLayout>;
}
