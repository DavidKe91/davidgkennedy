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
            <footer className={classes.footer}>
                <div className="col-sm-12 col-md-6"><h3>David Kennedy</h3></div>
                <div className="col-sm-12 col-md-6">2</div>
                <div className="col-sm-12 col-md-6">
                    <small>Copyright &copy; {this.footerYear()} by David Kennedy</small>
                </div>
                <div className="col-sm-12 col-md-6">2</div>
            </footer>
        );
    }
}

export default Footer;