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
        this.setState({
            content: ''
        })
        fetch('http://localhost:3001/bleats', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
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