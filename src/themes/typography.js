/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

const FONT_FAMILY_BASE = `'Roboto', sans-serif`;
const FONT_FAMILY_HEAD = `'Roboto', sans-serif`;
const FONT_SCALE = 1.5;
const FONT_SIZE_BASE = 16;
const FONT_WEIGHT_REGULAR = 400;
const FONT_WEIGHT_MEDIUM = 500;

export const getFontSize = (exponent = 1) => {
  const baseScale = 1;
  const size = baseScale * FONT_SCALE ** exponent;

  return `${size}rem`;
};

export const pxToRem = (size) => {
  const result = size / FONT_SIZE_BASE;

  return `${result.toFixed(4)}rem`;
};

export default function themeTypography(palette) {
  return {
    fontFamily: FONT_FAMILY_BASE,
    h1: {
      fontFamily: FONT_FAMILY_HEAD,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: pxToRem(FONT_SIZE_BASE + 22),
    },
    h2: {
      fontFamily: FONT_FAMILY_HEAD,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: pxToRem(FONT_SIZE_BASE + 10),
    },
    h3: {
      fontFamily: FONT_FAMILY_HEAD,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: pxToRem(FONT_SIZE_BASE + 4),
    },
    h4: {
      fontFamily: FONT_FAMILY_HEAD,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: pxToRem(FONT_SIZE_BASE + 2),
    },
    h5: {
      fontFamily: FONT_FAMILY_HEAD,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: pxToRem(FONT_SIZE_BASE),
    },
    h6: {
      fontFamily: FONT_FAMILY_HEAD,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: pxToRem(FONT_SIZE_BASE - 2),
    },
    subtitle1: {
      fontFamily: FONT_FAMILY_HEAD,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: pxToRem(FONT_SIZE_BASE),
    },
    subtitle2: {
      fontFamily: FONT_FAMILY_HEAD,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: pxToRem(FONT_SIZE_BASE - 2),
    },
    body1: {
      fontFamily: FONT_FAMILY_BASE,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: pxToRem(FONT_SIZE_BASE),
    },
    body2: {
      fontFamily: FONT_FAMILY_BASE,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: pxToRem(FONT_SIZE_BASE - 2),
    },
    button: {
      fontFamily: FONT_FAMILY_BASE,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: pxToRem(FONT_SIZE_BASE - 2),
    },
    caption: {
      fontFamily: FONT_FAMILY_BASE,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: pxToRem(FONT_SIZE_BASE - 4),
      color: palette.text.secondary,
    },
    overline: {
      fontFamily: FONT_FAMILY_BASE,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: pxToRem(FONT_SIZE_BASE - 4),
    },
  };
}
