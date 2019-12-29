import React, { Component } from 'react';
import SearchVedioBar from './SearchVedioBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App2 extends Component {
    state = { 
        videos : [],
        selectedVideo : null
     }

     componentDidMount() {
         this.onTermSubmit('hola'); 
     }

    onTermSubmit = async term =>{
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part : 'snippet',
                maxResults : 5,
                q: term,
                key : 'AIzaSyC_a7L0eBkFEH78WI3OGSvCvDvHXQGiUYQ'
            }
        }) 
        
        this.setState({ videos: response.data.items,
                selectedVideo : response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }

    render() { 
        return ( 
            <div className="ui container ">
                <SearchVedioBar onFormSubmit={this.onTermSubmit}/>
                Found : {this.state.videos.length} videos
                
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetails 
                        video = {this.state.selectedVideo}  />  
                        </div>

                        <div className="five wide column">
                        <VideoList 
                            onVideoSelect = {this.onVideoSelect}
                            videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            
                

                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/X1TcwTL76vI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
         );
    }
}
 
export default App2;