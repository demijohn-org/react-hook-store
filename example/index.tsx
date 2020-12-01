import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StoreProvider } from '../dist';
import { Root } from './src';

const App = () => {
  return (
    <StoreProvider verbose initialState={{ greetings: 'hola', a: {b: { c: 343}} }}>
      <Root />
    </StoreProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
