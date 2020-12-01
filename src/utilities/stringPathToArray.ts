import { split } from 'ramda';

export const stringPathToArray = (path: string): string[] => {
  return split('.', path);
};
