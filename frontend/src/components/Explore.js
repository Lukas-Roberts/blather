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
                        results: [...this.state.results, [`${result.name} @${result.username}`, result.id]]
                    })
                })
            )
    }

    handleClick = event => {
        event.preventDefault()
        console.log(event.target.value)
        fetch(`http://localhost:3001/users/${event.target.value}`)
            .then(resp => resp.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            this.props.loggedIn ?
            <div className='search'>
                <form>
                    <input onChange={this.handleChange} name='query' placeholder='Explore' value={this.state.query}/>
                    {this.state.results ?
                        this.state.results.map(result => {
                            return(
                                <div className='results'>
                                    <button onClick={this.handleClick} value={result[1]}>{result[0]}</button>
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