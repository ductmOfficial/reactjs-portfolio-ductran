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
import { Avatar } from '@mui/material';
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
    <Box component="section" id="skills" sx={{ bgcolor: 'common.black', color: 'primary.main', py: 8 }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={4}>
          <Typography variant="numberedHeading" component="h2" gutterBottom>
            A few technologies I’ve worked
          </Typography>
        </Box>
        <Box maxWidth={600} margin="0 auto">
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
    <Card
      ref={ref}
      elevation={0}
      sx={{
        height: 1,
        bgcolor: 'primary.800',
        color: 'common.white',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            color: 'common.white',
            bgcolor: 'primary.500',
          }}
        >
          <Icon stroke={1} size="3.5rem" />
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 'light', mt: 2 }}>
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default Skills;
