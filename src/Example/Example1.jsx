import React, { Component } from 'react'
import './Example1.css';//这是引用样式
export default class Example1 extends Component {
    render() {
        return (
            <>
            {/* 第一种样式写法 */}
                <h1 style={styles.colorStyle}>
                    这是第一个组件
                </h1>
            <div style={styles.divStyle}></div>
            {/* 第二种样式写法 */}
             <p style={{fontSize:"24px",paddingLeft:"20px",paddingTop:50}}>第二种样式写法</p>
             <div className="div3"></div>
            </>
        )
    }
}
const styles = {
    colorStyle: {
        color: "red"
    },
    divStyle:{
        width:"100px",//width : 100
        height:100,
        backgroundColor:"green"
    }
}