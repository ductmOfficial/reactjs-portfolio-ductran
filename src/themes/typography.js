/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

export default function themeTypography(palette) {
  return {
    fontFamily: `'Segoe UI', sans-serif`,
    htmlFontSize: 16,
    // fontSize: 14,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 600,
    // fontWeightBold: 700,
    h6: {
      // fontWeight: 600,
      color: palette.text.primary,
      // fontSize: '0.75rem',
    },
    h5: {
      // fontSize: '0.875rem',
      color: palette.text.primary,
      // fontWeight: 600,
    },
    h4: {
      // fontSize: '1rem',
      color: palette.text.primary,
      // fontWeight: 600,
    },
    h3: {
      // fontSize: '1.25rem',
      color: palette.text.primary,
      // fontWeight: 600,
    },
    h2: {
      // fontSize: '1.5rem',
      color: palette.text.primary,
      // fontWeight: 700,
    },
    h1: {
      // fontSize: '2.125rem',
      color: palette.text.primary,
      // fontWeight: 700,
    },
    subtitle1: {
      // fontSize: '0.875rem',
      // fontWeight: 600,
      color: palette.text.primary,
    },
    subtitle2: {
      // fontSize: '0.75rem',
      // fontWeight: 400,
      color: palette.text.secondary,
    },
    caption: {
      // fontSize: '0.75rem',
      color: palette.text.secondary,
      // fontWeight: 400,
    },
    body1: {
      // fontSize: '0.875rem',
      // fontWeight: 400,
      lineHeight: '1.334em',
    },
    body2: {
      letterSpacing: '0em',
      // fontWeight: 400,
      lineHeight: '1.5em',
      color: palette.text.primary,
    },
  };
}
