import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// third-party
import truncate from 'lodash/truncate';

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

export default TypographyTruncator;

TypographyTruncator.propTypes = {
  content: PropTypes.string,
  options: PropTypes.shape({
    length: PropTypes.number,
    omission: PropTypes.string,
    separator: PropTypes.string,
  }),
};
