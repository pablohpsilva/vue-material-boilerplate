export const extractRequestData = (request) => {
  if (request.data.hasOwnProperty('data')) {
    return request.data.data;
  }
  return request.data;
};
