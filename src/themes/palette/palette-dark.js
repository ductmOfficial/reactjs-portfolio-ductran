import { alpha } from '@mui/material/styles';

// project imports
import { THEME__MODE } from 'constants/theme';
import { generatePaletteColor } from 'utils/theme';

export default {
  mode: THEME__MODE.DARK,
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  primary: generatePaletteColor('#64ffda'),
  secondary: generatePaletteColor('#F7A400', '#3a9efd'),
  error: generatePaletteColor('#d32f2f'),
  warning: generatePaletteColor('#ed6c02'),
  info: generatePaletteColor('#0288d1'),
  success: generatePaletteColor('#4CAF50'),
  text: {
    primary: '#8892b0',
    secondary: '#ccd6f6',
    disabled: alpha('#8892b0', 0.5),
  },
  background: {
    paper: '#112240',
    default: '#0a192f',
  },
  divider: '#0a192f',
};
