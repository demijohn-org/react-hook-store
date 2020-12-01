import { useContext } from 'react';
import { stringPathToArray } from './../utilities/stringPathToArray';
import { ReactHookStoreContext } from './../provider/index';
import { pathOr } from 'ramda';
import { UpdateMode } from '../types';

export function useStore<T>(path: string, fallbackValue: T): T {
  const { state } = useContext(ReactHookStoreContext);
  return pathOr(fallbackValue, stringPathToArray(path), state);
}

export function useGetStore() {
  const { state } = useContext(ReactHookStoreContext);
  return (path: string, fallbackValue: any) =>
    pathOr(fallbackValue, stringPathToArray(path), state);
}

export interface UpdateStoreOptions {
  mode?: UpdateMode;
}

const defaults = {
  mode: UpdateMode.Union,
};

export function useUpdateStore({ mode }: UpdateStoreOptions = defaults) {
  const { updateState } = useContext(ReactHookStoreContext);
  return (path: string, value: unknown): void =>
    updateState([path, value, mode]);
}
