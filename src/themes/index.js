import { createTheme } from '@mui/material/styles';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization, mode) => {
  const palette = themePalette(mode);
  const typography = themeTypography(palette);

  const themes = createTheme({
    direction: 'ltr',
    mixins: {},
    palette,
    typography,
    shape: {
      borderRadius: 4,
    },
  });

  themes.components = componentStyleOverrides(palette);

  return themes;
};

export default theme;
