import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';

const Wrapper = styled('div', { shouldForwardProp: (props) => props !== 'orientation' })(({ theme, orientation }) => ({
  width: '40px',
  position: 'fixed',
  bottom: '0',
  zIndex: 10,
  left: orientation === 'left' ? '40px' : 'auto',
  right: orientation === 'left' ? 'auto' : '40px',
  color: theme.palette.primary.light,

  '@media (max-width: 1200px)': {
    display: 'none',
  },
}));

const Side = ({ orientation, children, ...props }) => (
  <Wrapper {...props} orientation={orientation}>
    {children}
  </Wrapper>
);

export default Side;

Side.propTypes = {
  orientation: PropTypes.string,
  children: PropTypes.node.isRequired,
};
