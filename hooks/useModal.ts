import { useContext, createContext } from 'react';

type State = {
  modal: { active: boolean };
  openModal: (active: { active: boolean }) => void;
};
const state: State = {
  modal: { active: false },
  openModal: object => object,
};

export const Modal = createContext(state);

export const useModal = () => {
  return useContext(Modal);
};
