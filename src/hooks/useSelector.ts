import { isNil } from 'ramda';
import { useContext } from 'react';
import { ReactHookStoreContext } from '../provider';

export function useSelector<T>(selector: (state: any) => T): T | undefined;
export function useSelector<T>(
  selector: (state: any) => T,
  fallbackValue: T
): T;
export function useSelector<T>(
  selector: (state: any) => T,
  fallbackValue?: T | undefined
) {
  const { state } = useContext(ReactHookStoreContext);
  if (typeof selector === 'function') {
    try {
      const value = selector(state);
      return isNil(value) ? fallbackValue : value;
    } catch (error) {
      console.warn(
        `useSelector: Cannot find value in given path. Falling back.`,
        selector
      );
      return fallbackValue;
    }
  } else {
    console.warn(
      'useSelector: Must be specified function as selector. E.g.: state => state.data.name'
    );
    return fallbackValue;
  }
}
