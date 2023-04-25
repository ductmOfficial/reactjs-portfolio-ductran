import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Stack from '@mui/material/Stack';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// third-party
import { IconChevronLeft, IconFlame, IconHistory, IconX } from '@tabler/icons';

// project imports
import { Button } from '@mui/material';
import SearchBar from './SearchBar';

const SearchDrawer = ({ open, onClose, onOpen, ...props }) => {
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      onClose={onClose}
      onOpen={onOpen}
      {...props}
    >
      <Box sx={{ width: { xs: 320, md: 500 }, py: 2 }} role="presentation">
        <Stack direction="row" spacing={0.1} sx={{ width: 1, alignItems: 'center' }}>
          <IconButton color="inherit" onClick={onClose}>
            <IconChevronLeft />
          </IconButton>
          <SearchBar focus={open} />
          <Button underline="none" href="/search?q=something" sx={{ fontWeight: 600 }}>
            Search
          </Button>
        </Stack>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <ListItem
              key={text}
              disablePadding
              secondaryAction={
                <IconButton size="small" edge="end" aria-label="delete" color="inherit">
                  <IconX size="1rem" />
                </IconButton>
              }
            >
              <ListItemButton role={undefined} dense href={`/search?q=${text}`}>
                <ListItemIcon sx={{ minWidth: 25 }}>
                  <IconHistory size="1rem" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List subheader={<ListSubheader>Maybe you like it</ListSubheader>}>
          {['All mail', 'Trash', 'Spam'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton role={undefined} dense>
                <ListItemIcon sx={{ minWidth: 25, color: 'error.main' }}>
                  <IconFlame size="1.3rem" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default SearchDrawer;

SearchDrawer.propTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};
