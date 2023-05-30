import { useState } from 'react';
import PropTypes from 'prop-types';

// material-ui
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

// project imports
import MovieInfo from '../components/MovieInfo';
import MoviePhotos from '../components/MoviePhotos';
import MovieCollection from '../components/MovieCollection';

const MovieProfile = ({ movie }) => {
  const [value, setValue] = useState('info');

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
            <Tab label="Collection" value="collection" />
          </TabList>
        </Box>
        <TabPanel value="info" sx={{ p: 0 }}>
          <MovieInfo {...movie} />
        </TabPanel>
        <TabPanel value="photos" sx={{ p: 0 }}>
          <MoviePhotos />
        </TabPanel>
        <TabPanel value="collection" sx={{ p: 0 }}>
          <MovieCollection />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default MovieProfile;

MovieProfile.propTypes = {
  movie: PropTypes.object,
};
