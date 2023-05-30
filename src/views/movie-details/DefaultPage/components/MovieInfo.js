import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// third-party
import { IconCalendar, IconCurrentLocation, IconHome, IconId, IconLanguage, IconMap, IconMapPins } from '@tabler/icons';

// project imports

const MovieInfo = ({ movie, ...props }) => {
  const productionCompanies = movie.production_companies?.map(({ name }) => name).join(', ');
  const productionCountries = movie.production_countries?.map(({ name }) => name).join(', ');

  return (
    <Stack bgcolor="background.paper" spacing={1} {...props}>
      <InfoItem title="Release Date" content={movie.release_date} icon={IconCalendar} />
      <InfoItem title="Country of origin" content={productionCountries} icon={IconMap} />
      <InfoItem title="Official site" content={movie.homepage} icon={IconHome} />
      <InfoItem title="Language" content={movie.original_language} icon={IconLanguage} />
      <InfoItem title="Also known as" content={movie.original_title} icon={IconId} />
      <InfoItem title="Filming locations" content={productionCountries} icon={IconCurrentLocation} />
      <InfoItem title="Production companies" content={productionCompanies} icon={IconMapPins} />
    </Stack>
  );
};

const InfoItem = ({ title, icon, content, children }) => {
  if (!children && !content) return null;

  const Icon = icon;

  const renderContent = children || (
    <Typography variant="h5" component="span">
      {content}
    </Typography>
  );

  return (
    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1.5}>
      <Box sx={{ color: 'text.secondary' }}>
        <Icon stroke={1.5} size="2rem" />
      </Box>
      <Typography>
        {title} {renderContent}
      </Typography>
    </Stack>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

InfoItem.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node,
};
