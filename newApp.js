var reactViewEngine, routes, bodyParser, express, jade, fs, path, app, isDev;
reactViewEngine = require('./lib/react-view-engine');
routes = require('./routes');
bodyParser = require('body-parser');
express = require('express');
jade = require('jade');
fs = require('fs');
path = require('path');
app = express();
app.use(express['static'](path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.locals.title = 'xx';
isDev = app.get('env') === 'development';
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'ls');
app.engine('ls', reactViewEngine({
  layout: jade.compile(fs.readFileSync(path.join(__dirname, 'views/layout.jade'), 'utf8'))
}));
app.use(routes);
var server;
server = app.listen(process.env.PORT || 3000, function(){
  return console.log("Express server listening at " + JSON.stringify(server.address()));
});
