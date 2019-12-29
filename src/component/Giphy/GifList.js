import './GifList.css';
import React from 'react';

class GifList extends React.Component {
    state = {  }
    render() { 

        const gify = this.props.passGif.map( gif =>{
            return (
            <img alt={gif.title}
            key={gif.id}    
            src={gif.images.original.url}
         // src={gif.images.fixed_height_still.url}
            />
           )
        })

        return ( 
            <div className="gif-list">
                {gify}
            </div>
         );
    }
}
 
export default GifList;