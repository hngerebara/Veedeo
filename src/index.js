import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY ='AIzaSyC-E1ARbIlLHXfz5ommiRhrzQ2dpA3QwR0';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null 
       };

    YTSearch({key: API_KEY, term: 'react tutorial'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    })
  }
  render() {
    return (
      <div>
          <SearchBar />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
        <h1>Hello there first page</h1>
      </div>
    );
  }   
}

ReactDOM.render(<App />, document.querySelector(".container"));