import React, { Component } from 'react'
import Example1 from './Example/Example1';
import Example2 from './Example/Example2';
import Example3 from './Example/Example3';
//import {Example4} from './Example/Example4';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Container extends Component {
    render() {
        return (
            <div>
                <Example2/>
                {/* <Example3/> */}
                {/* <Example2 /> */}
                {/* Hello World
                <Example1/> */}
            </div>
        )
    }
}
