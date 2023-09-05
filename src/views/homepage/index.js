// material-ui
import Box from '@mui/material/Box';

// project imports
import useContent from 'hooks/useContent';
import AboutMe from './AboutMe';
import FeaturedProjects from './FeaturedProjects';
import GetInTouch from './GetInTouch';
import Hero from './Hero';
import Jobs from './Jobs';
import Projects from './Projects';
import Skills from './Skills';

const Homepage = () => {
  const { data: projects } = useContent('projects');
  const { data: jobs } = useContent('jobs');

  return (
    <Box component="article">
      <Hero />
      <AboutMe />
      <Skills />
      <Jobs jobs={jobs} />
      <FeaturedProjects projects={projects} />
      <Projects projects={projects} />
      <GetInTouch />
    </Box>
  );
};

export default Homepage;
