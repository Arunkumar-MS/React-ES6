var express = require('express');
var routes = require('./service/routes')
var app = express();
app.set('views', __dirname + '\\views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/Assets'));
app.listen(4000);
console.log('runing @ 4000');

//#######################################################
//           API ROUTING
//#######################################################
app.get('/search',routes.search);
app.get('/ProductDetail',routes.productDetails);
app.get('/navigation',routes.sitenavigation);
app.get('/', function (req, res) {
    res.render('index.html');
});




