import * as React from 'react';
import { useStore, useUpdateStore } from '../../dist';

export const Root = () => {
  const greetings = useStore<string>('greetings', 'fallback greeting');
  const updateState = useUpdateStore();
  return (
    <>
      <h1> {greetings} </h1>
      <h4>What do you want to say?</h4>
      <button onClick={ () => updateState('greetings', 'ahoy')} > say hello </button> 
      
      <input type="text" value={greetings} onChange={ (event: any) => updateState('greetings', event.target.value)} />
    </>
  );
};
