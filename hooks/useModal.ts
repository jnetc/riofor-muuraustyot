import { useContext, createContext } from 'react';

type State = {
  modal: { active: boolean; data?: {} | null };
  openModal: (active: { active: boolean; data?: {} | null }) => void;
};
const state: State = {
  modal: { active: false },
  openModal: object => object,
};

export const ModalContext = createContext(state);

export const useModal = () => {
  return useContext(ModalContext);
};
