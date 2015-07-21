var express = require('express');
var request = require('request');
var config = require('./config')
var app = express();
app.set('views', __dirname + '\\views');
console.log(__dirname + '\\views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/Assets'));
app.listen(4000);
console.log('runing @ 4000');

app.get('/search',function (req, res)
{
var Header = {'Content-Type': 'application/json', 'Accept': 'application/json','Ighs-Language': 'en-GB' ,'Ighs-Appkey': config.Appkey};
console.log('https://s.tesco.pl/api/v1/search/products?query='+req.query.search);
console.log(req.query.search);
request.get({
url: config.productApiUrl +req.query.search,
headers: Header,
rejectUnauthorized: false
},
function (error, response,body) {
res.send(body);
})


}
);

app.get('/', function (req, res)
{
res.render('index.html');

});
