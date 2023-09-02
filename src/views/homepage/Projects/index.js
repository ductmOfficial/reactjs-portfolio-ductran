import { forwardRef, useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

// third-party
import { IconExternalLink, IconFolder, IconGitBranch } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';

const education = [
  { title: 'Bachelor Degree', provider: 'Can Tho University' },
  { title: 'IELTS Certification 8.0', provider: 'IDP Education' },
  { title: 'ISTQB Foundation Level Certification', provider: 'ATSQA in the U.S.' },
];

const Projects = () => {
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const { srConfig } = config;

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [srConfig]);

  return (
    <Box component="section" id="education" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={6}>
          <Typography component="h2" variant="numberedHeading" color="text.secondary" gutterBottom>
            Some Things I’ve Built
          </Typography>
        </Box>
        <Box maxWidth={1000} margin="0 auto">
          <Grid container spacing={2}>
            {education.map((item, index) => (
              <Grid key={index} item xs={12}>
                {/* eslint-disable-next-line no-return-assign */}
                <ProjectCard ref={(el) => (revealCards.current[index] = el)} {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const ProjectCard = forwardRef((props, ref) => {
  const { ...item } = props;

  return (
    <Card ref={ref} elevation={0} sx={{ bgcolor: 'background.paper' }}>
      <CardActions sx={{ pl: 2, alignItems: 'flex-start' }}>
        <Box component="div" color="primary.main">
          <IconFolder stroke={1} size="5rem" />
        </Box>
        <Box flexGrow={1} />
        <IconButton color="inherit">
          <IconGitBranch stroke={1.5} size="1.5rem" />
        </IconButton>
        <IconButton color="inherit">
          <IconExternalLink stroke={1.5} size="1.5rem" />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="h3" color="text.secondary" gutterBottom>
          {item.title}
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            mt: 4,
          }}
        >
          <Typography variant="body2" color="text.secondary" fontFamily="monospace">
            Next.js
          </Typography>
          <Typography variant="body2" color="text.secondary" fontFamily="monospace">
            Firebase
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
});

export default Projects;
