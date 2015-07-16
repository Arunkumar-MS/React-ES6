var express, react, routes, baseProps;
express = require('express');
react = require('react');
module.exports = routes = express.Router();
baseProps = function(req, res, next){
  var ref$;
  ((ref$ = res.locals).props || (ref$.props = {})).base = true;
  return next();
};
routes.get('/:app/:page', baseProps, function(req, res){
  res.locals.title = "App " + req.params.app;
  return res.render(req.params.app, {
    props: {
      page: req.params.page
    }
  });
});
