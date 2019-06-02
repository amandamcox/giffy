import React from 'react';
import ImageCard from './ImageCard';
import '../statics/ImageList.css';

const ImageList = props => {
  const imageContainer = props.images.map(image => {
    return image.slug ? (
      <ImageCard
        key={image.id}
        image={image.images.downsized.url}
        alt={image.title}
      />
    ) : (
      <ImageCard
        key={image.id}
        image={image.media['0'].gif.url}
        alt={image.title}
      />
    );
  });

  return <div className="image-list">{imageContainer}</div>;
};

export default ImageList;
