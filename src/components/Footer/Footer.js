import React, { Component } from 'react';
import classes from './Footer.module.css';

class Footer extends Component {
    footerYear = () => {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        return currentYear;
    }
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-3">Copyright &copy; {this.footerYear()} by David Kennedy</div>
                        <div className="col-6">2</div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;