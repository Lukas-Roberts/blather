import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Explore extends Component {
    state = {
        query: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            results: []
        })
        if(event.target.value !== ''){
            this.searchDatabase(event)
        }
    }

    searchDatabase = (event) => {
        let search = event.target.value
        fetch(`http://localhost:3001/users/${search}`, {
            method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
        })
            .then(resp => resp.json())
            .then(json => json.forEach(result => {
                    this.setState({
                        results: [...this.state.results, [`${result.full_name} @${result.username}`]]
                    })
                })
            )
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(event.target.value)
    }

    render() {
        return (
            this.props.loggedIn ?
            <div className='search'>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='query' placeholder='Explore' value={this.state.query}/>
                    <button type='submit'>Search</button>
                    {this.state.results ?
                        this.state.results.map(result => {
                            return(
                                <div className='results'>
                                    <p>{result}</p>
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
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(Explore)