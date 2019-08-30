import React, { Component } from 'react'

export default class Example3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            text:"修改"
        }
        this.dev=this.dev.bind(this)//第三种绑定this
    }
    add=(num)=>{//第一种绑定this方法
        console.log(num)
       this.setState({count:this.state.count+num},()=>{
           console.log("同步："+this.state.count)
       }) 
       console.log(this.state.count)//异步
    }
    sub(num){//第二种绑定this方法
        this.setState({count:this.state.count-num})
    }
    dev(){
        console.log(this)
        this.setState({count:this.state.count*10})
    }
    change=(e)=>{
        console.log(e.target.value)
        this.setState({text:e.target.value})
    }
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.add(3)}>增加</button>
                <button onClick={this.sub.bind(this,2)}>减少</button>
                <button onClick={this.dev}>乘十</button>
                {/* <input  onChange={this.change}/> */}
                <input value={this.state.text}  onChange={(e)=>{this.setState({text:e.target.value})}}/>
                <p>{this.state.text}</p>
            </>
        )
    }
}
