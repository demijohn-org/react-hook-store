import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StoreProvider } from '../dist';
import { Root } from './app';

const App = () => {
  return (
    <StoreProvider verbose initialState={{ greetings: 'hola' }}>
      <Root />
    </StoreProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
