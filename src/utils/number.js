// third-party
import isNull from 'lodash/isNull';
import isFinite from 'lodash/isFinite';
import isNumber from 'lodash/isNumber';
import isUndefined from 'lodash/isUndefined';
import toNumber from 'lodash/toNumber';
import numeral from 'numeral';

// eslint-disable-next-line import/prefer-default-export
export const formatNumber = (originalValue, format = '0[,][00]') => {
  let value = originalValue;

  if (isNull(value) || isUndefined(value)) {
    return originalValue;
  }

  if (!isNumber(value)) {
    value = toNumber(value);
  }

  if (!isFinite(value)) {
    return originalValue;
  }

  return numeral(value).format(format);
};
