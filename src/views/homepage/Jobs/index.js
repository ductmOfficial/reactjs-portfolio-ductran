import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Link as NavLink } from 'react-router-dom';

// material-ui
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

// project imports
import config from 'config';
import sr from 'lib/sr';

const Jobs = ({ jobs = [] }) => {
  const [value, setValue] = useState(0);
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

  useEffect(() => {
    setValue(jobs.length - 1);
  }, [jobs]);

  return (
    <Box component="section" id="education" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={4}>
          <Typography component="h2" variant="numberedHeading" color="text.secondary" gutterBottom>
            Where I’ve Worked
          </Typography>
          <Link component={NavLink} align="center" underline="hover">
            view the archive
          </Link>
        </Box>
        <Box ref={revealCards} maxWidth={1000} margin="0 auto">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList centered onChange={handleChange} aria-label="lab API tabs example">
                {jobs &&
                  jobs.map(({ node }, index) => {
                    const { frontmatter } = node;
                    const { title, company } = frontmatter;

                    return <Tab key={title} label={company} value={index} sx={{ textTransform: 'unset' }} />;
                  })}
              </TabList>
            </Box>
            {jobs &&
              jobs.map(({ node }, index) => {
                const { frontmatter } = node;
                const { title } = frontmatter;

                return (
                  <TabPanel key={title} value={index} sx={{ p: 0 }}>
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
