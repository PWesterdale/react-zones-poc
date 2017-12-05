import React, { Component } from 'react';
import Zone from '../Zone';

export default class Test extends Component {
    render() {
        return (
            <section className="expl">
                <h5>I'm a test component - I allow injection</h5>
                <Zone extId="12" zone="test"/>
            </section>
        )
    }
}