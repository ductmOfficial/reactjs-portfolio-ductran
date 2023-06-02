import PropTypes from 'prop-types';

// material-ui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// third-party
import truncate from 'lodash/truncate';

// project imports
import { Link } from '@mui/material';
import MainCard from 'components/MainCard';
import { TEMP_IMAGE_AVATAR } from 'constants/temp';
import { borderRadius } from 'constants/theme';
import { useState } from 'react';
import { generateImageUrl } from 'utils/movie';

const MovieReviews = ({ reviews = [] }) => (
  <MainCard>
    <CommentBox>
      <CommentEditor />
      <CommentList>
        {reviews.map((review) => (
          <CommentListItem key={review.id} {...review} />
        ))}
      </CommentList>
    </CommentBox>
  </MainCard>
);

const CommentBox = styled((props) => <Box display="flex" flexDirection="column" gap={2} {...props} />)(() => ({}));

const CommentList = styled((props) => <Box display="flex" flexDirection="column" gap={2} {...props} />)(() => ({}));

const CommentListItem = ({ ...props }) => (
  <Box bgcolor="background.default" borderRadius={borderRadius()} p={2} {...props}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <Box flex="0 0 auto">
          <Avatar src={generateImageUrl('avatar', props.author_details.avatar_path)} sx={{ width: 40, height: 40 }} />
        </Box>
        <Box flex="1 1">
          <Typography variant="h5">{props.author}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{props.created_at}</Typography>
        </Box>
      </Box>
      <TypographyTruncator content={props.content} options={{ length: 300 }} />
    </Box>
  </Box>
);

const CommentEditor = () => (
  <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
    <Box flex="0 0 auto">
      <Avatar src={TEMP_IMAGE_AVATAR} sx={{ width: 53.13, height: 53.13 }} />
    </Box>
    <Box flex="1 1">
      <TextField fullWidth disabled variant="outlined" placeholder="Write a review..." />
    </Box>
  </Box>
);

const TypographyTruncator = ({ content = '', options = {} }) => {
  const [show, setShow] = useState(false);
  const isFull = content.length <= options.length;

  if (isFull || show) {
    return <Typography>{content}</Typography>;
  }

  return (
    <Typography>
      {truncate(content, {
        length: 30,
        omission: '...',
        separator: '/[,- ]/',
        ...options,
      })}
      <Link
        noWrap
        underline="none"
        component="button"
        sx={{ ml: 0.5, color: 'text.secondary', fontWeight: 600, lineHeight: 'inherit', verticalAlign: 'unset' }}
        onClick={() => setShow(true)}
      >
        See more
      </Link>
    </Typography>
  );
};

export default MovieReviews;

MovieReviews.propTypes = {
  reviews: PropTypes.array,
};

TypographyTruncator.propTypes = {
  content: PropTypes.string,
  options: PropTypes.shape({
    length: PropTypes.number,
    omission: PropTypes.string,
    separator: PropTypes.string,
  }),
};

CommentEditor.propTypes = {};

CommentListItem.propTypes = {
  author: PropTypes.string,
  author_details: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    avatar_path: PropTypes.string,
    rating: PropTypes.number,
  }),
  content: PropTypes.string,
  created_at: PropTypes.string,
  id: PropTypes.string,
  updated_at: PropTypes.string,
  url: PropTypes.string,
};
