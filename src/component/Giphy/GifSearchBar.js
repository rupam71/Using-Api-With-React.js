import React, { Component } from 'react';

class GifSearchBar extends Component {
    state = { term:"" }

    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() { 
        return ( 
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Gif Search</label>
                        <input 
                        type="text" 
                        value = {this.state.term}
                        onChange ={(e)=>this.setState({term:e.target.value})} />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default GifSearchBar;