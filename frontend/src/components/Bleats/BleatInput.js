import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBleat } from '../../actions/bleatActions'

class BleatInput extends Component {

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
        this.props.createBleat({user_id: this.props.user_id, content: this.state.content})
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

const mapStateToProps = state => {
    return {
        user_id: state.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createBleat: bleat => {dispatch(createBleat(bleat))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BleatInput)