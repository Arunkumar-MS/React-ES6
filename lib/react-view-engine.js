var react, path, replace$ = ''.replace;
react = require('react');
path = require('path');
module.exports = function(options){
  options = options || {};
  return function(view, locals, callback){
    var viewFileName, ref$, Component, e;
    viewFileName = path.relative(locals.settings.views, view);
    locals.component = replace$.call(viewFileName, "." + locals.settings['view engine'], '');
    locals.props = import$((ref$ = locals._locals).props || (ref$.props = {}), locals.props);
    delete locals._locals;
    delete locals.cache;
    delete locals.settings;
    try {
      Component = require(view);
      locals.content = react.renderComponentToString(new Component(locals.props));
      return callback(null, options.layout(locals));
    } catch (e$) {
      e = e$;
      console.error(e.stack);
      return callback(new Error('Could not require component: ' + view));
    }
  };
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
