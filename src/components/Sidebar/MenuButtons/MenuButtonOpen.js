import React, { Component } from 'react';
import './MenuButton.css';

class MenuButtonOpen extends Component {
    state = {
        open: this.props.open ? this.props.open : false,
        color: this.props.color ? this.props.color : 'black',
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }

    handleClick() {
        this.setState({ open: !this.state.open });
    }
    render() {
        return (
            <div
                className="sidebarBtn"
                onClick={this.props.onClick ? this.props.onClick :
                    () => { this.handleClick(); }}><i className="fas fa-bars"></i>
            </div>
        );
    }
}

export default MenuButtonOpen;