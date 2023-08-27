// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import { IconCertificate } from '@tabler/icons';

const education = [
  { id: 1, title: 'Bachelor Degree', provider: 'Can Tho University' },
  { id: 2, title: 'IELTS Certification 8.0', provider: 'IDP Education' },
  { id: 3, title: 'ISTQB Foundation Level Certification', provider: 'ATSQA in the U.S.' },
];

const Education = () => (
  <Box component="section" id="education" sx={{ py: 8, bgcolor: 'background.paper' }}>
    <Container maxWidth="xl">
      <Box maxWidth={720} margin="0 auto" textAlign="center" mb={4}>
        <Typography variant="numberedHeading" component="h2" gutterBottom>
          My Education
        </Typography>
        <Typography variant="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {education.map((item) => (
            <Grid key={item.id} item xs={12} lg={4}>
              <EducationCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
);

const EducationCard = (props) => {
  const { ...item } = props;
  return (
    <Card elevation={0} sx={{ bgcolor: 'background.default' }}>
      <CardContent>
        <Typography color="primary.main">
          <IconCertificate stroke={1} size="5rem" />
        </Typography>
        <Typography variant="overline" color="text.secondary">
          {item.provider}
        </Typography>
        <Typography variant="h3">{item.title}</Typography>
        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
      </CardContent>
    </Card>
  );
};

export default Education;
