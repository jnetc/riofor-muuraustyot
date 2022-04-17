import { FC } from 'react';
import { Building } from './Building';
import { House } from './House';
import { Office } from './Office';
// Type
import { ServiceIconsType } from '@Types';

export const Icons: FC<{ icon: ServiceIconsType }> = ({ icon }) => {
  const icons = {
    building: <Building />,
    house: <House />,
    office: <Office />,
  };
  return <>{icons[icon]}</>;
};
