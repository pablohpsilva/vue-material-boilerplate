export const email = (val) => {
  if (!val) {
    return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  /* eslint-disable max-len */
  const rfcemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    regemail = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  return rfcemail.test(val) && regemail.test(val){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  /* eslint-enable max-len */
};
