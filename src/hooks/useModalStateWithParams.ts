import { useState } from 'react';

import { useModalState } from '.';

export interface ModalStateWithParams<Params> {
  isOpen: boolean;
  params: Params | null;
  openModal: (params: Params | null) => void;
  closeModal: () => void;
}

export const useModalStateWithParams = <
  Params extends Record<string, unknown>
>(): ModalStateWithParams<Params> => {
  const { isOpen, openModal, closeModal } = useModalState();
  const [params, setParams] = useState<Params | null>(null);
  const isOpenWithParams = Boolean(params && isOpen);

  return {
    isOpen: isOpenWithParams,
    params,
    openModal: (params: Params | null) => {
      setParams(params);
      openModal();
    },
    closeModal: () => {
      setParams(null);
      closeModal();
    },
  };
};
