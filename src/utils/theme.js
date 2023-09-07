import { darken, lighten } from '@mui/material/styles';

export const generatePalette = () => {};

export const generatePaletteColor = (color, contrastText = '#ffffff') => ({
  50: lighten(color, 0.75),
  100: lighten(color, 0.675),
  200: lighten(color, 0.6),
  300: lighten(color, 0.525),
  400: lighten(color, 0.45),
  500: lighten(color, 0.375),
  600: lighten(color, 0.3),
  700: lighten(color, 0.225),
  800: lighten(color, 0.15),
  900: lighten(color, 0.075),
  main: color,
  light: lighten(color, 0.3),
  dark: darken(color, 0.3),
  contrastText,
});
