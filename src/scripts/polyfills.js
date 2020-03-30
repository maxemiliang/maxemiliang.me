// NodeList.prototype.forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  require('./polyfills/NodeList.forEach');
}
require('./polyfills/classList');
if (Number.parseInt === undefined) {
  require('./polyfills/Number.ParseInt');
}
