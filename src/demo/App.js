import React, { Component } from 'react'
import Button from '../lib'

class App extends Component {
    state = {
        btnSend: ''
    }

    doAsyncMethod = () => {
        setTimeout(() => {
            this.setState({
                btnSend: 'finished'
            }, () => console.log('finished'))
        }, 3000)
    }

    handleClick = () =>
        this.setState({ btnSend: 'loading'},
            () => this.doAsyncMethod()
        )

    render(){
        const { btnSend } = this.state
        return (
            <div>
                <Button
                    state={btnSend}
                    onClick={this.handleClick}>hello</Button>
            </div>
        )
    }
}

export default App
