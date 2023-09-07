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
import { IconBulb, IconDeviceImacCode, IconFlag3, IconLifebuoy, IconPalette, IconPencilPlus } from '@tabler/icons-react';

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

const Advertisement = () => {
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
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={6}>
          <Typography component="h2" variant="numberedHeading" color="text.secondary" gutterBottom>
            My Best Service
          </Typography>
        </Box>
        <Box maxWidth={1000} margin="0 auto">
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
        display: 'flex',
        bgcolor: 'background.paper',
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: 'primary.light',
            color: 'common.white',
            mb: 2,
          }}
        >
          <Icon stroke={1} size="3.5rem" />
        </Avatar>
        <Typography
          variant="h3"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
          }}
        >
          {item.title}
        </Typography>
        <Typography color="text.secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
      </CardContent>
    </Card>
  );
});

export default Advertisement;

SkillCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  title: PropTypes.string,
};
