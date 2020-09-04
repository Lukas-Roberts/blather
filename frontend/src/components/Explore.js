import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryUsers, getSelectedUser, clearSelectedUser } from '../actions/userActions'
import { Redirect } from 'react-router-dom';

class Explore extends Component {
    state = {
        query: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        if(event.target.value !== ''){
            this.props.queryUsers(event.target.value)
        }
    }

    handleClick = event => {
        event.preventDefault()
        this.props.getSelectedUser(event.target.value)
    }

    componentDidMount() {
        this.props.clearSelectedUser()
    }

    componentWillUnmount() {
        this.setState({
            query: ''
        })
    }

    render() {
        return this.props.selectedUser ?
        (<Redirect to={`/explore/user/${this.props.selectedUser.id}`} />)
        :
         (
            this.props.loggedIn ?
            <div className='search'>
                <form>
                    <input onChange={this.handleChange} name='query' placeholder='Explore' value={this.state.query}/>
                    {this.props.results ?
                        this.props.results.map(result => {
                            return(
                                <div className='results'>
                                    <button onClick={this.handleClick} value={result.id}>{`${result.name} @${result.username}`}</button>
                                </div>
                            )
                        })
                    :
                        (<></>)
                    }
                </form>
            </div>
            :
            (<Redirect to='/'/>)
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        results: state.results,
        selectedUser: state.selectedUser
    }
}

const mapDispatchToProps = dispatch => ({
    queryUsers: query => {dispatch(queryUsers(query))},
    getSelectedUser: userId => {dispatch(getSelectedUser(userId))},
    clearSelectedUser: () => dispatch(clearSelectedUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Explore)