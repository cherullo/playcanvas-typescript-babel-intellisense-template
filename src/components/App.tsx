import * as React from 'react';
import './App.css';
import Hello from './hello/Hello';
import HelloJS from './hello/HelloJS';

import { hot } from 'react-hot-loader/root'

const TEXT = 'text goes here';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React {TEXT}</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Hello name="Typescript" />
      <HelloJS />
    </div>
  );
}

export default hot(App);