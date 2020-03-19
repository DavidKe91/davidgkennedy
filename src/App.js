import React from 'react';
import './App.css';
import Icons from './components/Icons/Icons';
import Introduction from './components/Introduction/Introduction';
import Experience from './components/Experience/Experience';

function App() {
    return (
        <div className="App">
            <Icons />
            <Introduction />
            <Experience />
        </div>
    );
}

export default App;
