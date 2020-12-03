import { useCallback, useContext } from 'react';
import { ReactHookStoreContext } from './../provider/index';

import { UpdateMode } from '../types';

export interface UpdateStoreOptions {
  mode?: UpdateMode;
  parent?: string;
}

const defaults = {
  mode: UpdateMode.Union,
  parent: '',
};

export function useUpdateStore({
  mode,
  parent,
}: UpdateStoreOptions = defaults) {
  const { updateState } = useContext(ReactHookStoreContext);

  return useCallback(
    (path: string, value: unknown): void =>
      updateState([parent ? `${parent}.${path}` : path, value, mode]),
    []
  );
}
