import { assocPath } from 'ramda';
import { stringPathToArray } from '../utilities/stringPathToArray';
import { logger } from '../utilities/logger';

interface ReducerProps {
  verbose?: boolean;
}

export const reducer = ({ verbose }: ReducerProps) => (
  state: Record<string, unknown>,
  [path, value]: [string, unknown]
): any => {
  const nextState = assocPath(stringPathToArray(path), value, state);
  verbose && logger({ path, previousState: state, nextState, value });
  return nextState;
};
