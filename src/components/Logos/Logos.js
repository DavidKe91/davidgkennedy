import React, { Component } from 'react';
import './Logos.css';

class Logos extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img className="img-fluid clientLogo" src="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/Logos/hn-logo.png" alt="Harvey Norman" />
                    </div>
                    <div className="col-3">
                        <img className="img-fluid clientLogo" src="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/Logos/originate-logo.png" alt="Originate" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Logos;