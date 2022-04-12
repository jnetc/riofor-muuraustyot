import { ProjectType } from '@Types';

export const compare = (a: ProjectType<string>, b: ProjectType<string>) => {
  const getNumsA = a.releaseDate.split('/');
  const getNumsB = b.releaseDate.split('/');
  const yearA = parseInt(getNumsA[1]);
  const yearB = parseInt(getNumsB[1]);
  const monthA = parseInt(getNumsA[0]);
  const monthB = parseInt(getNumsB[0]);

  if (yearA > yearB || (yearA === yearB && monthA > monthB)) {
    return -1;
  } else {
    return 1;
  }
};
