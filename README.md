<div align="center">
    <h1 align="center">
        <a href="https://demijohn.io" title="React Hook Store">
            React Hook Store
        </a>
    </h1>
</div>

<p align="center">Easy-to-use state management based on React hooks..</p>

<div align="center">

[![npm downloads](https://img.shields.io/npm/dm/@demijohn/react-hook-store?style=for-the-badge)](https://www.npmjs.com/package/@demijohn/react-hook-store)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@demijohn/react-hook-store?style=for-the-badge)](https://www.npmjs.com/package/@demijohn/react-hook-store)
[![NPM](https://img.shields.io/npm/l/@demijohn/react-hook-store?style=for-the-badge)](https://www.npmjs.com/package/@demijohn/react-hook-store)
[![npm](https://img.shields.io/npm/v/@demijohn/react-hook-store?label=version&style=for-the-badge)](https://www.npmjs.com/package/@demijohn/react-hook-store)

</div>




## Install

    npm install @demijohn/react-hook-store

    yarn add @demijohn/react-hook-store

## Quickstart

```jsx
// App.jsx
import React from 'react';
import { StoreProvider } from '@demijohn/react-hook-store';
import { HelloComponent} from './HelloComponent.jsx'

// design initial state
const initialState = {  
    greetings: 'hello' 
};

function App() {
    // use provider to install store context
    return (
        <StoreProvider verbose initialState={initialState}> 
            <HelloComponent /> 
        </StoreProvider>
    );
}


// HelloComponent.jsx
import React from 'react';
import { useStore, useUpdateStore } from '@demijohn/react-hook-store';

export function HelloComponent() {
    // get value from store 
    const greetings = useStore('greetings');

    // get function to update store
    const updateState = useUpdateStore();
    
    const handleClick = () => {
        updateState('greetings', 'Aloha!');
    };

    return (
        <div>
            <h1> {greetings} </h1>
            <h4>What do you want to say?</h4>
            <input type="text" onChange={ event => updateState('greetings', event.target.value)} />
            <button onClick={handleClick}> Say Aloha! </button> 
        </div>
    );  
}
```    