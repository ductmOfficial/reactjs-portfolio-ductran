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
  primary: generatePaletteColor('#1f306e'),
  secondary: generatePaletteColor('#c7417b'),
  error: generatePaletteColor('#d32f2f'),
  warning: generatePaletteColor('#ed6c02'),
  info: generatePaletteColor('#0288d1'),
  success: generatePaletteColor('#2e7d32'),
  text: {
    primary: '#e9e8ec',
    secondary: alpha('#e9e8ec', 0.7),
    disabled: alpha('#e9e8ec', 0.5),
  },
  background: {
    paper: '#181818',
    default: '#212121',
  },
  divider: '#616161',
};
