import { useState } from 'react';

export interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  params: undefined;
}

export const useModalState = (): ModalState => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen: isOpen,
    openModal: () => {
      setIsOpen(true);
    },
    closeModal: () => {
      setIsOpen(false);
    },
    params: undefined,
  };
};
