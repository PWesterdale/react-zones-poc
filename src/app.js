import React, { Component } from 'react';
import DOM from 'react-dom';
import Test from './Components/Test';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h4>Proof of Concepts</h4>
                <Test />
            </div>
        );
    }
}

DOM.render(<App />, document.querySelector('.app'));