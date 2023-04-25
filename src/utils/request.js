import queryString from 'query-string';

export const getQuery = (params) =>
  queryString.stringify(params, {
    skipNull: true,
  });

export const stringifyUrl = (url, query, options = {}) =>
  queryString.stringifyUrl({ url, query }, { skipEmptyString: true, skipNull: true, ...options });
