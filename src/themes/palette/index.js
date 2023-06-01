import darkPalette from './palette-dark';
import lightPalette from './palette-light';

/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */
export default function themePalette(mode) {
  return mode === 'dark' ? darkPalette : lightPalette;
}
