import React from 'react';
import GifSearchBar from './GifSearchBar';
import axios from 'axios';
import GifList from './GifList';

class App3 extends React.Component {
    state = { gif: [] }

    onSearchSubmit = async term =>{
        const response = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=cONdbpfLiSJpkkxXSLEC4zPWHYLuC26g&q=tube&limit=25&offset=0&rating=G&lang=en', {
            params: {
                q: term
            }
        }) 
        
         this.setState({ gif: response.data.data,
        //         selectedVideo : response.data.items[0]
         });
    }

    render() { 
        return ( 
            <div className="ui container ">
                <GifSearchBar  onSubmit={this.onSearchSubmit}  />
                Found : {this.state.gif.length}

                <GifList passGif={this.state.gif}   />
            </div>
         );
    }
}
 
export default App3;