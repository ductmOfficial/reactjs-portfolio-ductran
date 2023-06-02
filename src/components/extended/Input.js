import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';

// project imports
import { borderRadius } from 'constants/theme';

const SIZE_SMALL = 38;
const SIZE_MEDIUM = 48;

const getSize = (size) => {
  const value = size === 'small' ? SIZE_SMALL : SIZE_MEDIUM;

  return value;
};

const getBorderRadius = (rounded, size) => {
  const availabels = ['pills', 'small', 'large', 'medium'];
  let value;

  if (!availabels.includes(rounded)) {
    value = 'medium';
  }

  if (rounded === 'pills') {
    value = getSize(size);
  }

  return borderRadius(value);
};

/**
 * @param {string} rounded: One of [pills, small, large, medium, undefined]
 * @param {string} size: One of [small, undefined]
 */
const StyledInput = styled(({ size, rounded, ...props }) => (
  <InputBase
    {...props}
    sx={{
      '& .MuiInputBase-input': {
        minHeight: getSize(size),
        borderRadius: getBorderRadius(rounded),
      },
    }}
  />
))(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2, 2),
    transition: theme.transitions.create(['box-shadow']),

    '&:focus': {
      boxShadow: `${alpha(theme.palette.background.default, 0.25)} 0 0 0 0.2rem`,
    },
  },
}));

export default StyledInput;
