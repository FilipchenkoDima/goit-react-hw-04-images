import { ImageGalleryCard, GalleryCardImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ pictures }) => {
  return pictures.map(picture => {
    return (
      <ImageGalleryCard key={picture.id}>
        <GalleryCardImg src={picture.webformatURL} alt={picture.tags} />
      </ImageGalleryCard>
    );
  });
};
