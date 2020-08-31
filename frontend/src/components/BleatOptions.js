import React, { Component } from 'react';

class BleatOptions extends Component {
    render() {
        return (
            <div className='bleatOptions'>
                <p><button className='link'>♡ {this.props.bleat.likes}</button>
                <button className='link'>&#x1F5E8; {this.props.bleat.comments_count}</button>
                <button className='link'>&#11156; {this.props.bleat.rebleats_count}</button></p>
            </div>
        )
    }
    
}
export default BleatOptions;