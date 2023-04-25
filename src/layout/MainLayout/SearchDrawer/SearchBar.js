import PropTypes from 'prop-types';

// material-ui
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';

// third-party
import { IconSearch } from '@tabler/icons';
import { useEffect, useRef } from 'react';

const SearchBar = ({ focus }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (!focus) return;

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focus]);

  return (
    <Search>
      <SearchIconWrapper>
        <IconSearch />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ ref: inputRef, 'aria-label': 'search' }} />
    </Search>
  );
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[300], 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[300], 0.35),
  },
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default SearchBar;

SearchBar.propTypes = {
  focus: PropTypes.bool,
};
