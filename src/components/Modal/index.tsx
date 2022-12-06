import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  text?: string;
  close?: string;
  onClose: () => void;
}

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40rem;
  height: 20rem;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  background-color: var(--white);
  color: var(--gray3);
  text-align: center;
  z-index: 10;

  & .modal-text {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  & .close {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    font-size: 2rem;
    width: 50%;
    height: 5rem;
    background-color: var(--primary-300);
    color: var(--gray3);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9;
`;

export default function Modal({ text, close, onClose }: ModalProps) {
  return (
    <>
      <StyledModal>
        <div className="modal-text">{text}</div>
        <div onClick={onClose} className="close">
          {close}
        </div>
      </StyledModal>
      <Overlay className="cursor-pointer" onClick={onClose} />
    </>
  );
}
