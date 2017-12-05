import React from 'react';
import { onInit, add } from './zones';

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

onInit('test')
.then((e) => {
    add('test', 'injected', comp);
    setTimeout(() => {
        add('test', 'nothing', Nothing)
    }, 1000);
})