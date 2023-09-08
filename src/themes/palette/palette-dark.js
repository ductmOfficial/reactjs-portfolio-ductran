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
  primary: generatePaletteColor('#9e9d24'),
  secondary: generatePaletteColor('#F7A400', '#3a9efd'),
  error: generatePaletteColor('#d32f2f'),
  warning: generatePaletteColor('#ed6c02'),
  info: generatePaletteColor('#0288d1'),
  success: generatePaletteColor('#4CAF50'),
  text: {
    primary: '#e8e8e8',
    secondary: alpha('#e8e8e8', 0.7),
    disabled: alpha('#e8e8e8', 0.5),
  },
  background: {
    paper: '#121212',
    default: '#181818',
  },
  divider: '#181818',
};
