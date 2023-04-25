import PropTypes from 'prop-types';
import React from 'react';

const components = {
  movie: React.lazy(() => import('./MovieCard')),
  tv: React.lazy(() => import('./TVCard')),
  person: React.lazy(() => import('./PersonCard')),
};

const MediaCard = ({ mediaType = 'movie', ...props }) => {
  const Component = components[mediaType] || React.Fragment;

  return <Component {...props} />;
};

export default MediaCard;

MediaCard.propTypes = {
  mediaType: PropTypes.string,
};
