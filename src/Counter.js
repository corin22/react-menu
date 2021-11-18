import React, {Component} from 'react'
import App from './App'

class Counter extends Component{
    state = {
        count: 0
    }
    increase = () => {
        const{count} = this.state
        console.log(`before updateing state: ${count}`)
        this.setState((prevState) => {
            return { count: prevState() + 1}
        })
        console.log(`after updateing state: ${count}`)
    }
    // increaseMultiple = () => {
    //     this.increase()
    //     this.increase()
    //     this.increase()

    //     console.log(`right after event: ${this.state.count}`)
    // }
    render(){
        console.log('counter')
        const {count} = this.state
        console.log(`state in render function: ${count}`)
        return(
            <>
                <h1>{count}</h1>
                <button type="button" onClick={this.increaseMultiple}>increase count</button>
            </>
        )
    }
}

export default Counter
