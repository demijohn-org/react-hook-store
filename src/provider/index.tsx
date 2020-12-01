import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ReactHookStoreContext = createContext<any>({});

interface StoreProviderProps {
  children?: JSX.Element | JSX.Element[];
  initialState?: Record<string, unknown>;
  verbose?: boolean;
}

const defaults = {
  verbose: true,
  initialState: {},
};

export const StoreProvider: React.FC<StoreProviderProps> = ({
  children,
  initialState,
  verbose,
} = defaults) => {
  const [state, updateState] = useReducer(reducer({ verbose }), initialState);

  return (
    <ReactHookStoreContext.Provider value={{ state, updateState }}>
      {children}
    </ReactHookStoreContext.Provider>
  );
};
