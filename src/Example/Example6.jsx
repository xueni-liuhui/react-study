import React, { Component } from 'react'

export default class Example6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "我是Example6",
        }
    }
    componentDidMount() {
        let path = this.props.location.pathname;
            path = path.substring(path.lastIndexOf("/")+1)
            if(path === "example7"){
                this.setState({text:"我是Example7"})
            }
        console.log(path,this.props,  "componentDidMount")
    }
    componentWillReceiveProps(nextProps) {
        let path = nextProps.location.pathname;
            path = path.substring(path.lastIndexOf("/")+1)
            if(path === "example7"){
                this.setState({text:"我是Example7"})
            }else if(path === "example6"){
                this.setState({text:"我是Example6"})
            }
        console.log(nextProps,"componentWillReceiveProps")
    }
    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}
