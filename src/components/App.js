import React from 'react';
import giphy from '../api/giphy';
import tenor from '../api/tenor';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearch = async searchTerm => {
    const giphyResponse = await giphy.get('/v1/gifs/search', {
      params: {
        q: searchTerm
      }
    });

    const tenorResponse = await tenor.get('/v1/search', {
      params: {
        q: searchTerm
      }
    });

    this.setState({
      images: [...giphyResponse.data.data, ...tenorResponse.data.results]
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearch} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
