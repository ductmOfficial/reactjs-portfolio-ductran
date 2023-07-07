import PropTypes from 'prop-types';

// material-ui
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

// project imports
import { TypographyTruncator } from 'components/shared';
import { generateImageUrl } from 'utils/movie';

const CommentCard = ({ ...props }) => (
  <Card elevation={0} sx={{ bgcolor: 'background.default' }}>
    <CardHeader
      title={props.author}
      subheader={props.created_at}
      titleTypographyProps={{ variant: 'h5' }}
      avatar={<Avatar src={generateImageUrl('avatar', props.author_details.avatar_path)}>R</Avatar>}
    />
    <CardContent sx={{ pt: 0 }}>
      <TypographyTruncator content={props.content} options={{ length: 300 }} />
    </CardContent>
  </Card>
);

export default CommentCard;

CommentCard.propTypes = {
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
