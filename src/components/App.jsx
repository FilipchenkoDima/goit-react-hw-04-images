import React, { Component } from 'react';
import { fetchPictures } from 'services/gallery-api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

import GlobalStyle from 'globalStyles';
import { Wrapper } from './Searchbar/Searchbar.styled';

export class App extends Component {
  state = {
    pictures: [],
    status: 'idle',
    showModal: false,
    largeImageUrl: '',
  };

  getLargeImgUrl = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  searchResult = value => {
    this.setState({ status: 'loading' });
    fetchPictures(value).then(e =>
      this.setState({
        pictures: e.hits,
        status: 'idle',
      })
    );
  };

  render() {
    const { pictures, status, showModal, largeImageUrl } = this.state;
    return (
      <Wrapper>
        <GlobalStyle />
        <Searchbar onSubmit={this.searchResult} />
        {status === 'loading' && <Loader />}
        {showModal && (
          <Modal imgUrl={largeImageUrl} onClose={this.toggleModal} />
        )}
        <ImageGallery pictures={pictures} onClick={this.getLargeImgUrl} />
        {pictures.length !== 0 && <Button />}
      </Wrapper>
    );
  }
}
