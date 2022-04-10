import { useContext, createContext } from 'react';
import { LanguagesType, DataType } from '@Types';

type State = {
  language: LanguagesType;
  languages: Array<string>;
  data: DataType | null;
};
const state: State = {
  language: 'fi',
  languages: [],
  data: null,
};

export const Store = createContext(state);

export const useStore = () => {
  return useContext(Store);
};
