import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images : []
    }

     onSearchSubmit = async term =>{
         const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers : {
                Authorization: 
                    'Client-ID 9b8f460a202d0a51238951081549d2fd4fa6aec6b8aa0ec5db29b3efdfb62fc0'
            }
        })   
        
        this.setState({ images : response.data.results});
    }

    render() {
    return ( 
        <div className="ui container" style={{marginTop: '10px'}}  >
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found : {this.state.images.length} images
            <ImageList images = {this.state.images}      />
        </div>
     );
}}
 
export default App;
