const mergeObjectsDeep = (target: object, sources: object[]) => {
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      if (typeof source[key] === 'object') {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeObjectsDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  });
  return target;
};

export default mergeObjectsDeep;
