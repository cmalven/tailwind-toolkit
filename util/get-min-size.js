module.exports = function getMinSize(theme) {
  return theme(`minViewport`) ?? '320px';
};