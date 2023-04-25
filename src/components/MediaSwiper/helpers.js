// third-party
import _ from 'lodash';

const getValueByMediaQueries = (value, mediaQueries = { xs: undefined, sm: undefined, md: undefined, lg: undefined, xl: undefined }) => {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
  const breakpoint = breakpoints.findLast((item) => !!mediaQueries[item]);

  if (value[breakpoint]) return value[breakpoint];

  const matchedIndex = breakpoints.indexOf(breakpoint);
  let result;

  breakpoints
    .filter((_, index) => index <= matchedIndex)
    .forEach((breakpoint) => {
      if (!_.isUndefined(value[breakpoint])) {
        result = value[breakpoint];
      }
    });

  return result;
};

const transformValue = (value, mediaQueries) => {
  if (_.isPlainObject(value)) {
    return getValueByMediaQueries(value, mediaQueries);
  }

  return value;
};

export default {
  transformValue,
};
