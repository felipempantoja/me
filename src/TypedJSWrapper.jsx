import React, { Component } from 'react';
import Typed from 'typed.js';

class TypedJSWrapper extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const { strings } = this.props;
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            startDelay: 1000,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    render() {
        return (
            <span style={{ whiteSpace: 'pre' }} ref={el => { this.el = el; }} />
        );
    }
}

export default TypedJSWrapper;