import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef } from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import { IconBulb, IconDeviceImacCode, IconFlag3, IconGrain, IconLifebuoy, IconPalette, IconPencilPlus } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';

const skills = [
  { title: 'Web Development', icon: IconDeviceImacCode },
  { title: 'Web Design', icon: IconPalette },
  { title: 'Creative Content', icon: IconPencilPlus },
  { title: 'UI/UX Design', icon: IconBulb },
  { title: 'Brading', icon: IconFlag3 },
  { title: 'Fast Support', icon: IconLifebuoy },
];

const Services = () => {
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const { srConfig } = config;

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [srConfig]);

  return (
    <Box component="section" id="fun-facts" sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={4}>
          <Typography component="h2" variant="numberedHeading" color="text.secondary" gutterBottom>
            Featured Services
          </Typography>
        </Box>
        <Box maxWidth={1000} margin="0 auto">
          <Grid container spacing={2} justifyContent="stretch">
            {skills.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} lg={4}>
                {/* eslint-disable-next-line no-return-assign */}
                <ServiceCard ref={(el) => (revealCards.current[index] = el)} {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const ServiceCard = forwardRef((props, ref) => {
  const { ...item } = props;
  const Icon = item.icon;

  return (
    <Card
      ref={ref}
      elevation={0}
      sx={{
        height: 1,
        display: 'flex',
        bgcolor: 'background.paper',
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Avatar
          sx={{
            mb: 2,
            width: 80,
            height: 80,
            bgcolor: 'primary.light',
            color: 'common.white',
          }}
        >
          <Icon stroke={1} size="3.5rem" />
        </Avatar>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
          }}
        >
          {item.title}
        </Typography>
        <Box sx={{ textAlign: 'left', color: 'text.secondary' }}>
          <IconGrain size="1.3rem" />
          <IconGrain size="1.3rem" />
          <IconGrain size="1.3rem" />
        </Box>
      </CardContent>
    </Card>
  );
});

export default Services;

ServiceCard.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
};
