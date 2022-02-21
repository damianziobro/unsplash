import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.scss';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Counter />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>home</div>}/>
          <Route path="/:imageId" element={<div>id</div>}/>
          <Route path="*" element={<div>not found</div>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
