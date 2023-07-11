import React from 'react';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import { Jumbotron } from 'components/shared';

const heading = [
  { variant: 'h1', content: 'Heading' },
  { variant: 'h2', content: 'Heading' },
  { variant: 'h3', content: 'Heading' },
  { variant: 'h4', content: 'Heading' },
  { variant: 'h5', content: 'Heading' },
  { variant: 'h6', content: 'Heading' },
];

const subtitle = [
  { variant: 'subtitle1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur' },
  { variant: 'subtitle2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur' },
];

const body = [
  {
    variant: 'body1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
  },
  {
    variant: 'body2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
  },
];

const others = [
  { variant: 'caption', content: 'text' },
  { variant: 'overline', content: 'TEXT' },
];

const sentences =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.';

const StyleGuide = () => (
  <Box component="section" sx={{ py: 2 }}>
    <Container maxWidth="xl">
      <Jumbotron title="Style Guide" />
      <Paper elevation={0} sx={{ p: 4, mt: 2 }}>
        <Stack spacing={2}>
          {heading.map((typo) => (
            <React.Fragment key={typo.variant}>
              <Typography variant={typo.variant}>
                <span>{typo.variant}. </span>
                {typo.content}
              </Typography>
              <Typography>{sentences}</Typography>
              <Typography>{sentences}</Typography>
            </React.Fragment>
          ))}
          {subtitle.map((typo) => (
            <React.Fragment key={typo.variant}>
              <Typography variant={typo.variant}>
                <span>{typo.variant}. </span>
                {typo.content}
              </Typography>
            </React.Fragment>
          ))}
          {body.map((typo) => (
            <Typography key={typo.variant} variant={typo.variant}>
              <span>{typo.variant}. </span>
              {typo.content}
            </Typography>
          ))}
          {others.map((typo) => (
            <Typography key={typo.variant} variant={typo.variant}>
              <span>{typo.variant}. </span>
              {typo.content}
            </Typography>
          ))}
          <Box>
            <Button variant="outlined">Button</Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  </Box>
);

export default StyleGuide;
