import React, { Component } from 'react'
import Button from '../lib'


class App extends Component {
    state = {
        loading: false,
        finished: false
    }

    handleClick = () =>
        this.setState(
            ({ loading }) => ({loading: true})
        )

    handleFinished = () =>
        this.setState(
            ({ finished, loading }) => ({loading: false, finished: true})
        )

    render(){
        const { loading, finished } = this.state
        return (
            <div>
                <Button
                    loading={loading}
                    finished={finished}
                    onClick={this.handleClick}
                    onFinished={this.handleFinished}>hello</Button>
            </div>
        )
    }
}

export default App
