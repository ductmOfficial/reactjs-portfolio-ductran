// material-ui
import Box from '@mui/material/Box';

// project imports
import useContent from 'hooks/useContent';
import AboutMe from './AboutMe';
import Advertisement from './Advertisement';
import FeaturedProjects from './FeaturedProjects';
import FunFacts from './FunFacts';
import GetInTouch from './GetInTouch';
import Hero from './Hero';
import Jobs from './Jobs';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Homepage = () => {
  const { data: projects } = useContent('projects');
  const { data: jobs } = useContent('jobs');

  return (
    <Box component="article">
      <Hero />
      <AboutMe />
      <FunFacts />
      <Services />
      <Skills />
      <Jobs jobs={jobs} />
      <FeaturedProjects projects={projects} />
      <Advertisement />
      <Projects projects={projects} />
      <GetInTouch />
    </Box>
  );
};

export default Homepage;
