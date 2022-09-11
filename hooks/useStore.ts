import { useContext, createContext } from 'react';
import { DataType } from '@Types';

type State = {
  data: DataType | null;
};
const state: State = {
  data: null,
};

export const Store = createContext(state);

export const useStore = () => {
  return useContext(Store);
};
