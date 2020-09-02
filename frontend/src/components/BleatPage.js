import React, { Component } from 'react';
import { clearSelectedBleat } from '../actions/bleatActions'
import { connect } from 'react-redux';

class BleatPage extends Component {
    
    componentWillUnmount() {
        this.props.clearSelectedBleat()
    }

    render() {
        console.log(this.props)
        return(
        <div className='bleatPage'>
            <h5 className='name'>{this.props.bleat.user.name}</h5>
            <h5 className='username'>{` @${this.props.bleat.user.username}`}</h5>
            <p>{this.props.bleat.content}</p>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearSelectedBleat: () => dispatch(clearSelectedBleat())
    }
}

export default connect(null ,mapDispatchToProps)(BleatPage);