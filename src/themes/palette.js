/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  return {
    mode: theme?.customization?.navType,
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
      contrastText: theme.colors?.primaryContrastText,
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
      contrastText: theme.colors?.secondaryContrastText,
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark,
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark,
    },
    success: {
      light: theme.colors?.successLight,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark,
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      200: theme.colors?.grey200,
      500: theme.colors?.grey500,
      600: theme.colors?.grey600,
      700: theme.colors?.grey700,
      900: theme.colors?.grey900,
    },
    text: {
      primary: theme.textPrimary,
      secondary: theme.textSecondary,
      disabled: theme.colors?.textDisabled,
      hint: theme.colors?.textHint,
    },
    background: {
      paper: theme.paper,
      default: theme.background,
    },
    divider: theme.divider,
  };
}
