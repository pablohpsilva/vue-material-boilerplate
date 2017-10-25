import Home from '../spa/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Login from '../spa/login/Login'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import NotFound from '../spa/NotFound'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
/* eslint-disable import/prefer-default-export */
export const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/login'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '/login',
    component: Login{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '*',
    component: NotFound{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const VueRouterObject = {
  routes,
  mode: 'history',
  saveScrollPosition: true{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default VueRouter => new VueRouter(VueRouterObject){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
