import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY ='AIzaSyC-E1ARbIlLHXfz5ommiRhrzQ2dpA3QwR0';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'react tutorial'}, (data) => {
      this.setState({ videos: data });
    })
  }
  render() {
    return (
      <div>
          <SearchBar />
          <VideoList videos={this.state.videos}/>
        <h1>Hello there first page</h1>
      </div>
    );
  }   
}

ReactDOM.render(<App />, document.querySelector(".container"));