<div align="center">
    <h2 align="center">
        <a href="https://demijohn.io" title="React Hook Store">
            React Hook Store
        </a>
    </h2>
</div>

<p align="center">Simplistic store for your React app. Based on React hooks.</p>

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