import React from 'react';
import { initInjector, add, addInteractive } from './zones';

const comp = (props) => {
    return <div>I'm Injected, But I'm using props from my parent (props.extId = {props.extId})</div>;
}

class Nothing extends React.Component
{
    componentDidMount() {
        console.log('I don\'t even have to render');
    }
    render() {
        return null;
    }
}

initInjector('test')
.then((res) => {
    add('test', 'injected', comp);
    setTimeout(() => {
        add('test', 'nothing', Nothing)
    }, 1000);
    return addInteractive('test', 'clock');
})
.then((int) => {
    let state = false;
    int.innerHTML = "<h5>This is my node now.</h5>"
    setInterval(() => {
        state = !state;
        int.innerHTML = state ? "&#127881;&#127881;&#127881;&#127881;" : "&#127866;&#127866;&#127866;&#127866;";
        int.style.fontSize = "32px";
    }, 1000)
})