import React, { Component } from 'react';
import { clearSelectedBleat } from '../actions/bleatActions'
import { addComment } from '../actions/commentActions'
import { connect } from 'react-redux';
import '../css/BleatPage.css'

class BleatPage extends Component {
    state= {
        comment: ''
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const comment = {
            user_id: this.props.user.id,
            bleat_id: this.props.bleat.id,
            content: this.state.comment
        }
        this.props.addComment(comment)
        this.setState({
            comment: ''
        })
    }
    
    componentWillUnmount() {
        this.props.clearSelectedBleat()
    }

    render() {
        return(
            <div className='bleatPageContainer'>
                <div className='bleatPage'>
                    <div className='bleat'>
                        <h5 className='name'>{this.props.bleat.user.name}</h5>
                        <h5 className='username'>{` @${this.props.bleat.user.username}`}</h5>
                        <p>{this.props.bleat.content}</p>
                        <form onSubmit={this.handleSubmit} className="textWrapper">
                            <input className='comment' onChange={this.handleChange} onSubmit={this.handleSubmit} name='comment' value={this.state.comment} placeholder='Comment'/>
                        </form>
                        {this.props.bleat.comments.map(comment => {
                            return(
                                <div className='bleat'>
                                    <h5 className='name'>{comment.user.name}</h5>
                                    <h5 className='username'>{` @${comment.user.username}`}</h5>
                                    <p>{comment.content}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearSelectedBleat: () => dispatch(clearSelectedBleat()),
        addComment: comment => dispatch(addComment(comment))
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(BleatPage);