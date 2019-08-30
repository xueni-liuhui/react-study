import React, { Component } from 'react'
import fetchData from '../server';
class Children extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return(
            <>
             <h1>{this.props.num}</h1>
            </>
        )
    }
}
export default class Example5 extends Component {//生命周期
    constructor(props) {
        super(props)
        this.state = {
            count: 11458,
            num:10
        }
    }
    getData = async () => {
        const response = await fetchData();
        console.log(response)
        this.setState({ count: response.data.loginCount })
    }
    componentDidMount() {//发起请求，获取地址栏的一些参数
        this.getData()
    }
    componentWillReceiveProps(nextProps) {

    }
    // shouldComponentUpdate(nextProps, nextState) {//必须要有返回值 true或者false
    //     // 主要用来优化性能
    //     if (this.state.count !== nextState.count) {
    //         console.log(this.state.count, nextState.count)
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    componentWillUnmount() {//组件将要卸载，清理定时器，事件监听

    }
    render() {
        console.log(this.state.count)
        return (
            <div>
                <h1>{this.state.count}</h1>
                <h1>{this.state.num}</h1>
                <Children num={this.state.num}/>
                <button onClick={()=>{this.setState({num:this.state.num+10})}}>加法</button>
            </div>
        )
    }
}
