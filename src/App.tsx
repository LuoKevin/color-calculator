import React from 'react';
import './App.css';
import ColorApp from './color/components/ColorApp'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>Color Calculator</div>
            </header>
            <div className="App-body">
                <ColorApp/>
            </div>
        </div>
    );
}

export default App;
