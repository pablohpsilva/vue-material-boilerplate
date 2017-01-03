import Home from './spa/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from './spa/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/example',
    children: [
      {
        path: 'example',
        name: 'example',
        component: Hello,
      },
    ],
  },
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  routes,
  mode: 'history',
  saveScrollPosition: true,
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
