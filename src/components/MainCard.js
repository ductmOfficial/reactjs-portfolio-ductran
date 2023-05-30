import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const GRID_SPACING = 2;

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '6px',
  bgcolor: 'background.paper',
};

const MainCard = forwardRef(({ title, footer, titleProps, contentProps, children, ...props }, ref) => {
  const shouldRenderHeader = Boolean(title);
  const shouldRenderFooter = Boolean(footer);

  return (
    <Box ref={ref} {...cardStyles} {...props}>
      {/* Card Header */}
      {shouldRenderHeader && (
        <Box px={GRID_SPACING} pt={GRID_SPACING} pb={GRID_SPACING / 2}>
          <Typography variant="h3" {...titleProps}>
            {title}
          </Typography>
        </Box>
      )}

      {/* Card Body */}
      <Box
        px={GRID_SPACING}
        pt={shouldRenderHeader ? GRID_SPACING / 2 : GRID_SPACING}
        pb={shouldRenderFooter ? GRID_SPACING / 2 : GRID_SPACING}
        {...contentProps}
      >
        {children}
      </Box>

      {/* Card Footer */}
      {shouldRenderFooter && (
        <Box px={GRID_SPACING} pt={GRID_SPACING / 2} pb={GRID_SPACING}>
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
