import Vue from 'vue';

const app = {
  primary: {
    color: 'blue',
    hue: 500,
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

Vue.material.registerTheme('default', app);
