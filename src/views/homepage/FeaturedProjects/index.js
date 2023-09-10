import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// third-party
import { IconExternalLink, IconGitBranch } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';

const GRID_LIMIT = 6;

const FeaturedProjects = ({ projects = [] }) => {
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const { srConfig } = config;

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [srConfig]);

  const featuredProjects = projects.slice(0, 3);

  return (
    <Box component="section" id="projects" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={4}>
          <Typography component="h2" variant="overline" color="primary.main">
            3 most recent works
          </Typography>
          <Typography component="h2" variant="numberedHeading" color="text.secondary" gutterBottom>
            Some Things I’ve Built
          </Typography>
        </Box>
        <Box maxWidth={1000} margin="0 auto">
          <Grid container spacing={2}>
            {featuredProjects &&
              featuredProjects.map(({ node }, index) => {
                const { frontmatter } = node;
                const { title } = frontmatter;

                return (
                  <Grid key={title} item xs={12} lg={4}>
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
      </Container>
    </Box>
  );
};

const ProjectCard = forwardRef((props, ref) => {
  const { node } = props;
  const { frontmatter, html } = node;

  return (
    <Card
      ref={ref}
      elevation={0}
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'primary.main',

          '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 3,
            transition: 'all 500 cubic-bezier(0.645, 0.045, 0.355, 1)',
            backgroundColor: 'rgba(2,12,27,0.7)',
            mixBlendMode: 'screen',
          },
          img: {
            mixBlendMode: 'multiply',
            filter: 'grayscale(100%) contrast(1) brightness(80%)',
          },

          '&:hover, &:focus': {
            background: 'transparent',
            mixBlendMode: 'unset',

            '&:before, img': {
              background: 'transparent',
              filter: 'none',
              mixBlendMode: 'unset',
            },
          },
        }}
      >
        <CardMedia component="img" height={300} alt={frontmatter.title} image={frontmatter.cover} />
      </Box>

      <CardContent sx={{ marginBottom: 'auto' }}>
        <Typography variant="overline" color="primary.main" fontFamily="monospace">
          Featured Project
        </Typography>
        <Typography variant="h3" sx={{ mb: 2 }}>
          {frontmatter.title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {frontmatter.tech.map((techItem) => (
            <Typography key={techItem} variant="body2" color="text.secondary">
              {techItem}
            </Typography>
          ))}
        </Box>
        <Box
          component="div"
          dangerouslySetInnerHTML={{ __html: html }}
          sx={{
            '& > p': {
              margin: 0,
            },
          }}
        />
      </CardContent>
      <CardActions>
        {frontmatter.github && (
          <IconButton href={frontmatter.github} target="_blank">
            <IconGitBranch stroke={1.5} size="1.3rem" />
          </IconButton>
        )}
        {frontmatter.external && (
          <IconButton href={frontmatter.external} target="_blank">
            <IconExternalLink stroke={1.5} size="1.3rem" />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
});

export default FeaturedProjects;

FeaturedProjects.propTypes = {
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
