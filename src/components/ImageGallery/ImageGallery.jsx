import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrapper } from './ImageGallery.styled';

export const ImageGallery = ({ pictures }) => {
  return (
    <ImageGalleryWrapper>
      <ImageGalleryItem pictures={pictures} />
    </ImageGalleryWrapper>
  );
};
