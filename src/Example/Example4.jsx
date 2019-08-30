import React, { Component } from 'react'
class Child extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state={
           count:0                                                                                                                                                                                                                        
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }
    componentDidMount(){
        //console.log(this.props)
    }
    add=()=>{
        let count = this.state.count+10;
        this.setState({count},()=>{
             this.props.fatherFun(this.state.count)
        })
       
    }
    render(){
        return (
            <>
            {this.props.children}
            <button onClick={this.add}>增加</button>
            {/* <h1>{this.state.count}</h1> */}
            {/* <h3 style={{color:this.props.color}}>我是子组件</h3> */}
            </>
        )
    }
}
export  class Example4 extends Component {
    constructor(props){
        super(props)
        this.state={
            childCount:0
        }
    }
    fatherFun=(childCount)=>{
        this.setState({childCount})
    }
    render() {
        return (
            <>
                <h1>我是父组件</h1>
                <Child color="red" fatherFun={this.fatherFun}>
                    <h1>我是子组件</h1>
                    <h3>我是小一号</h3>
                    <h1>我要显示子组件的值：{this.state.childCount}</h1>
                </Child>
            </>
        )
    }
}
