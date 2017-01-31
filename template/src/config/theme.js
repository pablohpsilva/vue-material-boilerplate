const app = {
  primary: {
    color: 'blue',
    hue: 600,
  },
  accent: {
    color: 'orange',
    hue: 800,
  },
  warn: {
    color: 'red',
    hue: 400,
  },
  background: 'white',
};

export default (Vue) => {
  Vue.material.registerTheme('default', app);
};
