import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Tab from './Tab';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        let tabClasses = classNames("col-12", "tabList");

        let tabContent = classNames("col-12", "tabContent")

        return (
            <>
                <ol className={tabClasses}>
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className={tabContent}>
                    <div className="row">
                        {children.map((child) => {
                            if (child.props.label !== activeTab) return undefined;
                            return child.props.children;
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default Tabs;