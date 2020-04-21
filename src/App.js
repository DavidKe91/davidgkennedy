import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Container from './components/Container/Container';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Container />
            </ScrollToTop>
        </Router>
    );
}

export default App;
