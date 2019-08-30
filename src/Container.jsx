import React, { Component } from 'react'
import Example1 from './Example/Example1';
import Example2 from './Example/Example2';
export default class Container extends Component {
    render() {
        return (
            <div>
                <Example2 />
                {/* Hello World
                <Example1/> */}
            </div>
        )
    }
}
