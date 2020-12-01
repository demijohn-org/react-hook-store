import { useContext } from 'react';
import { stringPathToArray } from './../utilities/stringPathToArray';
import { ReactHookStoreContext } from './../provider/index';
import { pathOr } from 'ramda';

export function useGetStore() {
  const { state } = useContext(ReactHookStoreContext);
  return (path: string, fallbackValue: any) =>
    pathOr(fallbackValue, stringPathToArray(path), state);
}
