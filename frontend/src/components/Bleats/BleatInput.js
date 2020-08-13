import React, { Component } from 'react';

export default class BleatInput extends Component {

    state = {
        content: ''
    }

    handleChange = event => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

    }

    render () {
        return (
            <div className='bleat'>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='content' placeholder="What's new?" value={this.state.content} />
                    <button type='submit'>Bleat</button>
                </form>
            </div>
        )
    }
}