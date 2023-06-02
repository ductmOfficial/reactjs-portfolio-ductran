import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// third-party
import { IconCalendar, IconCurrentLocation, IconHome, IconLanguage, IconMap, IconMapPins, IconMapSearch } from '@tabler/icons';
import { Link } from '@mui/material';

const MovieInfo = ({ ...props }) => {
  const productionCompanies = props.production_companies?.map(({ name }) => name).join(', ');
  const productionCountries = props.production_countries?.map(({ name }) => name).join(', ');

  return (
    <StyledList dense>
      <StyledListItem primary="Release Date" secondary={props.release_date} icon={IconCalendar} />
      <StyledListItem primary="Country of origin" secondary={productionCountries} icon={IconMap} />
      <StyledListItem
        primary="Official site"
        secondary={
          <Link href={props.homepage} target="_blank" color="inherit">
            Homepage
          </Link>
        }
        icon={IconHome}
      />
      <StyledListItem primary="Language" secondary={props.original_language} icon={IconLanguage} />
      <StyledListItem primary="Also known as" secondary={props.original_title} icon={IconMapSearch} />
      <StyledListItem primary="Filming locations" secondary={productionCountries} icon={IconCurrentLocation} />
      <StyledListItem primary="Production companies" secondary={productionCompanies} icon={IconMapPins} />
    </StyledList>
  );
};

const StyledList = forwardRef((props, ref) => <List ref={ref} disablePadding {...props} />);

const StyledListItem = ({ icon, primary, secondary }) => {
  const valueIsEmpty = !secondary;
  const Icon = icon;

  if (valueIsEmpty) return null;

  return (
    <ListItem disableGutters>
      <ListItemIcon sx={{ color: 'text.secondary', minWidth: 40 }}>
        <Icon stroke={1.5} size="2rem" />
      </ListItemIcon>
      <ListItemText
        primary={primary}
        secondary={
          secondary ? (
            <Typography variant="h5" component="span">
              {secondary}
            </Typography>
          ) : null
        }
        primaryTypographyProps={{ display: 'inline-block', mr: 0.5 }}
      />
    </ListItem>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  production_companies: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  production_countries: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  release_date: PropTypes.string,
  homepage: PropTypes.string,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
};

StyledListItem.propTypes = {
  icon: PropTypes.func.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
