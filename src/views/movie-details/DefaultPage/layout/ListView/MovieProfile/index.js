import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

// project imports
import { MovieInfo, MoviePhotos } from '../../../components';
import { MovieCollection } from '../../../container';

const MovieProfile = ({ movie }) => {
  const [value, setValue] = useState('info');

  const hasCollection = movie.belongs_to_collection;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Info" value="info" />
            <Tab label="Photos" value="photos" />
            {hasCollection && <Tab label="Collection" value="collection" />}
          </TabList>
        </Box>
        <TabPanel value="info" sx={{ p: 2 }}>
          <MovieInfo {...movie} />
        </TabPanel>
        <TabPanel value="photos" sx={{ p: 2 }}>
          <MoviePhotos {...movie.images} />
        </TabPanel>
        {hasCollection && (
          <TabPanel value="collection" sx={{ p: 2 }}>
            <MovieCollection {...movie.belongs_to_collection} />
          </TabPanel>
        )}
      </TabContext>
    </Box>
  );
};

export default MovieProfile;

MovieProfile.propTypes = {
  movie: PropTypes.object,
};
