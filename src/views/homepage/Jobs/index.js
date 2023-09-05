import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef } from 'react';
import { Link as NavLink } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// project imports
import config from 'config';
import sr from 'lib/sr';

const GRID_LIMIT = 6;

const Jobs = ({ jobs = [] }) => {
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
            Where I’ve Worked
          </Typography>
          <Link component={NavLink} align="center" underline="hover">
            view the archive
          </Link>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {jobs &&
              jobs.map(({ node }, index) => {
                const { frontmatter } = node;
                const { title } = frontmatter;

                return (
                  <Grid key={title} item xs={12} sm={6} lg={4}>
                    <JobCard
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

const JobCard = forwardRef((props, ref) => {
  const { node } = props;
  const { frontmatter, html } = node;

  return (
    <Card ref={ref} elevation={0} sx={{ bgcolor: 'background.paper', height: 1 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h3" color="text.secondary" gutterBottom>
          {frontmatter.title}{' '}
          <Link underline="none" href={frontmatter.url} target="_blank">
            @{frontmatter.company}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" fontFamily="monospace">
          {frontmatter.range}
        </Typography>
        <Box component="div" dangerouslySetInnerHTML={{ __html: html }} />
      </CardContent>
    </Card>
  );
});

export default Jobs;

Jobs.propTypes = {
  jobs: PropTypes.array,
};

JobCard.propTypes = {
  node: {
    html: PropTypes.string,
    frontmatter: {
      title: PropTypes.string,
      range: PropTypes.string,
      url: PropTypes.string,
      company: PropTypes.string,
    },
  },
};
