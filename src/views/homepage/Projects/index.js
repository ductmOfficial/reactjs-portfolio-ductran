import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Link as NavLink } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// third-party
import { IconExternalLink, IconFolder, IconGitBranch } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';

const GRID_LIMIT = 6;

const Projects = ({ projects = [] }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const { srConfig } = config;

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [srConfig]);

  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={6}>
          <Typography component="h2" variant="numberedHeading" color="text.secondary" gutterBottom>
            Other Noteworthy Projects
          </Typography>
          <Link component={NavLink} align="center" underline="hover" to="/archive">
            view the archive
          </Link>
        </Box>
        <Box maxWidth={1000} margin="0 auto">
          <Grid container spacing={2}>
            {projectsToShow &&
              projectsToShow.map(({ node }, index) => {
                const { frontmatter } = node;
                const { title } = frontmatter;

                return (
                  <Grid key={title} item xs={12} sm={6} lg={4}>
                    <ProjectCard
                      /* eslint-disable-next-line no-return-assign */
                      ref={(el) => (revealCards.current[index] = el)}
                      style={{
                        transitionDelay: `${index >= GRID_LIMIT ? (index - GRID_LIMIT) * 100 : 0}ms`,
                      }}
                      node={node}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Box>

        {projects.length > GRID_LIMIT && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="outlined" onClick={() => setShowMore(!showMore)}>
              Show {showMore ? 'Less' : 'More'}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

const ProjectCard = forwardRef((props, ref) => {
  const { node } = props;
  const { frontmatter, html } = node;

  return (
    <Card ref={ref} elevation={0} sx={{ bgcolor: 'background.default', height: 1 }}>
      <CardActions sx={{ pl: 1, alignItems: 'flex-start' }}>
        <Box component="div" color="primary.main">
          <IconFolder stroke={1} size="5rem" />
        </Box>
        <Box flexGrow={1} />
        {frontmatter.github && (
          <IconButton color="inherit" href={frontmatter.github} target="_blank">
            <IconGitBranch stroke={1.5} size="1.5rem" />
          </IconButton>
        )}
        {frontmatter.external && (
          <IconButton color="inherit" href={frontmatter.external} target="_blank">
            <IconExternalLink stroke={1.5} size="1.5rem" />
          </IconButton>
        )}
      </CardActions>
      <CardContent>
        <Typography variant="h3" color="text.secondary" gutterBottom>
          {frontmatter.title}
        </Typography>
        <Box component="div" dangerouslySetInnerHTML={{ __html: html }} />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {frontmatter.tech.map((techItem) => (
            <Typography key={techItem} variant="body2" color="text.secondary" fontFamily="monospace">
              {techItem}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
});

export default Projects;

Projects.propTypes = {
  projects: PropTypes.array,
};

ProjectCard.propTypes = {
  node: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.shape({
      cover: PropTypes.string,
      title: PropTypes.string,
      github: PropTypes.string,
      external: PropTypes.string,
      tech: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};
