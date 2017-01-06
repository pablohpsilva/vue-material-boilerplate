import VueRouter from 'vue-router';

import Home from '../spa/Home';
import Login from '../spa/login/Login';
import List from '../spa/products/List';
import NotFound from '../spa/NotFound';

/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/login',
    children: [
      {
        path: 'produtos',
        name: 'produtos',
        component: List,
      },
      {
        path: 'products/:id',
        // component: Hello,
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export const VueRouterObject = {
  routes,
  mode: 'history',
  saveScrollPosition: true,
};

export const router = new VueRouter(VueRouterObject);

export default VueRouterObject;
