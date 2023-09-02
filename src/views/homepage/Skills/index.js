import { forwardRef, useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import { IconAwardFilled } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';

const skills = [
  { id: 0, title: 'Fluent English' },
  { id: 1, title: 'ISTQB Foundation' },
  { id: 2, title: 'Restful API Testing' },
  { id: 3, title: 'SQL Foundation' },
  { id: 4, title: 'Jira management' },
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
    <Box component="section" id="experiences-skills" sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={4}>
          <Typography variant="numberedHeading" component="h2" gutterBottom color="text.secondary">
            Experiences and Skills
          </Typography>
          <Typography variant="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </Box>
        <Box maxWidth={1000} margin="0 auto">
          <Grid container spacing={2} justifyContent="stretch">
            {skills.map((item, index) => (
              <Grid key={item.id} item xs={12} lg={6}>
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

  return (
    <Card ref={ref} elevation={0} sx={{ display: 'flex', alignItems: 'center', height: 1, bgcolor: 'background.paper' }}>
      <Box color="primary.main" py={2} pl={2}>
        <IconAwardFilled stroke={1} size="3.5rem" />
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h3">{item.title}</Typography>
        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
      </CardContent>
    </Card>
  );
});

export default Skills;
