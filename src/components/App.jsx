import React, { Component } from 'react';
import { fetchPictures } from 'services/gallery-api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Wrapper } from './Searchbar/Searchbar.styled';

export class App extends Component {
  state = {
    pictures: [],
  };

  searchResult = value => {
    fetchPictures(value).then(e =>
      this.setState({
        pictures: e.hits,
      })
    );
  };

  render() {
    const { pictures } = this.state;
    return (
      <Wrapper>
        <Searchbar onSubmit={this.searchResult} />
        <ImageGallery pictures={pictures} />
      </Wrapper>
    );
  }
}
