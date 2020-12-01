import { pathOr } from 'ramda';
import { useContext } from 'react';
import { ReactHookStoreContext } from '../provider';
import { stringPathToArray } from '../utilities/stringPathToArray';

export function useStore<T>(path: string): T | undefined;
export function useStore<T>(path: string, fallbackValue: T): T;
export function useStore<T>(path: string, fallbackValue?: T | undefined) {
  const { state } = useContext(ReactHookStoreContext);
  return pathOr(fallbackValue, stringPathToArray(path), state);
}
