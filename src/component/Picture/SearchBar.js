import React from 'react';

class SearchBar extends React.Component {
    state = { term:'' }

    // onInputChange (event){
    //     this.setState({term:event.target.value}) 
    //     }

    onFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state.term);

        this.props.onSubmit(this.state.term);
        // here we will send our value to parents
        // we send value of (this.state.term)
        // and onSubmit just a name given by parents
        //REMEMBAR:::: tHIS onSubmit NOT AN EVENT
    };

    render() { 
        return ( 
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Image Search </label>
                        <input type="text" 
                        value = {this.state.term}
                        // onChange={this.onInputChange} />
                        onChange={ e => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;  
                                         