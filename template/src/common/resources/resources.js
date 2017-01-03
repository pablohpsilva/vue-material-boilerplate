const basePath = 'http://tnkajgsyxadfyykqw.stoplight-proxy.io/api';

const loginActions = {
  login: { method: 'POST', url: `${basePath}/login` },
};
export const loginResource = resource => resource(`${basePath}/login`, {}, loginActions);
