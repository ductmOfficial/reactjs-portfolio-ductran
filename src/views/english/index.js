// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// third-party
import Highlighter from 'react-highlight-words';

// assets
import data from './fixture';
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const Highlight = ({ children, onDoubleClick }) => {
  const handleClick = () => {
    onDoubleClick(children);
  };

  return (
    <Typography variant="h2" component="strong" onDoubleClick={handleClick}>
      {children}
    </Typography>
  );
};

const Unhighlight = ({ children, onMouseUp }) => (
  <Typography variant="body1" component="span" className="is-unhighlight" onMouseUp={onMouseUp}>
    {children}
  </Typography>
);

const English = () => {
  const [searchWords, setSearchWords] = useLocalStorage('STORAGE_WORDS', []);

  const handleMouseUp = () => {
    const selection = document.getSelection();
    const content = selection.toString();

    setSearchWords((prev) => [...prev, content]);
  };

  const handleRemove = (content) => {
    setSearchWords((prev) => {
      const newWords = prev.filter((text) => text !== content);

      return newWords;
    });
  };

  return (
    <Box>
      <Container maxWidth="xl">
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={searchWords}
                autoEscape
                textToHighlight={data.content}
                highlightTag={(props) => <Highlight {...props} onDoubleClick={handleRemove} />}
                unhighlightTag={(props) => <Unhighlight {...props} onMouseUp={handleMouseUp} />}
              />
            </Grid>
            <Grid item xs={6} />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default English;
