import React from 'react';
import '../statics/SearchBar.css';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <form className="ui form section-formatting" onSubmit={this.onFormSubmit}>
        <div className="ui fluid input icon">
          <i className="purple search link icon" />
          <input
            id="search-bar-input"
            type="text"
            placeholder="Search..."
            autocomplete="off"
            value={this.state.searchTerm}
            onChange={e => this.setState({ searchTerm: e.target.value })}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
