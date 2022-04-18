import { useContext, createContext } from 'react';
// Types
import { ProjectType } from '@Types';

interface DetailsType {
  active: boolean;
  data?: ProjectType<string> | null;
}

type State = {
  details: DetailsType;
  openDetails: (obj: DetailsType) => void;
};
const state: State = {
  details: { active: false },
  openDetails: object => object,
};

export const DetailsContext = createContext(state);

export const useDetails = () => {
  return useContext(DetailsContext);
};
