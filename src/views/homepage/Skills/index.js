import { forwardRef, useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import {
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandVue,
} from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';

const skills = [
  { title: 'ReactJS', icon: IconBrandReact },
  { title: 'JavaScript (ES6+)', icon: IconBrandJavascript },
  { title: 'Typescript', icon: IconBrandTypescript },
  { title: 'Vue JS', icon: IconBrandVue },
  { title: 'HTML & (S)CSS', icon: IconBrandHtml5 },
  { title: 'Node.js', icon: IconBrandNodejs },
];

const Skills = () => {
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const { srConfig } = config;

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [srConfig]);

  return (
    <Box component="section" id="skills" sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={4}>
          <Typography variant="numberedHeading" component="h2" gutterBottom color="text.secondary">
            A few technologies I’ve worked
          </Typography>
        </Box>
        <Box maxWidth={720} margin="0 auto">
          <Grid container spacing={2} justifyContent="stretch">
            {skills.map((item, index) => (
              <Grid key={index} item xs={6} lg={4}>
                {/* eslint-disable-next-line no-return-assign */}
                <SkillCard ref={(el) => (revealCards.current[index] = el)} {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const SkillCard = forwardRef((props, ref) => {
  const { ...item } = props;
  const Icon = item.icon;

  return (
    <Card ref={ref} elevation={0} sx={{ display: 'flex', alignItems: 'center', height: 1, bgcolor: 'background.default' }}>
      <CardContent sx={{ flex: 1, textAlign: 'center' }}>
        <Box
          sx={{
            py: 2,
            color: 'primary.main',
          }}
        >
          <Icon stroke={1} size="5rem" />
        </Box>
        <Typography variant="h3">{item.title}</Typography>
      </CardContent>
    </Card>
  );
});

export default Skills;
