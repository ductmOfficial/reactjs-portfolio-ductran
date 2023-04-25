import { createTheme } from '@mui/material/styles';

// assets
import colors from 'assets/scss/_themes-default.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';
import config from 'config';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
  const color = colors;
  const isDark = customization.navType === 'dark';

  const themeOption = {
    colors: color,
    paper: !isDark ? color.paper : color.darkPaper,
    divider: !isDark ? color.divider : color.darkDivider,
    heading: !isDark ? color.textPrimary : color.darkTextPrimary,
    textPrimary: !isDark ? color.textPrimary : color.darkTextPrimary,
    textSecondary: !isDark ? color.textSecondary : color.darkTextSecondary,
    background: !isDark ? color.backgroundDefault : color.darkBackground,
    customization,
  };

  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {},
    typography: themeTypography(themeOption),
    shape: {
      borderRadius: config.borderRadius,
    },
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
