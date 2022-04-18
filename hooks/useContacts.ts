import { useContext, createContext } from 'react';

type State = {
  contacts: { active: boolean };
  openContacts: (obj: { active: boolean }) => void;
};
const state: State = {
  contacts: { active: false },
  openContacts: object => object,
};

export const ContactsContext = createContext(state);

export const useContacts = () => {
  return useContext(ContactsContext);
};
