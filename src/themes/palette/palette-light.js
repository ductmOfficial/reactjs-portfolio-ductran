import { alpha } from '@mui/material/styles';

// project imports
import { THEME__MODE } from 'constants/theme';
import { generatePaletteColor } from 'utils/theme';

export default {
  mode: THEME__MODE.LIGHT,
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  primary: generatePaletteColor('#557f5c'),
  // secondary: generatePaletteColor('#d4b745'),
  secondary: generatePaletteColor('#eedd51'),
  error: generatePaletteColor('#d32f2f'),
  warning: generatePaletteColor('#ed6c02'),
  info: generatePaletteColor('#0288d1'),
  success: generatePaletteColor('#4CAF50'),
  text: {
    primary: '#354e5c',
    secondary: alpha('#354e5c', 0.7),
    disabled: alpha('#354e5c', 0.5),
  },
  background: {
    paper: '#ffffff',
    default: '#f8f8f8',
  },
  divider: '#f8f8f8',
};
