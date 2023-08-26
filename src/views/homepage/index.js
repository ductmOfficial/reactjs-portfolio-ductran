// material-ui
import Box from '@mui/material/Box';

// project imports
import AboutMe from './AboutMe';
import Education from './Education';
import GetInTouch from './GetInTouch';
import Hero from './Hero';
import Skills from './Skills';

const Homepage = () => (
  <Box component="article" sx={{ py: 1 }}>
    <Hero />
    <AboutMe />
    <Education />
    <Skills />
    <GetInTouch />
  </Box>
);

export default Homepage;
