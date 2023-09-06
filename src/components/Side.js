import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { styled } from '@mui/material/styles';

// third-party
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// project imports
import { loaderDelay } from 'constants/common';

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

const Side = ({ orientation, children, ...props }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeout);
  }, [isMounted]);

  return (
    <Wrapper {...props} orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fade" timeout={loaderDelay}>
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </Wrapper>
  );
};

export default Side;

Side.propTypes = {
  orientation: PropTypes.string,
  children: PropTypes.node.isRequired,
};
