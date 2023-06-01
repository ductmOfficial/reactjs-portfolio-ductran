// material-ui
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

const MovieContent = () => (
  <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
    <MainCard title="Trailer">
      <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
    </MainCard>
    <MainCard title="Similar Movies">
      <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
    </MainCard>
    <MainCard title="Trailer">
      <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
    </MainCard>
    <MainCard title="Trailer">
      <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
    </MainCard>
    <MainCard title="Similar Movies">
      <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
    </MainCard>
    <MainCard title="Trailer">
      <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
    </MainCard>
    <MainCard title="Recommedation for YOU">
      <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
    </MainCard>
  </Box>
);

export default MovieContent;

MovieContent.propTypes = {};
