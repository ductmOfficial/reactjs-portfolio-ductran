import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import dayjs from 'dayjs';

// project imports
import config from 'config';
import sr from 'lib/sr';

const skills = [
  { title: 'Projects Done', value: 79 },
  { title: 'Happy Clients', value: 82 },
  { title: 'Hours of Work', value: 890 },
  { title: 'Years Experience', value: dayjs().diff(new Date('01-01-2016'), 'year') },
];

const FunFacts = () => {
  const revealCards = useRef([]);
  const { srConfig } = config;

  useEffect(() => {
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [srConfig]);

  return (
    <Box component="section" id="fun-facts" sx={{ bgcolor: 'primary.light', py: 8 }}>
      <Container maxWidth="xl">
        <Box maxWidth={1000} margin="0 auto">
          <Grid container spacing={4} justifyContent="stretch">
            {skills.map((item, index) => (
              <Grid key={index} item xs={6} lg={3}>
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
    <Card
      ref={ref}
      elevation={0}
      sx={{
        height: 1,
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'primary.main',
        color: 'common.white',
      }}
    >
      <CardContent sx={{ flex: 1, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            py: 2,
            fontWeight: 'bold',
          }}
        >
          {item.value.toString().padStart(2, '0').concat('+')}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 'normal',
            textTransform: 'uppercase',
          }}
        >
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default FunFacts;

SkillCard.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string,
};