import React, { Component } from 'react'
export default class Example2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "张三",
            list: [
                { name: "lisi", age: 22, sex: "男" },
                { name: "jack", age: 25, sex: "女" },
                { name: "mark", age: 33, sex: "男" },
            ],
            demoObj: {
                name: "Jian",
                age: 27,
                sex: "男"
            }
        }
    }
    componentDidMount() {
        // this.state.name="李四"; 这种写法是错误的
        this.setState({name:"李四"})
        let tempObj = this.state.demoObj;//深层更新state值
            tempObj.name ="shshdjjsd";
        this.setState({demoObj:tempObj})
    }
    render() {
        let listHtml = this.state.list.map((item, index) => {
            console.log(item)
            if (item.sex === "女") {
                return (
                    <React.Fragment key={index}>{item.name}</React.Fragment>
                    // <li key={index} style={{ color: "red" }}>姓名{item.name} 年龄{item.age} 性别{item.sex}</li>
                )
            } else {
                return (
                    <li key={index}>姓名{item.name} 年龄{item.age} 性别{item.sex}</li>
                )
            }

        })
        return (
            <>
                <h1>{this.state.name}</h1>
                <ul>{listHtml}</ul>
                <h3>姓名：{this.state.demoObj.name} 年龄：{this.state.demoObj.age}性别{this.state.demoObj.sex}</h3>
            </>
        )
    }
}
