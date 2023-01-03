import { ImageGalleryCard, GalleryCardImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ pictures, onClickImg }) => {
  return pictures.map(picture => {
    return (
      <ImageGalleryCard key={picture.id}>
        <GalleryCardImg
          onClick={() => {
            onClickImg(picture.largeImageURL);
          }}
          src={picture.webformatURL}
          alt={picture.tags}
        />
      </ImageGalleryCard>
    );
  });
};
