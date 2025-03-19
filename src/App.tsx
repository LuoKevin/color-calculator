import React from 'react';
import './App.css';
import ColorApp from './color/components/ColorApp'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Color Calculator
                <ColorApp/>
            </header>
        </div>
    );
}

export default App;
