import { darken, lighten } from '@mui/material/styles';

export const generatePalette = () => {};

export const generatePaletteColor = (color, contrastText = '#ffffff') => ({
  main: color,
  light: lighten(color, 0.3),
  dark: darken(color, 0.3),
  contrastText,
});
