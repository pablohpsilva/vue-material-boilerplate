import Home from './spa/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Login from './spa/login/Login'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import List from './spa/products/List'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import NotFound from './spa/NotFound'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/products',
    children: [
      {
        path: 'products',
        name: 'products',
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
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  routes,
  mode: 'history',
  saveScrollPosition: true,
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
