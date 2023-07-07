import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// project imports
import { borderRadius, gridSpacing } from 'constants/theme';

const GRID_RATIO = 0.75;

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: borderRadius(),
  bgcolor: 'background.paper',
};

const MainCard = forwardRef(({ title, footer, titleProps, contentProps, children, ...props }, ref) => {
  const shouldRenderHeader = Boolean(title);
  const shouldRenderFooter = Boolean(footer);

  return (
    <Box ref={ref} className="D-MainCard" {...cardStyles} {...props}>
      {/* Card Header */}
      {shouldRenderHeader && (
        <Box px={gridSpacing()} pt={gridSpacing() * GRID_RATIO}>
          <Typography variant="h6" {...titleProps}>
            {title}
          </Typography>
        </Box>
      )}

      {/* Card Body */}
      <Box p={gridSpacing()} {...contentProps}>
        {children}
      </Box>

      {/* Card Footer */}
      {shouldRenderFooter && (
        <Box px={gridSpacing()} pb={gridSpacing() * GRID_RATIO}>
          {footer}
        </Box>
      )}
    </Box>
  );
});

export default MainCard;

MainCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  titleProps: PropTypes.object,
  contentProps: PropTypes.object,
};

MainCard.defaultProps = {};
