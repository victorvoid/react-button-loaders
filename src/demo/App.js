import React, { Component } from 'react'
import { injectGlobal } from 'styled-components';
import Button from '../lib'
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Heebo:400,800');
  button span {
    font-family: 'Heebo', sans-serif;
    font-weight: 700;
  }
`


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
                    onClick={this.handleClick}>Send</Button>
            </div>
        )
    }
}

export default App
