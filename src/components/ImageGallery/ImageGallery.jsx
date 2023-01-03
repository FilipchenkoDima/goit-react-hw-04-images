import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrapper } from './ImageGallery.styled';

export const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ImageGalleryWrapper>
      <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
    </ImageGalleryWrapper>
  );
};
