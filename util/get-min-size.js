module.exports = function getMinSize(theme) {
  return theme(`minViewport`) ?? '300px';
};