import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef, useState } from 'react';

// material-ui
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// third-party
import reverse from 'lodash/reverse';

// project imports
import config from 'config';
import sr from 'lib/sr';

const Jobs = ({ jobs = [] }) => {
  const theme = useTheme();
  const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  const [value, setValue] = useState('1');
  const revealTitle = useRef(null);
  const revealCards = useRef(null);
  const { srConfig } = config;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealCards.current, srConfig());
  }, [srConfig]);

  reverse(jobs);

  return (
    <Box component="section" id="jobs" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={2}>
          <Typography component="h2" variant="numberedHeading" color="text.secondary">
            Where I’ve Worked
          </Typography>
        </Box>
        <Box ref={revealCards} maxWidth={1000} margin="0 auto">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                centered={matchUpLg}
                variant={matchUpLg ? 'standard' : 'scrollable'}
                scrollButtons="auto"
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {jobs &&
                  jobs.map(({ node }, index) => {
                    const { frontmatter } = node;
                    const { company } = frontmatter;

                    return <Tab key={company} label={company} value={`${index + 1}`} sx={{ textTransform: 'unset' }} />;
                  })}
              </TabList>
            </Box>
            {jobs &&
              jobs.map(({ node }, index) => {
                const { frontmatter } = node;
                const { company } = frontmatter;

                return (
                  <TabPanel key={company} value={`${index + 1}`} sx={{ p: 0 }}>
                    <JobCard node={node} />
                  </TabPanel>
                );
              })}
          </TabContext>
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
      <CardContent sx={{ px: 0, pb: 0 }}>
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

const TJob = {
  node: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      range: PropTypes.string,
      url: PropTypes.string,
      company: PropTypes.string,
    }),
  }),
};

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape(TJob)),
};

JobCard.propTypes = TJob;
