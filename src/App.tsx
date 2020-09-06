import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Trips } from './features/trips/Trips';
import { SWRConfig } from 'swr'


//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())


function App() {
  return (
    <SWRConfig value={{ fetcher }} >
      <main>
        <Trips></Trips>
      </main>
    </SWRConfig>
  );
}

export default App;
