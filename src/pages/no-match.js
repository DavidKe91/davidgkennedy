import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
    <>
        <div className="notFoundContainer">
            <div className="content">
                <h1>¯\_(ツ)_/¯</h1>
                <p>I can't seem to find that page. Sorry!</p>
                <Link to="/"><button>Return to the home page</button></Link>
            </div>
        </div>
    </>
);

export default NoMatch;
