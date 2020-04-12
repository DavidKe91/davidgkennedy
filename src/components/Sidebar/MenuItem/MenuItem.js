import React, { Component } from 'react';

class MenuItem extends Component {
    state = {
        hover: false,
    }

    handleHover() {
        this.setState({
            hover: !this.state.hover
        });
    }

    render() {
        return (
            <li
                className="menuItem"
                onMouseEnter={() => { this.handleHover(); }}
                onMouseLeave={() => { this.handleHover(); }}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </li>
        );
    }
}

export default MenuItem;