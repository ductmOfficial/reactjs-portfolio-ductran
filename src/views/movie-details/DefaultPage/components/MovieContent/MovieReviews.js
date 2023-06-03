import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// third-party
import truncate from 'lodash/truncate';

// project imports
import MainCard from 'components/MainCard';
import ResponsivePlayer from 'components/ResponsivePlayer';
import StyledInput from 'components/extended/Input';
import { TEMP_IMAGE_AVATAR } from 'constants/temp';
import { borderRadius } from 'constants/theme';
import { generateImageUrl } from 'utils/movie';

const MovieReviews = ({ video, reviews = [] }) => (
  <MainCard>
    <Box display="flex" flexDirection="column" gap={2}>
      {video && <ResponsivePlayer url={`https://www.youtube.com/watch?v=${video.key}`} />}
      <CommentContainer comments={reviews} />
    </Box>
  </MainCard>
);

const PAGING_PER_PAGE = 2;
const CommentContainer = ({ comments = [] }) => {
  const [more, setMore] = useState(false);

  const shownComments = !more ? comments.slice(0, PAGING_PER_PAGE) : comments;
  const showPaginator = comments.length > PAGING_PER_PAGE;

  return (
    <CommentBox>
      <CommentEditor />
      <CommentList>
        {shownComments.map((comment) => (
          <CommentListItem key={comment.id} {...comment} />
        ))}
      </CommentList>

      {showPaginator && (
        <Box display="flex" justifyContent="space-between">
          <Link noWrap underline="none" component="button" sx={{ verticalAlign: 'unset' }} onClick={() => setMore(true)}>
            Show all
          </Link>
          <Typography sx={{ color: 'text.secondary' }}>
            {shownComments.length} of {comments.length}
          </Typography>
        </Box>
      )}
    </CommentBox>
  );
};

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
      <Avatar src={TEMP_IMAGE_AVATAR} sx={{ width: 48, height: 48 }} />
    </Box>
    <Box flex="1 1">
      <StyledInput fullWidth disabled rounded="pills" placeholder="Write a review..." />
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
  video: PropTypes.object,
};

TypographyTruncator.propTypes = {
  content: PropTypes.string,
  options: PropTypes.shape({
    length: PropTypes.number,
    omission: PropTypes.string,
    separator: PropTypes.string,
  }),
};

CommentContainer.propTypes = {
  comments: PropTypes.array,
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
