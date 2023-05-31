export const themeConfig = {
  gird: {
    spacing: 2,
  },
  shape: {
    borderRadius: 6,
  },
};

// Grid Layout
const GRID_SPACING = themeConfig.gird.spacing;
const GRID_SPACING_SMALL = GRID_SPACING / 2;
const GRID_SPACING_MEDIUM = GRID_SPACING;
const GRID_SPACING_LARGE = GRID_SPACING * 2;
export const gridSpacing = (size = 'medium') => {
  const values = {
    small: GRID_SPACING_SMALL,
    medium: GRID_SPACING_MEDIUM,
    large: GRID_SPACING_LARGE,
  };

  return values[size] || GRID_SPACING_MEDIUM;
};

// Shape
const BORDER_RADIUS = `${themeConfig.shape.borderRadius}px`;
const BORDER_RADIUS_SMALL = `${themeConfig.shape.borderRadius / 2}px`;
const BORDER_RADIUS_MEDIUM = BORDER_RADIUS;
const BORDER_RADIUS_LARGE = `${themeConfig.shape.borderRadius * 2}px`;
export const borderRadius = (size = 'medium') => {
  if (!themeConfig.shape.borderRadius) return 0;

  const values = {
    small: BORDER_RADIUS_SMALL,
    medium: BORDER_RADIUS_MEDIUM,
    large: BORDER_RADIUS_LARGE,
  };

  return values[size] || size;
};
