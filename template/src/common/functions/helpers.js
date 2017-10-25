export const extractRequestData = (request) => {
  return (request.data.hasOwnProperty('data'))
    ? request.data.data
    : request.data{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
};
