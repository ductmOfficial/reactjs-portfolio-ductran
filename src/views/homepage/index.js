// material-ui
import Box from '@mui/material/Box';

// project imports
import AboutMe from './AboutMe';
import Education from './Education';
import GetInTouch from './GetInTouch';
import Hero from './Hero';
import OtherProjects from './OtherProjects';
import Projects from './Projects';
import Skills from './Skills';
import Experiences from './Experiences';

const Homepage = () => (
  <Box component="article">
    <Hero />
    <AboutMe />
    <Education />
    <Skills />
    <Experiences />
    <Projects />
    <OtherProjects />
    <GetInTouch />
  </Box>
);

export default Homepage;
