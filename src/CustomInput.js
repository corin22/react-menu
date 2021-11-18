import React, { Component } from 'react'
import words from './dummyData'
import Button from './Button'

class CustomInput extends Component{  
    constructor(props){
        super(props)
        this.fileInput = React.createRef(); // ref 생성하기
    }
    // focusInput = () => {
    //     console.log(this.textInput.current)
    //     this.textInput.current.focus() // ref 사용하기
    openFileUpLoadWindow = () => {
        console.log(this.fileInput.current)
        this.fileInput.current.click()
    }
    render(){
        return(
            <div>
                <h1>file upload</h1>
                <Button handleClick={this.openFileUpLoadWindow}>Upload</Button>
                <input type="file" style={{visibility:'hidden'}} ref={this.fileInput}></input>
                {/* ref 설정하기
                <input type="text" ref={this.textInput}></input>
                <button onClick={this.focusInput}>focus input</button> */}
            </div>
        )
    }
}
export default CustomInput