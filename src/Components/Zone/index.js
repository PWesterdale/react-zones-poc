import React, { Component } from 'react';
import { initHost, addListener, TYPES, confirmInteractive } from '../../zones';

class InteractiveComponent extends React.Component {
    componentDidMount() {
        confirmInteractive(this.props.zone, this.node);
    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return <div ref={(node) => {this.node = node}} />
    }
}

export default class Zone extends Component {
    componentDidMount() {
        initHost(this.props.zone, this);
    }
    render() {
        if(!this.zone) return null;
        return this.zone.children.reduce((acc, child) => {
            switch(child.type) {
                case TYPES.COMPONENT:
                    acc.push(<child.c key={child.key} {...this.props} />)
                break;
                case TYPES.INTERACTIVE:
                    acc.push(<InteractiveComponent key={child.key} {...this.props} />)
                break;
            }
            return acc;
        }, [])
    }
}