// material-ui
import Stack from '@mui/material/Stack';

// project imports
import Trending from './Trending';

const Homepage = () => (
  <Stack spacing={5}>
    <Trending />
    {Array.from({ length: 10 }, (_, index) => index).map((sectionContent) => (
      <Trending key={`sectionContent[${sectionContent}]`} />
    ))}
  </Stack>
);

export default Homepage;
