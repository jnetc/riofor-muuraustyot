import { useContext, createContext } from 'react';
// Types
import { ProjectType } from '@Types';

type State = {
  modal: { active: boolean; data?: ProjectType<string> | null };
  openModal: (active: {
    active: boolean;
    data?: ProjectType<string> | null;
  }) => void;
};
const state: State = {
  modal: { active: false },
  openModal: object => object,
};

export const ModalContext = createContext(state);

export const useModal = () => {
  return useContext(ModalContext);
};
