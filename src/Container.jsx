import React, { Component } from 'react'
import Example1 from './Example/Example1';
import Example2 from './Example/Example2';
import Example3 from './Example/Example3';
//import {Example4} from './Example/Example4';
import Example5 from './Example/Example5';
import Example6 from './Example/Example6';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Container extends Component {
    render() {
        return (
            <div>
                {/* <Example5 /> */}
                {/* <Example3/> */}
                {/* <Example2 /> */}
                {/* Hello World
                <Example1/> */}
                <Router>
                    <ul>
                        <li>
                            <Link to="/list/example6">跳转到六</Link>
                        </li>
                        <li><Link to="/list/example7">跳转到七</Link></li>
                    </ul>
                    <Route path="/list/:id" exact component={Example6} />
                </Router>
            </div>
        )
    }
}
