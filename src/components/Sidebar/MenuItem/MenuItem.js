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
            <div>
                <div
                    className="menuItem"
                    onMouseEnter={() => { this.handleHover(); }}
                    onMouseLeave={() => { this.handleHover(); }}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MenuItem;