import Box from '@mui/material/Box';

// material-ui
import Stack from '@mui/material/Stack';

// project imports
import MediaFrame from './MediaFrame';

const Homepage = () => (
  <Stack spacing={5}>
    {Array.from({ length: 20 }, (_, index) => index).map((sectionContent) => (
      <Box key={`sectionContent[${sectionContent}]`}>
        <MediaFrame title="What to watch" subtitle="Movies and TV shows that you have watchlisted" moreURL="/movies" />
      </Box>
    ))}
  </Stack>
);

export default Homepage;
