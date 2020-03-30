// NodeList.prototype.forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  require('./polyfills/NodeList.forEach');
}
if (Number.parseInt === undefined) {
  require('./polyfills/Number.ParseInt');
}

// Externals
require('./polyfills/classList');
require('./polyfills/smoothScroll');
