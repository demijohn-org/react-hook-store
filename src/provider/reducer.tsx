import { assocPath, mergeDeepRight } from 'ramda';
import { stringPathToArray } from '../utilities/stringPathToArray';
import { logger } from '../utilities/logger';
import { UpdateMode } from '../types';

interface ReducerProps {
  verbose?: boolean;
  mode?: UpdateMode;
}

export const reducer = ({ verbose, mode }: ReducerProps) => (
  state: Record<string, unknown>,
  [path, value]: [string, unknown]
): any => {
  let nextState = assocPath(stringPathToArray(path), value, state);
  if (mode === UpdateMode.Merge) {
    nextState = mergeDeepRight(state, nextState);
  }
  verbose && logger({ path, previousState: state, nextState, value });
  return nextState;
};
