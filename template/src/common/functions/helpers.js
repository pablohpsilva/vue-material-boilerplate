export const normalizeMap = (map) => {
  if (Array.isArray(map)) {
    return map.map(key => ({ key, val: key }));
  }
  return Object.keys(map).map(key => ({ key, val: map[key] }));
};

export const extendVueComponent = (target, extendsComponent) =>
  Object.keys(target).forEach((item) => {
    if (extendsComponent.item) {
      target[item] = Object.assign(target[item], extendsComponent[item]);
    }
  });
  // Object.keys(target).map((key) => {
  //   if (extendsComponent[key]) {
  //     target[key] = normalizeMap(extendsComponent[key]);
  //   }
  //   return key;
  // });

export const mapFunctions = (test, actions) => {
  const res = {};
  normalizeMap(actions).forEach(({ key, val }) => {
    res[key] = function mapActions(...args) {
      return test[key].apply(this.$store, [val].concat(args));
    };
  });
  return res;
};
