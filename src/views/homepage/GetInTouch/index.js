// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GetInTouch = () => (
  <Box component="section" id="get-in-touch" sx={{ py: 1 }}>
    <Box sx={{ bgcolor: 'common.white', py: 8 }}>
      <Box maxWidth={720} margin="0 auto" textAlign="center" px={{ xs: 2, lg: 0 }}>
        <Typography variant="h2" fontWeight={600} gutterBottom>
          Get In Touch
        </Typography>
        <Typography mb={2}>
          Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </Typography>
        <Button variant="contained" size="large">
          Say Hello
        </Button>
      </Box>
    </Box>
  </Box>
);

export default GetInTouch;
