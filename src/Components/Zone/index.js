import React, { Component } from 'react';
import { init, addListener } from '../../zones';

export default class Zone extends Component {
    componentDidMount() {
        init(this, this.props.zone);
    }
    render() {
        return (
            this.zone && this.zone.children ? this.zone.children.map((child) => {
                return <child.c key={child.key} {...this.props} />
            }) : null
        )
    }
}